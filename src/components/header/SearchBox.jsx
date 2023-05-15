import React from "react";
import { Box, Button, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = () => {
  return (
    <Box
      sx={{
        width: "40%",
        marginLeft: "2%",
        maxWidth: "550px",
        borderRadius: "2px",
        overflow: "hidden",
        display: "flex",
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
    </Box>
  );
};

export default SearchBox;
