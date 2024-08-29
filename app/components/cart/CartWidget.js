'use client'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { ShoppingCart, CloseCircle } from 'iconsax-react'
import Cart from './Cart'
import { useCartContext } from '@/app/context/CartContext'

const CartWidget = () => {
    const [open, setOpen] = useState(false)
    const {totalQuantity} = useCartContext()
    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (open && ref.current && !ref.current.contains(event.target)){
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);

        return() => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        }
    }, [open])

  return (
    <div>
    <div
        onClick={() => setOpen((prev) => !prev)}
        className='text-center bg-accent p-[7px] rounded-full flex relative border border-accent-shade'
    >
        <ShoppingCart size="20" color="#FFF" variant="Bold"/>
        <span className='absolute bottom-[-10px] right-[-5px] font-bold bg-[#f7f7f7] p-[10px] text-accent rounded-full text-[11px] w-[18px] h-[18px] flex justify-center items-center border border-slate-200'>
        {totalQuantity()}
        </span>
    </div>
    <div className={`${open ? 'block' : 'hidden'}`}>
        <div className='fixed bg-black/50 w-screen h-screen inset-0'>
            <div className='fixed bg-white w-96 right-0 top-0 h-full border border-slate-100 p-5'>
                <div onClick={() => setOpen(false)} className='absolute right-0 top-0 '>
                    <CloseCircle size="30" color="var(--accent)" variant="Bold"/>
                </div>
                <Cart/>
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
