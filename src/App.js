import React from 'react'
import Navbar from './components/header/Navbar'
import ProductCategories from './components/product-categories/ProductCategories'
import CarouselComponent from './components/carousel/CarouselComponent'

const App = () => {
  return (
    <>
      <Navbar/>
      <ProductCategories/>
      <CarouselComponent/>
    </>
  )
}

export default App
