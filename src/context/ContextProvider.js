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
    let result = (price * discount) / 100
    return result
  }

  async function getProdData (keyword="",stateToUpdate,limit=10,skip=0){
    await fetch(`https://dummyjson.com/products/search?q=${keyword}&limit=${limit}&skip=${skip}`)
    .then(res => res.json())
    .then(data => stateToUpdate({...data}));
  }

  const value = {
    navDrawerOpen,
    handleNavOpenClose,
    searchKeyword,
    setSearchKeyword,
    roundedPrice,
    getProdData,
    searchResultData,
    setSearchResultData,
  }

 

  return (
    <ContextData.Provider value={value} >
      {children}
    </ContextData.Provider>
  )
}

export default ContextProvider
