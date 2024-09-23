'use client'
import React from 'react'
import { useCartContext } from '@/app/context/CartContext'
import CartItem from './CartItem'
import { usePrice } from '@/utils/hooks'
import { Button } from '../ui/buttons'

const Cart = ({position}) => {
    const { cart, totalQuantity, total, clearCart } = useCartContext()

    if (totalQuantity() === 0) {
        return (
            <div className='p-3'>
                <div className='subtitle'>
                    <h2>Carrito</h2>
                </div>
                <div className='py-4'>
                    El carrito está vacio
                </div>
            </div>
        )
    } else {
        return (
            <div className='relative p-5 mt-[20px]'>
                <div className='subtitle'>
                    <h2>Carrito</h2>
                </div>
                <section className='py-3 max-h-[400px] overflow-auto border-y-[5px] border-y-transparent'>
                    {
                        cart.map((item, index) => <CartItem item={item} key={index} />)
                    }
                    <button onClick={() => clearCart()} className='text-right uppercase text-[10px] block w-full'>Vaciar Carrito</button>
                </section>
                <div className='flex border-t border-accent-light justify-between pt-5 items-center'>
                    <section className='py-2 flex gap-2 text-[14px] justify-end'>
                        <b className='text-accent'>Total:</b>
                        <span>${usePrice(total())}</span>
                    </section>
                </div>
                <section className={`mt-3 flex gap-3 justify-end ${position}`}>
                    
                    <Button>Terminar la comprs</Button>
                </section>
            </div>

        )
    }
}


export default Cart
