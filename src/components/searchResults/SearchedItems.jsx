import React, { useEffect, useState } from 'react'
import SearchedItem from './SearchedItem'
import { Box } from "@mui/material";
import Button from '@mui/material/Button';
import { useParams } from 'react-router';
import { useContextData } from '../../context/ContextProvider';
import { styled } from "@mui/material/styles";

const SearchedItems = () => {

  const {keywordSearched} = useParams()
  const [searchResultData,setSearchResultData] = useState({})

  const {roundedPrice} = useContextData()

  useEffect(()=>{
    async function getProdData (){
      await fetch(`https://dummyjson.com/products/search?q=${keywordSearched}`)
      .then(res => res.json())
      .then(data => setSearchResultData({...data}));
    }
    getProdData()
  },[keywordSearched])

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
    margin: "58px auto auto auto",
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

</SearchItemsContainer>
  )
}

export default SearchedItems
