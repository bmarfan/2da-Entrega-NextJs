'use client'
import React, { useState, useContext } from 'react'
import { useCartContext } from '@/app/context/CartContext'
import { CartContext } from '@/app/context/CartContext'

const AddtoCart = ({item}) => {

    const { addItem } = useContext(CartContext)
    const [quantity, setQuantity] = useState(0)

    const handleAdd = () => {
        addItem( item, quantity)
    }

  return (
    <div>
       <button 
            type='button' 
            className='bg-accent text-white border border-black/05 p-2 rounded-md uppercase w-full font-bold text-[11px]'
            onClick={handleAdd}
       >
        Agregar al Carrito
        </button>
    </div>
  )
}

export default AddtoCart
