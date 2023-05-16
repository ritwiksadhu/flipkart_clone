import React from 'react'
import ProductCategory from './ProductCategory';
import { Box } from '@mui/material';

const ProductCategories = () => {
    const productCategoriesData = [
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100', text: 'Grocery' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100', text: 'Mobile' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100', text: 'Fashion' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100', text: 'Electronics' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100', text: 'Home' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100', text: 'Appliances' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100', text: 'Travel' },
        { url: 'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100', text: 'Beauty, Toys & More' }
    ];
  return (
    <Box 
    elevated=""
    sx={{
        display:"flex",
        justifyContent:"center",
        margin:"0 auto",
        width:"1",
        height:"1",
        boxShadow:1,
        padding:".25rem 0"
    }} >
        {productCategoriesData.map((element)=>{
            return <ProductCategory data={element} />
        })}
    </Box>
  )
}

export default ProductCategories
