import { Box, Typography } from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";
import { useContextData } from "../../context/ContextProvider";
import { useStyleData } from "../../context/StyleProvider";
import Paper from '@mui/material/Paper';


const SearchedItem = ({ data }) => {
  const { roundedPrice } = useContextData();
  const { ProductDetailsText,
    SearchItemWrapper,
    ProductDetailsBox,
    StarRatingStyle,
    ProductPriceSegment,
    ProductDiscountPrice,
    StrikedProductPrice } = useStyleData();




  return (
    // PARENT BOX
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`/products/${data.id}`}
    >
      <SearchItemWrapper>
        {/* CHILD BOX FOR IMAGE */}
        <Box style={{ padding: ".5rem",
        gridArea:" 1 / 1 / 3 / 2",
      }}>
          <img
            style={{
              width: "150px",
              height: "180px",
              objectfit: "cover",
              marginRight: "24px",
            }}
            src={data.thumbnail}
            alt=""
          />
        </Box>

        <ProductDetailsBox>
          {/* STARS */}
          <Box>
            <Typography
              variant="h2"
              style={{ fontSize: "1rem", fontWeight: "500" }}
            >
              {data.title}
            </Typography>
            <StarRatingStyle>
              {data.rating}
              <StarIcon sx={{ fontSize: ".8rem" }} />
            </StarRatingStyle>
          </Box>
          {/* DETAILS BOX */}
          <ul style={{ margin: "1rem 0 0  1rem " }}>
            <li>
              <ProductDetailsText>
                Lorem ipsum dolor sit amet.
              </ProductDetailsText>
            </li>
            <li>
              <ProductDetailsText>
                Lorem ipsum dolor sit amet lorem.
              </ProductDetailsText>
            </li>
            <li>
              <ProductDetailsText>Lorem ipsum dolor amet.</ProductDetailsText>
            </li>
            <li>
              <ProductDetailsText>Lorem ipsum sit amet.</ProductDetailsText>
            </li>
          </ul>
        </ProductDetailsBox>
              
        {/* THIRD PART */}
        <ProductPriceSegment>
          <Box style={{ textAlign: "left" }}>
            <Typography variant="h4" style={{ fontSize: "1.5rem" }}>
              ${roundedPrice(data.price, data.discountPercentage).toFixed(2)}
            </Typography>
            <Box>
              <StrikedProductPrice variant="h6">
                ${data.price}
              </StrikedProductPrice>
              <ProductDiscountPrice>
                {data.discountPercentage + "% OFF"}
              </ProductDiscountPrice>
              <Typography>Free Delivery</Typography>
              <Typography style={{ color: "green", fontWeight: "700" }}>
                Bank Offer
              </Typography>
            </Box>
          </Box>
        </ProductPriceSegment>
      </SearchItemWrapper>
    </Link>
  );
};

export default SearchedItem;
