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
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const ProductPageComponent = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const { roundedPrice } = useContextData();
  const { StarRatingStyle } = useStyleData();
  const [activeImage,setActiveImage] = useState()
  const [isThrottled,setIsThrottled] = useState(false)

  const [itemIncluded, setItemIncluded] = useState(false);

  const navigate = useNavigate();

  const { cart, setCart, currentUser } = useAuthData();
  useEffect(() => {
    (async function () {
      await fetch(`https://dummyjson.com/products/${productId}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct({ ...data })
          setActiveImage(data.images[0])
        })
        .catch(()=>setProduct(null))
    })();
    // getProductDetails()
  }, [productId]);

  
  useEffect(() => {
    if (cart && product) {
      cart.forEach((elem) => {
        if (elem.id === product.id) {
          setItemIncluded(true);
        }
      });
    }
  }, [cart,product]);

  const handleImageHover = (image) => {
    if (!isThrottled) {
      setActiveImage(image);
      setIsThrottled(true);

      setTimeout(() => {
        setIsThrottled(false);
      }, 300);
    }
  };


  const ProductWrapper = styled(Box)(({ theme }) => ({
    marginTop: "58px",
    display: "flex",
    height: "100%",
    width: "97%",
    margin: "58px auto 0 auto",
    background: "fff",

    ".left": {
      width: "40%",
      marginLeft: "2rem",
      img: {
        objectFit: "cover",
        width: "100%",
        height: "80%",
      },
    },

    ".right": {
      width:"60%",
      margin: "1rem",
    },
    [theme.breakpoints.down("md")]:{
      flexDirection:"column",
      ".left":{
        width:"100%",
        margin:"0",
      },
      ".right":{
        margin:"0",
        width:"100%"
      },
    },
  }));

  const ProductPageButtons = styled(Button)(({ theme }) => ({
    width:"49%",
    height: "3rem",
    borderRadius: "0",
    color: "white",
    "&.buyNow": {
      marginRight: "1%",
      background: "#ff9f00",
    },
    "&.cartButtons": {
      marginLeft: "1%",
      background: "#fb641b",
    },
  }));


  async function addItemToCart() {
    if (currentUser) {
      let docRef = doc(db, "user", currentUser.uid);
      await setDoc(docRef, {
        createdBy: currentUser.uid,
        cart: [...cart, product],
      })
        .then(() => {
          setCart([...cart, product]);
         
        })
        
    } else {
      navigate("/login");
    }
  }

  async function removeItemFromCart() {
    let docRef = doc(db, "user", currentUser.uid);
    let dummy = cart.filter((item) => item.id !== product.id);
    await setDoc(docRef, {
      createdBy: currentUser.uid,
      cart: [...dummy],
    })
      .then(() => {
        setCart([...dummy]);
        setItemIncluded(false);
      })
     
  }
  if(!product){
    return <Box 
    style={{
        backgroundColor:"#ECF0F3",
        height:"100vh",
        width:"100vw",
        display:"grid",
        placeContent:"center"
    }}
     >
        <Box style={{textAlign:"center"}}
        >
          <img height="500px" src="https://cdn.dribbble.com/users/3512533/screenshots/14168376/media/1357b33cb4057ecb3c6f869fc977561d.jpg?compress=1&resize=1000x750&vertical=top" alt="" />
        </Box>
    </Box>
}



  return (
    <>
      <ProductWrapper>
        <Box className="left">
          <Box  
          style={{
            display:"flex",
            margin:"1rem"
          }}
          >
            <Box style={{
              margin:"1rem"
            }} >
              {
                product?.images.map((image)=>{
                  return <Box key={image}
                  style={{
                    width:"50px",
                    height:"50px",
                    cursor:" pointer",
                    margin:"1rem 0"
                  }}
                  onMouseEnter={()=>handleImageHover(image)}
                  >
                  <img src={image} key={image}
                  style={{
                    pointerEvents:"none"
                  }}
                  />
                  </Box>
                })
              }
            </Box>
            <Box>

          <img src={activeImage} alt="" />
          <Box 
          style={{
          }}
          >
            <ProductPageButtons className="buyNow">Buy Now </ProductPageButtons>
            {itemIncluded ? (
              <ProductPageButtons
                onClick={removeItemFromCart}
                className="cartButtons"
              >
                remove from cart
              </ProductPageButtons>
            ) : (
              <ProductPageButtons
                onClick={addItemToCart}
                className="cartButtons"
              >
                Add to Cart
              </ProductPageButtons>
            )}
          </Box>
            </Box>
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
              ${roundedPrice(product?.price, product?.discountPercentage).toFixed(2)}
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
          <Box sx={{ display: "flex" }}>
            <Box>
              <Typography sx={{ fontWeight: "500" }}>
                Available offers
              </Typography>
            </Box>
            <Box sx={{ margin: ".5rem 0 0 1rem" }}>
              <Box sx={{ display: "flex" }}>
                <Box
                  sx={{
                    display: "flex",
                    fontWeight: "500",
                    marginRight: ".2rem",
                    width: "max-cont4nt",
                    whiteSpace: "nowrap",
                  }}
                >
                  <LocalOfferIcon
                    style={{
                      marginRight: "1rem",
                      color:green[500]
                    }}
                  />{" "}
                  Bank Offer
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
                  }}
                >
                  <LocalOfferIcon
                    style={{
                      marginRight: "1rem",
                      color:green[500]
                    }}
                  />
                  Bank Offer
                </Box>
                <Typography>
                  5% Cashback on Flipkart Axis Bank CardT&C
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontWeight: "500",
                    marginRight: ".2rem",
                  }}
                >
                  <LocalOfferIcon
                    style={{
                      marginRight: "1rem",
                      color:green[500]
                    }}
                  />
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
                  }}
                >
                  <LocalOfferIcon
                    style={{
                      marginRight: "1rem",
                      color:green[500]
                    }}
                  />
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
                  }}
                >
                  <LocalOfferIcon
                    style={{
                      marginRight: "1rem",
                      color:green[500]
                    }}
                  />
                  Partner Offer
                </Box>{" "}
                <Typography>
                  Purchase now & get 1 surprise cashback coupon in FutureKnow
                  More
                </Typography>
              </Box>
            </Box>
          </Box>

        </Box>
      </ProductWrapper>
    </>
  );
};

export default ProductPageComponent;
