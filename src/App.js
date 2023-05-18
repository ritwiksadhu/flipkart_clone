import React from 'react'
import Navbar from './components/header/Navbar'
import SearchedItems from './components/searchResults/SearchedItems'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<HomePage/>} ></Route>
      <Route path='/search' element={ <SearchedItems/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
