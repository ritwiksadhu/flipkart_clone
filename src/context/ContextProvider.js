import React, { useContext,createContext, useState } from 'react'

const ContextData = createContext()

export function useContextData (){
    return useContext(ContextData)
}

const ContextProvider = ({children}) => {

  const [navDrawerOpen,setNavDrawerOpen] = useState(false)


  const handleNavOpenClose = ()=>{
    navDrawerOpen ? setNavDrawerOpen(false):setNavDrawerOpen(true)
    console.log(navDrawerOpen)
  }

  const value = {
    navDrawerOpen,
    handleNavOpenClose
  }

  return (
    <ContextData.Provider value={value} >
      {children}
    </ContextData.Provider>
  )
}

export default ContextProvider
