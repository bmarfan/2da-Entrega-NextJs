'use client'
import Navbar from "@/components/layout/navbar/Navbar"
import FooterContainer from "@/components/layout/footer/FooterContainer"
import { useAuthContext } from "../context/AuthContext"
import { useRouter } from "next/navigation"

export default function AdminLayout({ children }) {
    const { user } = useAuthContext()
    const router = useRouter()
    return (
        <>
            {user.logged ? router.push('/') : (
               
                        <main className="w-full justify-self-center flex justify-center flex-col items-center">
                            {children}
                        </main>
                        
            )}

        </>
    )
}