import React, { useContext,createContext, useState } from 'react'

const ContextData = createContext()

export function useContextData (){
    return useContext(ContextData)
}

const ContextProvider = ({children}) => {

  const [navDrawerOpen,setNavDrawerOpen] = useState(false)
  const [searchKeyword,setSearchKeyword] = useState("")
  const [searchResultData,setSearchResultData] = useState({})


  const handleNavOpenClose = ()=>{
    navDrawerOpen ? setNavDrawerOpen(false):setNavDrawerOpen(true)
    console.log(navDrawerOpen)
  }
  function roundedPrice(price,discount) {
    let result = Math.round((price * discount) / 100);
    return price - result;
  }

  async function getProdData (keyword){
    await fetch(`https://dummyjson.com/products/search?q=${keyword}`)
    .then(res => res.json())
    .then(data => setSearchResultData({...data}));
  }

  const value = {
    navDrawerOpen,
    handleNavOpenClose,
    searchKeyword,
    setSearchKeyword,
    roundedPrice,
    getProdData,
    searchResultData,
    setSearchResultData
  }

 

  return (
    <ContextData.Provider value={value} >
      {children}
    </ContextData.Provider>
  )
}

export default ContextProvider
