import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../../firebase.config';
import { useEffect } from 'react';

export const authContext = createContext()
const AuthProvider = ({ children }) => {
    const [user,setUser]=useState('');
    const [loading,setLoading]=useState(true)
    const auth = getAuth(app)
    const register=(email,password)=>{

        return createUserWithEmailAndPassword(auth,email,password)
    };
    const login = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    };
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    const googleLogin=(provider)=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const githubLogin= (provider)=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
    }
    const updateUserProfile = (profile)=>{
        return updateProfile(auth.currentUser,profile)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>unsubscribe();
    },[])
    const authInfo= {user,loading,updateUserProfile, register,login, logOut,googleLogin,githubLogin}
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;