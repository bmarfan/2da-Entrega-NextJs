'use client'
import { useAuthContext } from "@/app/context/AuthContext"
import Link from "next/link"

export const NavUser = () => {
    const { user } = useAuthContext()

    if(user.logged){
        return user.email
    } else{
        return(
            <Link href='/login' className='font-bold'>Inicia sesión o registrate</Link>
        )
    }
}