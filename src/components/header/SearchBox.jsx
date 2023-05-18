import React from "react";
import { Button, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useStyleData } from "../../context/StyleProvider";
import { useContextData } from "../../context/ContextProvider";
import { useNavigate, useParams } from "react-router";

const SearchBox = () => {

  const {searchKeyword,setSearchKeyword} = useContextData()
  const {SearchBoxStyled}  =  useStyleData()
  const navigate = useNavigate()

  function handleInputChange(e){
    setSearchKeyword(e.target.value)
  }
  function showSearchResults(e){
    e.preventDefault()
    navigate(`/search/${searchKeyword}`)
  }

  return (
    <SearchBoxStyled
    onSubmit={e=>showSearchResults(e)}
    >
      <InputBase
        id="filled-basic"
        label="Filled success"
        style={{
          background: "white",
          width: "100%",
          padding: "0 10px",
        }}
        placeholder="Search for Products"
        value={searchKeyword}
        onChange={e=> handleInputChange(e)}
      />
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
