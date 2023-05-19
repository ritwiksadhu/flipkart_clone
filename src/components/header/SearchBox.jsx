import React, { useEffect, useState } from "react";
import { Box, Button, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useStyleData } from "../../context/StyleProvider";
import { useContextData } from "../../context/ContextProvider";
import { useNavigate, useParams } from "react-router";
import SearchSuggestions from "../searchResults/SearchSuggestions";
import { blue } from "@mui/material/colors";

const SearchBox = () => {

  const {searchKeyword,setSearchKeyword,getProdData,searchResultData} = useContextData()
  const {SearchBoxStyled}  =  useStyleData()
  const [suggestions,setSuggestions] = useState([])
  const [inputOpen,setInputOpen] = useState(false)
  const navigate = useNavigate()
  useEffect(()=>{
    const timer = setTimeout(() => {
      getSuggestions()
    }, 400);
    return ()=>clearTimeout(timer)
  },[searchKeyword])

  function handleInputChange(e){
    setSearchKeyword(e.target.value)
    setInputOpen(true)
  }

  async function getSuggestions(){
    fetch(`https://dummyjson.com/products/search?q=${searchKeyword}&limit=5&select=id,thumbnail,title,price`)
    .then(res => res.json())
    .then(data => setSuggestions(data.products));
  }

  function showSearchResults(e){
    e.preventDefault()
    navigate(`/search/${searchKeyword}`)
  }
  function closeSuggestions(){
    setTimeout(() => {
      setInputOpen(false)
    }, 200);
  }

  return (
    <SearchBoxStyled
    onSubmit={e=>showSearchResults(e)}
    style={{
      position:"relative",

    }}
    >
      <InputBase
        id="filled-basic"
        label="Filled success"
        style={{
          background: "white",
          width: "100%",
          padding: "0 10px",
        }}
        autoComplete="off"
        placeholder="Search for Products"
        value={searchKeyword}
        onChange={e=> handleInputChange(e)}
        onBlur={closeSuggestions}
      />
      {/* suggestions */}
      <Box style={{
        position:"absolute",
        top:"100%",
        color:"black",
        background:blue[50],
        width:"100%",
        zindex:"3"
      }}
      
      >
          {
             inputOpen && suggestions?.map((elem)=>{
              return <SearchSuggestions data={elem}/>
            })
          }
          {/* hello */}
      </Box>
      <Button
        type="submit"
        variant="contained"
        style={{
          borderRadius: "0",
          boxShadow: "none",
          background: "white",
        }}
      >
        <SearchIcon
          style={{
            color: "#2874f0",
          }}
        />
      </Button>
    </SearchBoxStyled>
  );
};

export default SearchBox;
