import { Box, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";
import StarIcon from '@mui/icons-material/Star';

const SearchedItem = () => {
  const data = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/1/1.jpg",
      "https://i.dummyjson.com/data/products/1/2.jpg",
      "https://i.dummyjson.com/data/products/1/3.jpg",
      "https://i.dummyjson.com/data/products/1/4.jpg",
      "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    ],
  };

  function roundedPrice(discountPercentage) {
    let result = Math.round((data.price * data.discountPercentage) / 100);
    return data.price - result;
  }

  const searchItemWrapper = {
    textAlign: "center",
    width: "100%",
    alignSelf: "center",
    borderBottom:"1px solid rgb(200,200,200)"
  }

  const displayImageWrapper = {
    display: "flex",
    justifyContent: "space-between",
  }

  const starRatingStyle = {
      background: green[500],
      color: "white",
      width: "fit-content",
      display: "flex",
      flexDirection: "column",
      padding:".1rem .5rem",
      borderRadius:"3px",
      fontSize:".8rem",
      flexDirection:"row",
      alignItems:"center"
  }

  return (
    // PARENT BOX
    <Box
      style={searchItemWrapper}
    >
     
      {/* CHILD BOX FOR IMAGE */}
      <Box
        style={displayImageWrapper}
      >
        {/* FIRST PART */}
        <Box style={{padding: ".5rem", }}>
          <img style={{
              width: "150px",
              height: "180px",
              objectfit: "cover",
            }}
            src={data.thumbnail}
            alt=""
          />
        </Box>
        {/* SECOND PART */}
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            margin: "1rem",
            width:"60%",
            // border:"1px solid red",

          }}
        >
          {/* STARS */}
          <Box>
            <Typography variant="h2"
            style={{
                fontSize:"1.7rem",
                fontWeight:"400"

            }}

            >{data.title}</Typography>
            <Box
              sx={starRatingStyle}
            >
              {data.rating}
            <StarIcon sx={{fontSize:".8rem",}}/>
              
            </Box>
          </Box>
          {/* DETAILS BOX */}
          <Box
            style={{
              marginLeft: "1rem",
              color:"rgb(80,80,80)"
            }}
          >
            <ul>
              <li>
                <Typography>Lorem ipsum dolor sit amet.</Typography>
              </li>
              <li>
                <Typography>Lorem ipsum dolor sit amet lorem.</Typography>
              </li>
              <li>
                <Typography>Lorem ipsum dolor amet.</Typography>
              </li>
              <li>
                <Typography>Lorem ipsum sit amet.</Typography>
              </li>
            </ul>
          </Box>
        </Box>
        {/* THIRD PART */}
        <Box
          style={{
            display: "grid",
            placeContent: "center",
            marginRight: "5%",
          }}
        >
          <Box
          style={{
            textAlign:"left"
          }}
          >
            <Typography variant="h4"
            style={{
                fontSize:"1.5rem"
            }}
            >${roundedPrice()}</Typography>
            <Box>

            <Typography
              variant="h6"
              style={{
                  textDecoration: "line-through",
                  display:"inline",
                  fontSize:"1.2rem"

                }}
                >
              ${data.price}
            </Typography>
            <Typography
            
            style={{
                display:"inline",
                color:"green",
                fontSize:".8rem",
                fontWeight:"500"
            }}
            >{data.discountPercentage}% OFF
            </Typography>
            <Typography>Free Delivery</Typography>
            <Typography
            style={{
                color:"green",
                fontWeight:"700"
            }}
            >Bank Offer</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchedItem;
