import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const SearchSuggestions = ({data}) => {
  return (
    <Link to={`/products/${data.id}`}
    style={{
      textDecoration:"none",
      color:"black",
    }}
    >
    <Box
    style={{
        height:"fit-content",
        display:"flex",
        alignItems:"center",
        marginTop:".5rem"
    }}
    >

        <img src={data.thumbnail} alt={data.title} 
        style={{
            height:"50px",
            width:"50px",
            zIndex:"3",
            marginRight:"1rem",
            pointerEvent:"none"
        }}
        />
        <Typography variant='p'>{data.title}</Typography>

    </Box>
  </Link>
  )
}

export default SearchSuggestions
