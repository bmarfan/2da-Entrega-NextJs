'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingCart, CloseCircle } from 'iconsax-react'
import Cart from './Cart'
import { useCartContext } from '@/app/context/CartContext'
import { CartButton } from '../UI/widgets'

const CartWidget = () => {
    const [open, setOpen] = useState(false)
    const { totalQuantity } = useCartContext()
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (open && ref.current && !ref.current.contains(event.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        }
    }, [open])

    return (
        <div>
            <div
                onClick={() => setOpen((prev) => !prev)}
                className='relative'
            >
                <CartButton>
                    <div className='text-[10px] absolute top-[-10px] right-[-10px] bg-[#333] text-white p-[8px] rounded-full w-[9px] h-[9px] flex justify-center items-center'>
                        <span>
                        {totalQuantity()}
                        </span>
                    </div>
                </CartButton>


            </div>
            <div className={`${open ? 'block' : 'hidden'}`}>
                <div className='fixed bg-black/50 w-screen h-screen inset-0'>
                    <div className='fixed bg-white w-96 right-0 top-0 h-full border border-slate-100 p-5'>
                        <div onClick={() => setOpen(false)} className='absolute right-0 top-0 '>
                            <CloseCircle size="30" color="var(--accent)" variant="Bold" />
                        </div>
                        <Cart />
                        <section className='w-[100%]'>
                            <a href={'/cart'} className='boton hvr-sweep-to-right'>Comprar</a>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartWidget
