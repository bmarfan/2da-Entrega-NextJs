'use client'
import React from 'react'
import { useCartContext } from '@/app/context/CartContext'
import CartItem from './CartItem'
import { usePrice } from '@/utils/hooks'
import { Button } from '../ui/buttons'

const CartPreview = ({position}) => {
    const { cart, totalQuantity, total, clearCart } = useCartContext()

    if (totalQuantity() === 0) {
        return (
            <div className='p-3'>
                <div className='subtitle'>
                    <h2>Carrito</h2>
                </div>
            </div>
        )
    } else {
        return (
            <div className='relative p-5'>
                <section className='py-3 overflow-auto border-y-[5px] border-y-transparent'>
                    {
                        cart.map((item, index) => <CartItem item={item} key={index} />)
                    }
                    
                </section>
                <div className='flex border-t border-accent-light justify-between pt-5 items-center'>
                    <section className='py-2 flex gap-2 text-[14px] justify-end'>
                        <b className='text-accent'>Total:</b>
                        <span>${total()}</span>
                    </section>
                </div>
                
            </div>

        )
    }
}


export default CartPreview
