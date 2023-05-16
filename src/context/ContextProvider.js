import React, { useContext,createContext } from 'react'

const ContextData = createContext()

export function useContextData (){
    return useContext(ContextData)
}

const ContextProvider = ({children}) => {
  return (
    <ContextData.Provider value={"test"} >
      {children}
    </ContextData.Provider>
  )
}

export default ContextProvider
