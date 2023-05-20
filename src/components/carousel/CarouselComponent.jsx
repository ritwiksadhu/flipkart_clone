import { Box } from '@mui/material';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const CarouselComponent = () => {

let carouselImages = [
  { id: 1, url: 'https://rukminim1.flixcart.com/flap/2160/1080/image/d117a62eb5fbb8e1.jpg?q=50' },
  { id: 2, url: 'https://rukminim1.flixcart.com/flap/2160/1080/image/57267a180af306fe.jpg?q=50' },
  { id: 3, url: 'https://rukminim1.flixcart.com/flap/2160/1080/image/ae9966569097a8b7.jpg?q=50' },
  { id: 4, url: 'https://rukminim1.flixcart.com/flap/2160/1080/image/f6202f13b6f89b03.jpg?q=50' }

]



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
  return <Box sx={{
    padding:1
  }}>

  <Carousel 
  swipeable={false}
  draggable={false}
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={4000}
  keyBoardControl={true}
  
  responsive={responsive}
  style={{
    position:"relative",
    zindex:"-1"
  }}
  >
    {
      carouselImages.map((image,index)=>{
        return <img 
        src={carouselImages[index].url} 
        key={carouselImages[index].id} 
        style={{
          height:"300px",
          width:"100%",
          objectFit:"cover",
          zindex:"-1"
        }}
        alt=""
         />
      })
    }

  
  </Carousel>
    </Box>
 
}

export default CarouselComponent
