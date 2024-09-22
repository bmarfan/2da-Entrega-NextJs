
import { User, ShoppingCart } from "iconsax-react"
import Link from "next/link"
import { NavUser } from "../utilities/user"


export const CartButton = ({children}) => {

    return(
        <section className='flex gap-1 items-center'>
            <ShoppingCart size="30" color="var(--accent-light)" variant="Bold" />
            {children}
        </section>
    )
}

export const AuthButton = async({children}) => {

    return (
        <section className='flex gap-2 items-center'>
            <User size="30" color="var(--accent-light)" variant="Bold" />
            <div className='flex flex-col text-[11px] leading-3'>
                <span>Hola,</span>
                <NavUser/>
            </div>
        </section>
    )
}