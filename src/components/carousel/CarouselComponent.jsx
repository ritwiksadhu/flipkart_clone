import { Box } from '@mui/material';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const CarouselComponent = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return <Carousel 
  responsive={responsive} 
  >
    <Box>item1</Box>
    <Box>item2</Box>
    <Box>item3</Box>
    <Box>item4</Box>
  </Carousel>
  // return "hello"
 
}

export default CarouselComponent
