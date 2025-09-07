import {  createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config"
  // eslint-disable-next-line react-refresh/only-export-components
export const DonationContext = createContext();

const auth = getAuth(app);

const DonationProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const googleSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  const signUpUsers = (email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }


  const resetPassword = (email)=>{
    return sendPasswordResetEmail(auth, email);
  }

  const updateUserProfile = (updatedData)=>{
    return updateProfile(auth.currentUser, updatedData);
  }

  const signInUsers = (email, password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () =>{
    setLoading(true);
    return signOut(auth);
  }

  const authInfo = {
    user,
    setUser,
    googleSignIn,
    signInUsers,
    updateUserProfile,
    signUpUsers,
    resetPassword,
    logOut,
    loading
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
      setUser(currentUser);
      setLoading(false);
    })
    return ()=>{
      unsubscribe();
    }
  },[])


    return (
        <DonationContext.Provider value={authInfo}>
          {children}
        </DonationContext.Provider>
    );
};

export default DonationProvider;