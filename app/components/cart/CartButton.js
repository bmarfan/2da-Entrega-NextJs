'use client'
import { CartContext } from '@/app/context/CartContext'
import React, { useContext } from 'react'
import { ShoppingBag } from 'iconsax-react'

const CartButton = () => {
    const {cart, totalQuantity} = useContext(CartContext)

  return (
    <div className='bg-accent p-4 rounded-full'>

        <ShoppingCart size="32" color="#fff" variant="Broken"/>
        <span>{totalQuantity}</span>

    </div>
  )
}

export default CartButton
