import { Box } from "@mui/system";
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { styled } from "@mui/material/styles";
const ProductPageComponent = () => {
    const {productId} = useParams()
    const [product,setProduct] = useState()
    useEffect(()=>{
      (async function(){
        await fetch(`https://dummyjson.com/products/${productId}`)
        .then(res => res.json())
        .then(data => setProduct({...data}));
      })()
      // getProductDetails()
    },[])

    const ProductWrapper = styled(Box)(({theme})=>({
      marginTop:"58px",
      display:"flex",
      height:"100%",
      width:"97%",
      margin:"58px auto 0 auto",
      background:"fff",
      "& .left":{
        width:"40%",
        border:"1px solid blue"
      }
    }))



  return (
    <>
    <ProductWrapper>
      <Box class="left">
      <img src={product?.images[0]} alt="" />
      </Box>
    <Box class="right">
      {/* {JSON.stringify(product)} */}
    </Box>
    </ProductWrapper>
    </>
  )
}

export default ProductPageComponent
