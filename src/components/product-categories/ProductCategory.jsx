import {Typography } from '@mui/material'
import React from 'react'
import { useStyleData } from '../../context/StyleProvider'
import { Link } from 'react-router-dom'

const ProductCategory = ({data}) => {

  const {ProductCategoryCard} = useStyleData()
    const {url,text} = data

  return (
        <Link  to={`/search/${text}`} style={{textDecoration:"none",color:"black"}} >
    <ProductCategoryCard >
      <img src={url} alt={text} 
        style={{
            height:"65px",
            width:"fit-content"
        }}
      />
      <Typography>
        {text}
      </Typography>    
 
    </ProductCategoryCard>
      </Link>
  )
}

export default ProductCategory
