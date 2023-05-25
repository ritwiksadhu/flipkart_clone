import React, { useEffect, useState } from 'react'
import SearchedItem from './SearchedItem'
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import { useParams } from 'react-router';
import { useContextData } from '../../context/ContextProvider';
import { styled } from "@mui/material/styles";

const SearchedItems = () => {

  const {keywordSearched} = useParams()
  const [skip,setSkip] = useState(0)
  const [nextDisable,setNextDisable] = useState("")
  const [previousDisable,setPreviousDisable] = useState("")
  // const [searchResultData,setSearchResultData] = useState({})

  const {roundedPrice,
    getProdData,
    searchResultData,
    setSearchResultData} = useContextData()

  useEffect(()=>{
    getProdData(keywordSearched,setSearchResultData,10,skip)
  },[keywordSearched,skip])

  function sortByStars(){
    let products = searchResultData.products.sort((a,b)=>b.rating - a.rating)
    setSearchResultData({...searchResultData,products})
  }
  
  function sortLowToHigh(){
    let products = searchResultData.products.sort((a,b)=>{
      let first = roundedPrice(a.price,a.discountPercentage)
      let second = roundedPrice(b.price,b.discountPercentage)
      return first - second
    })
    setSearchResultData({...searchResultData,products})
  }

  function sortHighToLow(){
    let products = searchResultData.products.sort((a,b)=>{
      let first = roundedPrice(a.price,a.discountPercentage)
      let second = roundedPrice(b.price,b.discountPercentage)
      return second - first
    })
    setSearchResultData({...searchResultData,products})
  }


  const SearchItemsContainer = styled(Box)(({theme})=>({
    margin: "58px auto 2rem auto",
    width:"60%",
    alignItems:"center",
    textAlign:"center",
    [theme.breakpoints.down("md")]:{
      width:"90%"
    },
    [theme.breakpoints.down("sm")]:{
      width:"100%"
    }
  }))

  function handleNext(){
    if((skip+10)<searchResultData.total){
      setSkip(skip+10)
      setNextDisable("")
    }
    else{
      setNextDisable(true)
    }
    
  }
  
  function handlePrevious(){
    if(skip > 0){
      setSkip(skip-10)
      console.log("clicked")
      setPreviousDisable("")
      
    }
    else{
      setPreviousDisable(true)
    }

  }

  if(searchResultData.products?.length === 0){
    return <Box 
    style={{
        backgroundColor:"#ECF0F3",
        height:"100vh",
        width:"100vw",
        display:"grid",
        placeContent:"center"
    }}
     >
        <Box style={{textAlign:"center"}}
        >
          <img height="500px" src="https://cdn.dribbble.com/users/3512533/screenshots/14168376/media/1357b33cb4057ecb3c6f869fc977561d.jpg?compress=1&resize=1000x750&vertical=top" alt="" />
        </Box>
    </Box>
}
  return (
<SearchItemsContainer>
<p>Showing {" "}
  {searchResultData.skip +1} - 
  {searchResultData.limit + searchResultData.skip} of 
  {" "} {searchResultData.total} results</p>


  {/* FILTERING-BUTTONS */}
<Box
style={{
  textAlign:"left",
  display:"flex",
  flexDirection:"row",
  justifyContent:"flex-start",
  alignItems:"center",
  marginLeft:"1rem"
}}
>
 <p>sort by</p> 
 <Button onClick={sortByStars} >Stars</Button>
 <Button onClick={sortLowToHigh} >price -- low to high</Button>
 <Button onClick={sortHighToLow} >price -- high to low</Button>
</Box>

{
  searchResultData.products?.length >0 ? searchResultData.products.map((element)=> <SearchedItem key={element.id}  data={element}/>):"no data found"
}
{
  searchResultData.products?.length > 10 ? <Button
  onClick={handlePrevious}
  disable={previousDisable}
  >previous</Button> :""
}
{
  searchResultData.products?.length > 10 ? 
  <Button
  onClick={handleNext}
  disable={nextDisable}
  >Next</Button> :""
}

</SearchItemsContainer>
  )
}

export default SearchedItems
