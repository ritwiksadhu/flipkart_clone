import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'


const AuthData = createContext()
export function useAuthData(){
  return useContext(AuthData)
}

const AuthProvider = ({children}) => {

  const [currentUser,setCurrentUser] = useState()
  const [protectedLoading,setProtectedLoading] = useState()
  const [errorState,setErrorState] = useState(false)



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
      setErrorState(false)
    }).catch((error) => {
        setErrorState(true)
      });
    }
    
    async function signInFunction(email,password){

  }





  const data = {
    protectedLoading,
    currentUser,
    signOutFunction,
    errorState,
    setErrorState
  }  
  return (
    <AuthData.Provider value={data}>
      {children}
    </AuthData.Provider>
  )
}

export default AuthProvider
