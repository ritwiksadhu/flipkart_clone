import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { useStyleData } from '../../context/StyleProvider'
 
const SearchSuggestions = ({data}) => {

  const {SearchedSuggestionWrapper} =  useStyleData()



  return (
    <Link to={`/products/${data.id}`}
    style={{
      textDecoration:"none",
      color:"black",
    }}
    >
    <SearchedSuggestionWrapper>

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

    </SearchedSuggestionWrapper>
  </Link>
  )
}

export default SearchSuggestions
