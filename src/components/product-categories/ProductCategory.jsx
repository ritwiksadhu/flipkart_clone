import { Box, Typography } from '@mui/material'
import React from 'react'

const ProductCategory = ({data}) => {

    const {url,text} = data
  return (
    <Box 
    sx={{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:"100px",
        width:"80px",
        flexGrow:"0",
        flexShrink:"0",
        whiteSpace:"nowrap",
        margin:"0 2rem "
    }}
    >
      <img src={url} alt={text} 
        style={{
            height:"65px",
            width:"fit-content"
        }}
      />
      <Typography>
        {text}
      </Typography>     
    </Box>
  )
}

export default ProductCategory
