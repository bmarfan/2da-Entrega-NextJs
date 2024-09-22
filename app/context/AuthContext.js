'use client'
import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "@/config/firebase"
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
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
        console.log(userCredentials)
    
        // const user = userCredentials.user
        // setUser({
        //     logged: true,
        //     email: user.email,
        //     user: user.uid
        // })
    }

    const logingUser = async(values) => {
        const userCredentials = signInWithEmailAndPassword(auth, values.email, values.password)
        const user = userCredentials.user

        // setUser({
        //     logged: true,
        //     email: user.email,
        //     user: user.uid
        // })
        
    }
    

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    logged: true,
                    email: user.email,
                    uid: user.uid
                })
                setIsUser(true)
              // ...
            } else {
               ''
            }
          })
    }, [])

    return(
        <AuthContext.Provider value={{
            user,
            isUser,
            registerUser,
            logingUser
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}
