import React from 'react'
import Navbar from './components/header/Navbar'
import ProductCategories from './components/product-categories/ProductCategories'
import CarouselComponent from './components/carousel/CarouselComponent'
import SearchedItems from './components/searchResults/SearchedItems'

const App = () => {
  return (
    <>
      <Navbar/>
      {/* <ProductCategories/>
      <CarouselComponent/> */}
      <SearchedItems/>

    </>
  )
}

export default App
