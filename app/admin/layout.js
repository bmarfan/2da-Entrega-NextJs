'use client'
import { useAuthContext } from "../context/AuthContext"

export default function AdminLayout({children}){
    const {user} = useAuthContext()
    return(
        <section className='container'>
            <nav>
                <div>
                    <span>
                        Panel de Administración
                    </span>
                </div>
            </nav>

            {
                        user.logged ? children : <span>No tienes permiso para acceder </span>

            }
        </section>
    )
}