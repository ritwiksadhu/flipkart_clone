import React from 'react'
import Navbar from './components/header/Navbar'
import SearchedItems from './components/searchResults/SearchedItems'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import ProductPageComponent from './components/Product-Page/ProductPageComponent'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<HomePage/>} ></Route>
      <Route path='/search/:keywordSearched' element={ <SearchedItems/>}></Route>
      <Route path='/products/:productId' element={ <ProductPageComponent/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
