import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";
import { useContextData } from "../../context/ContextProvider";
import { useStyleData } from "../../context/StyleProvider";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import { green } from "@mui/material/colors";
import { useAuthData } from "../../context/AuthProvider";
import { db } from "../../firebase/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
const ProductPageComponent = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const { roundedPrice } = useContextData();
  const { StarRatingStyle } = useStyleData();

  const [itemIncluded,setItemIncluded] = useState(false)


  const {cart,setCart,currentUser} = useAuthData()
  useEffect(() => {
    (async function () {
      await fetch(`https://dummyjson.com/products/${productId}`)
        .then((res) => res.json())
        .then((data) => setProduct({ ...data }));
    })();
    // getProductDetails()
  }, []);

  const ProductWrapper = styled(Box)(({ theme }) => ({
    marginTop: "58px",
    display: "flex",
    height: "100%",
    width: "97%",
    margin: "58px auto 0 auto",
    background: "fff",
    ".left": {
      width: "35%",
      marginLeft: "2rem",
      img: {
        objectFit: "cover",
        width: "100%",
        height: "80%",
      },
    },

    ".right": {
      margin: "1rem 3rem",
    },
  }));

  const ProductPageButtons = styled(Button)(({ theme }) => ({
    width: "46%",
    height: "3rem",
    borderRadius: "0",
    margin: "0 2%",
    color: "white",
    "&.buyNow": {
      background: "#ff9f00",
    },
    "&.addToCart": {
      background: "#fb641b",
    },
  }));

  useEffect(()=>{
      if(cart && product){
        cart.forEach(elem => {
          if(elem.id == product.id){
            setItemIncluded(true)
          }
        });
        console.log(cart)
      }

  },[cart,product])

async function addItemToCart(){
  let docRef = doc(db, "user",currentUser.uid);
  await setDoc(docRef, {
    createdBy:currentUser.uid,
    cart:[...cart,product]
  })
  .then(()=>{
    setCart([...cart,product])
    console.log("item added")})
  .catch(()=>console.log("item not added"))
}

async function removeItemFromCart(){
  let docRef = doc(db, "user",currentUser.uid);
  let dummy = cart.filter(item=> item.id !== product.id)
  await setDoc(docRef, {
    createdBy:currentUser.uid,
    cart:[...dummy]
  })
  .then(()=>{
    setCart([...dummy])
    setItemIncluded(false)
    console.log("item removed")})
  .catch(()=>console.log("item not removed"))
}
  return (
    <>
      <ProductWrapper>
        <Box className="left">
          <img src={product?.images[0]} alt="" />
          <Box>
            <ProductPageButtons className="buyNow">Buy Now </ProductPageButtons>
          {itemIncluded?<ProductPageButtons 
          onClick={removeItemFromCart}
          className="addToCart">
              remove from cart
            </ProductPageButtons> :
            <ProductPageButtons
            onClick={addItemToCart}
            className="addToCart">
              Add to Cart
            </ProductPageButtons>}
          </Box>
        </Box>
        <Box className="right">
          <Typography
            style={{
              fontSize: "1.5rem",
              fontWeight: "600,",
            }}
          >
            {product?.title}{" "}
          </Typography>
          <StarRatingStyle sx={{ fontSize: ".8rem" }}>
            {product?.rating}★
          </StarRatingStyle>
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <Typography sx={{ marginRight: ".4rem", fontSize: "2rem" }}>
              ${roundedPrice(product?.price, product?.discountPercentage)}
            </Typography>
            <Typography
              sx={{
                marginRight: ".4rem",
                color: "gray",
                textDecoration: "line-Through",
                fontSize: "1rem",
              }}
            >
              ${product?.price}
            </Typography>
            <Typography
              sx={{ marginRight: ".4rem", color: "green", fontSize: "1.1rem" }}
            >
              {product?.discountPercentage}%
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ fontSize: "1rem", fontWeight: "500", marginRight: "1rem" }}
            >
              Description
            </Typography>
            <Typography sx={{ width: "60%" }}>
              {product?.description}
            </Typography>
          </Box>
          <Box sx={{display:"flex"}}>
            <Box>
              <Typography 
               sx={{fontWeight:"500"}}
               >Available offers</Typography>
            </Box>
            <Box sx={{margin:".5rem 0 0 1rem"}}>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "500",
                    marginRight: ".2rem",
                    color:green[800]
                  }}
                >
                  <LocalOfferIcon /> Bank Offer
                </Box>
                <Typography>
                10% off on DBS Bank Credit Card Transactions, up to ₹750. On
                  orders of ₹2,000 and aboveT&C
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "500",
                    marginRight: ".2rem",
                    color:green[800]
                  }}
                >
                  <LocalOfferIcon />
                  Bank Offer
                </Box>
                <Typography>5% Cashback on Flipkart Axis Bank CardT&C</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "500",
                    marginRight: ".2rem",
                    color:green[800]
                  }}
                >
                  <LocalOfferIcon />
                  Special Price
                </Box>{" "}
                <Typography>
                  Get extra ₹4300 off (price inclusive of cashback/coupon)T&C
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "500",
                    marginRight: ".2rem",
                    color:green[800]
                  }}
                >
                  <LocalOfferIcon />
                  Partner Offer
                </Box>{" "}
                <Typography>
                  Sign up for Flipkart Pay Later and get Flipkart Gift Card
                  worth up to 750Know More
                </Typography>
              </Box>

              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "500",
                    marginRight: ".2rem",
                    color:green[800]
                  }}
                >
                  <LocalOfferIcon />
                  Partner Offer
                </Box>{" "}
                <Typography>
                  Purchase now & get 1 surprise cashback coupon in FutureKnow
                  More
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* {JSON.stringify(product)} */}
        </Box>
      </ProductWrapper>
    </>
  );
};

export default ProductPageComponent;
