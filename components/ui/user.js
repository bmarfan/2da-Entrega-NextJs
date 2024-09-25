'use client'
import { useAuthContext } from "@/app/context/AuthContext";
import { useState } from "react";
import { Button, ButtonGray } from "./buttons";

export const SignOutButton = () => {
    const [show, setShow] = useState(false)
    const { logout, user } = useAuthContext()

    return (
        <div className='flex flex-col text-[11px] leading-3 relative' onClick={() => setShow((prev) => !prev)}>
            <span>Hola,</span>
            {user.email}

            <div className={`${show ? 'block' : 'hidden'} absolute bottom-[-40px] left-[0px] w-[150px]`}>
                <ButtonGray onClick={() => logout()}>
                    Cerrar Sesión
                </ButtonGray>
               
            </div>
        </div>
    )
}