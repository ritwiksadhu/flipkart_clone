import React from 'react'
import Navbar from './components/header/Navbar'
import SearchedItems from './components/searchResults/SearchedItems'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/HomePage'
import ProductPageComponent from './components/Product-Page/ProductPageComponent'
import LogInPage from "./components/AuthComponents/LogInPage"
import SignUpPage from "./components/AuthComponents/SignUpPage"
import FotgotPasswordPage from "./components/AuthComponents/ForgotPasswordPage"
import { app } from './components/firebase/firebase'
const App = () => {

  console.log(app)
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<HomePage/>} ></Route>
      <Route path='/search/:keywordSearched' element={ <SearchedItems/>}></Route>
      <Route path='/products/:productId' element={ <ProductPageComponent/>}></Route>
      <Route path='/login' element={ <LogInPage/>}></Route>
      <Route path='/signup' element={ <SignUpPage/> }></Route>
      <Route path='/forgotPassword' element={ <FotgotPasswordPage/> }></Route>
      <Route path='/products/:productId' element={ <ProductPageComponent/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
