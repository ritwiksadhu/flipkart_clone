import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import {db} from "../firebase/firebase"
import { doc, getDoc, setDoc } from 'firebase/firestore'


const AuthData = createContext()
export function useAuthData(){
  return useContext(AuthData)
}

const AuthProvider = ({children}) => {
  
  const [currentUser,setCurrentUser] = useState()
  const [protectedLoading,setProtectedLoading] = useState()
  const [errorState,setErrorState] = useState(false)
  // can delete this, 
  const [cart,setCart] = useState()
  
  let docRef
  let docSnap
  async function getting(user){
    docRef = doc(db, "user",user.uid);
    docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setCart(docSnap.data().cart)
    } else {
      console.log("No such document!");
      await setDoc(docRef, {
        createdBy:user.uid,
        cart:[]
      })
      docSnap = await getDoc(docRef);
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
        // TESTING GROUND
        getting(user)

        // TESTING GROUND
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

  const data = {
    protectedLoading,
    currentUser,
    signOutFunction,
    errorState,
    setErrorState,
    cart,
    setCart
  }  
  return (
    <AuthData.Provider value={data}>
      {children}
    </AuthData.Provider>
  )
}

export default AuthProvider
