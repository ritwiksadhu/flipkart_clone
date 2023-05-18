import { Box, Typography } from "@mui/material";
import React from "react";

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

  return (
    // PARENT BOX
    <Box
      style={{
        textAlign: "center",
        width: "60%",
        margin: "52px auto auto auto",
        alignSelf: "center",
        borderBottom:"1px solid rgb(200,200,200)"
      }}
    >
      <p>Showing 1 - 24 of 45 results</p>
      {/* CHILD BOX FOR IMAGE */}
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {/* FIRST PART */}
        <Box
          style={{
            padding: ".5rem",
          }}
        >
          <img
            style={{
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
              style={{
                background: "green",
                color: "white",
                width: "fit-content",
                display: "flex",
                flexDirection: "column",
                padding:".1rem .5rem",
                borderRadius:"3px",
                fontSize:".7rem"
              }}
            >
              {data.rating}⭐
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
