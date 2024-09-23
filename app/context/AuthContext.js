'use client'
import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "@/config/firebase"
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
 } from "firebase/auth"

 export const AuthContext = createContext()
export const useAuthContext = () => useContext(AuthContext)



export const AuthProvider = ({children}) => {

    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    })
    const [isUser, setIsUser] = useState(false)

    const registerUser = async(values) => {
        const userCredentials = await createUserWithEmailAndPassword(auth, values.email, values.password)
    
        // const user = userCredentials.user
        // setUser({
        //     logged: true,
        //     email: user.email,
        //     user: user.uid
        // })
    }

    const logingUser = async(values) => {
        const userCredential = await  signInWithEmailAndPassword(auth, values.email, values.password)
        const user = userCredential.user

         setUser({
             logged: true,
             email: user.email,
             user: user.uid
         })
        
    }
    

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    logged: true,
                    email: user.email,
                    user: user.uid
                })
              
            } else {
                setUser({
                    logged: false,
                    email: user.email,
                    user: user.uid
                })
            }
          })
    }, [])

    const logout = async() => {
        await signOut(auth)
    }

    return(
        <AuthContext.Provider value={{
            user,
            isUser,
            registerUser,
            logingUser,
            logout
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}
