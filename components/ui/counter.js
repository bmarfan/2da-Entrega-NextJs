'use client'
import { useState } from 'react'
import { useCartContext } from '@/app/context/CartContext'
import { AddCircle, MinusCirlce } from 'iconsax-react'
import { Button } from './buttons'

export const Counter = ({ stock, item }) => {
    const [quantity, setQuantity] = useState(1)
    const { addItem } = useCartContext()

    const handleIncrement = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }
    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const handleOnAdd = () => {
        addItem({
            ...item, quantity
        })
    }

    return (
        <article>
            <div className='flex items-center mr-3'>
                <div onClick={handleDecrement} className='cursor-pointer'>
                    <MinusCirlce size="25" color="rgba(var(--accent-rgb), .5)" variant="Bold" />
                </div>
                <div className='p-2 bg-background rounded-lg w-20 text-center border border-black/10 mx-3'>{quantity}</div>
                <div onClick={handleIncrement} className='cursor-pointer'>
                    <AddCircle size="25" color="rgba(var(--accent-rgb), .5)" variant="Bold" />
                </div>
            </div>

            <section className='mt-6 relative'>
                <Button onClick={handleOnAdd} className='w-full'>
                    Agregar al Carrito
                </Button>
            </section>
        </article>
    )
}