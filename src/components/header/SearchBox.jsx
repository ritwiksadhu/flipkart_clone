import React from "react";
import { Box, Button, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useStyleData } from "../../context/StyleProvider";

const SearchBox = () => {

  const {SeatchBoxStyled}  =  useStyleData()
  return (
    <SeatchBoxStyled
      sx={{

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
        placeholder="Search for Products"
      />
      <Button
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
    </SeatchBoxStyled>
  );
};

export default SearchBox;
