import React from 'react'
import ProductCategories from './product-categories/ProductCategories'
import CarouselComponent from './carousel/CarouselComponent'
import ProductSlider from './ProductSlider'

const HomePage = () => {
  return (
    <>
    <ProductCategories/>
    <CarouselComponent/>
    <ProductSlider keyword={"watch"}/>
    <ProductSlider keyword={"shoe"}/>
    <ProductSlider keyword={"shirt"}/>
    </>
  )
}

export default HomePage
