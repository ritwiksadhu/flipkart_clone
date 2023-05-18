import React from 'react'
import SearchedItem from './SearchedItem'
import { Box, List, ListItem } from "@mui/material";
import Button from '@mui/material/Button';
const SearchedItems = () => {
  return (
<Box
sx={{
  margin: "52px auto auto auto",
  width:"60%",
  alignItems:"center",
  textAlign:"center"
}}
>
<p>Showing 1 - 24 of 45 results</p>
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
 <Button>Relevance</Button>
 <Button>Stars</Button>
 <Button>price -- low to high</Button>
 <Button>price -- high to low</Button>
 
</Box>
<SearchedItem/>
</Box>
  )
}

export default SearchedItems
