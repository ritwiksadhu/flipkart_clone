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
        getting(user).then(() => {
          console.log("got user")
          setProtectedLoading(false);
          setCurrentUser(user);
        });
      } else {
        console.log("not got user")
        setProtectedLoading(false);
        setCurrentUser(false);
      }
    });
  
    return unsubscribe;
  },[])

  
  async function removeItemFromCart(element,setItemIncluded=null) {
    let docRef = doc(db, "user", currentUser.uid);
    let dummy = cart.filter((item) => item.id !== element.id);
    await setDoc(docRef, {
      createdBy: currentUser.uid,
      cart: [...dummy],
    })
      .then(() => {
        setCart([...dummy]);
        if(setItemIncluded !== null){
          setItemIncluded(false);
        }
        console.log("item removed");
      })
      .catch(() => console.log("item not removed"));
  }

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
    setCart,
    protectedLoading,
    removeItemFromCart
  }  
  return (
    <AuthData.Provider value={data}>
      {children}
    </AuthData.Provider>
  )
}

export default AuthProvider
