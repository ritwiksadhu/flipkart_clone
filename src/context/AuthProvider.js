import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'


const AuthData = createContext()
export function useAuthData(){
  return useContext(AuthData)
}

const AuthProvider = ({children}) => {

  const [currentUser,setCurrentUser] = useState()
  const [protectedLoading,setProtectedLoading] = useState()



  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(false);
      }
      setProtectedLoading(false);
    });
    return ()=>unsubscribe()
  },[])

  const signOutFunction = async () => {
    await signOut(auth).then(() => {
      console.log("sign out successfull")
      setCurrentUser(false)
    }).catch((error) => {
      // An error happened.
    });
  }





  const data = {
    protectedLoading,
    currentUser,
    signOutFunction
  }  
  return (
    <AuthData.Provider value={data}>
      {children}
    </AuthData.Provider>
  )
}

export default AuthProvider
