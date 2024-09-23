'use client'
import { useCartContext } from "@/app/context/CartContext"
import { CartButton } from "../ui/widgets"
import React from 'react'

const CartWidget = () => {
    const { totalQuantity } = useCartContext()
    return (
        <CartButton>
            <div className='text-[10px] absolute top-[-10px] right-[-10px] bg-[#333] text-white p-[8px] rounded-full w-[9px] h-[9px] flex justify-center items-center'>
                <span>
                    {totalQuantity()}
                </span>
            </div>
        </CartButton>
    )
}

export default CartWidget
