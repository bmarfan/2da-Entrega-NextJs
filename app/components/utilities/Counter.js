'use client'
import React, { useState } from 'react'
import { AddCircle, MinusCirlce } from 'iconsax-react'
import { useCartContext } from '@/app/context/CartContext'

const Counter = ({stock, item}) => {
    const [quantity, setQuantity] = useState(1)
    const {addItem} = useCartContext()

    const handleIncrement = () => {
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }
    const handleDecrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1)
        }
    }

    const handleOnAdd = () => {
        addItem({
            ...item, quantity
        })
      };


  return (
    <>
    <div className='flex items-center mr-3'>

      <div onClick={handleDecrement} className='cursor-pointer'>
        <MinusCirlce size="25" color="rgba(var(--accent-rgb), .5)" variant="Bold"/>
        
      </div>
      <div className='p-2 bg-background rounded-lg w-20 text-center border border-black/10 mx-3'>{quantity}</div>
      <div onClick={handleIncrement} className='cursor-pointer'>
        <AddCircle size="25" color="rgba(var(--accent-rgb), .5)" variant="Bold"/>
      </div>
      
    </div>
    <button 
            type='button' 
            className='bg-accent text-white border border-black/05 p-2 rounded-md uppercase w-full font-bold text-[11px]'
            onClick={handleOnAdd}
       >
        Agregar al Carrito
    </button>
    </>
  )
}

export default Counter