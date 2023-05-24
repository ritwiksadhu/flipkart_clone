import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAuthData } from '../context/AuthProvider'
import Paper from '@mui/material/Paper';
import {useContextData} from "../context/ContextProvider"
import { styled } from "@mui/material/styles";

const Cart = () => {
    const {cart,removeItemFromCart} = useAuthData()
    const {roundedPrice} =  useContextData()

    const [totalPrice,setTotalPrice] = useState(0)
    const [actualPrice,setActualPrice] = useState()

    useEffect(()=>{
        if(cart){
        let priceSum = 0
        let finalPrice = 0
        cart?.forEach(element => {
            priceSum =  priceSum+element.price
            finalPrice = finalPrice + (roundedPrice(element.price,element.discountPercentage))
            console.log(finalPrice)
         })
         setTotalPrice(priceSum)
         setActualPrice(priceSum - finalPrice)
        }
    },[cart])



    const CartItemsWrapper = styled(Box)(({theme})=>({
        marginTop:"58px",
        height:"100%",
        width:"100%",
        display:"flex",
        justifyContent:"center",
        [theme.breakpoints.down("md")]:{
            flexDirection:"column",
            alignItems:"center"
        }
    }))
    // lefts
    const CartBoxLeftWrapper = styled(Box)(({theme})=>({
        width:"60%",
        height:"fit-content",
        marginRight:"1rem",
        justifyContent:"center",
        [theme.breakpoints.down("md")]:{
            width:"95%",
            margin:"auto"
        }
    }))
    const CartItems = styled(Paper)(({theme})=>({
        display: "flex",
        justifyContent:"space-between",
        alignItems:"center",
        margin:"1rem 0",
    }))
    const CartItemTitle = styled(Box)(({theme})=>({  
        width:"50%",
        display:"flex",
        flexDirection:"column",
        height:"100%",
        justifyContent:"flex-start",
        [theme.breakpoints.down("md")]:{
            width:"30%"
        }
    }))
    const PriceDetailsPaper = styled(Paper)(({theme})=>({  
        width:"300px",
        height:"10rem",
        padding:".25rem",
        marginTop:"1rem",
        [theme.breakpoints.down("md")]:{
            width:"90%",
            margin:"auto",
            marginBottom:"10rem"
        }
    }))

// rights
    const PricingBox = styled(Box)(({theme})=>({
        width:"100%",
        display:"flex",
        justifyContent:"space-Between",

    }))
    const TotalPricingBox = styled(Box)(({theme})=>({
        width:"100%",
        display:"flex",
        justifyContent:"space-Between",
    }))
    const OrderNow = styled(Paper)(({theme})=>({
        position:"fixed",
        top:"80vh",
        height:"5rem",
        width:"80%",
        border:"1px solid red",
        margin:"0 5%",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"0 1rem"
    }))

    


  return (
    <>

    <CartItemsWrapper>
        {/* left */}
        <CartBoxLeftWrapper >
            {
                cart?.map((elem)=>{
                    return <CartItems key={elem.thumbnail} >
                        <img src={elem.thumbnail}
                        style={{
                            height:"150px",
                            minWidth:"120px",
                            width:"15%",
                            objectFit:"cover"
                        }}
                        />
                        <CartItemTitle>
                        <Typography
                        style={{
                            width:"100%",
                            display:"block",
                            margin:"1rem",
                            fontSize:"1.3rem",
                            fontWeight:"500"
                            
                        }}
                        >{elem.title}</Typography>
                        <Typography
                        style={{
                            margin:"1rem"
                            
                        }}
                        >${elem.price}</Typography>
                        </CartItemTitle>

                        <Button
                        onClick={()=>removeItemFromCart(elem)}
                        style={{
                            color:"white",
                            background:"#fb641b",
                            marginRight:"1rem"
                        }}
                        >remove from Cart</Button>
                    </CartItems>
                })
            }
        </CartBoxLeftWrapper>

        {/* Right */}
        <PriceDetailsPaper>
            <Typography
            sx={{textAlign:"center",fontSize:"1.3rem", color:"rgb(120,120,120)", textTransform:"uppercase"}}
            >Price Details</Typography>
            <Box width="100%">

            <PricingBox>
                <Typography fontSize="1.1rem" >Price {" "} {"(" + cart?.length+ ")"}</Typography>
                <Typography fontSize="1.1rem" >${totalPrice?.toFixed(2)}</Typography>
            </PricingBox>
            <PricingBox>
                <Typography fontSize="1.1rem" >Discount</Typography>
                <Typography fontSize="1.1rem" color="green" >
                  - ${(totalPrice - actualPrice)?.toFixed(2)}
                </Typography>
            </PricingBox>
            <PricingBox >
                <Typography fontSize="1.1rem" >Delivery Charges</Typography>
                <Typography color="green" >Free</Typography>
            </PricingBox>
            </Box>

            <TotalPricingBox >
                <Typography fontSize="1.3rem" fontWeight={"500"} marginTop={".5rem"}>Total Price</Typography>
                <Typography  fontSize="1.1rem" fontWeight={"500"} marginTop={".5rem"}> $ {actualPrice?.toFixed(2)}</Typography>
            </TotalPricingBox>

        </PriceDetailsPaper>
    </CartItemsWrapper>
    <OrderNow>
        <Box  >
          <Typography fontSize=".8rem" style={{textDecoration:"line-through"}}> $ {totalPrice}</Typography>
          <Typography>
            { "$ " + (actualPrice)?.toFixed(2)}/-
          </Typography>
        </Box>
        <Button style={{background:"#fb641b",color:"white",borderRadius:"0"}} >Order Now</Button>
    </OrderNow>
    </>
  )
}

export default Cart
