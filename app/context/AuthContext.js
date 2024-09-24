'use client'
import { createContext, useContext, useEffect, useState } from "react"
import { auth } from "@/config/firebase"
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/auth"
import { useRouter } from "next/navigation"

export const AuthContext = createContext()
export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const router = useRouter()

    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null
    })

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    logged: true,
                    email: user.email,
                    ...user
                })
                console.log(user)

            } else {
                console.log('no user')
                setUser({
                    logged: false,
                    email: null,
                })
            }
        })
    }, [])

    const logout = () => {
        signOut(auth).then(() => {
            setUser({
                logged: false,
            })
            router.push('/')
            
          }).catch((error) => {
            console.error('No se ha podido desconectar')
          });
    }

    return (
        <AuthContext.Provider value={{
            user,
            logout
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}
