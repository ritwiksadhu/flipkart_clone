import {Typography } from '@mui/material'
import React from 'react'
import { useStyleData } from '../../context/StyleProvider'

const ProductCategory = ({data}) => {

  const {ProductCategoryCard} = useStyleData()
    const {url,text} = data

  return (
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
  )
}

export default ProductCategory
