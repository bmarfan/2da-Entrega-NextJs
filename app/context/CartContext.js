'use client'
import React, { useContext, createContext, useState } from 'react'

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalQuantity: 0
})

export const useCartContext = () => {useContext(CartContext)}

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    //agrega un producto al carrito. 
    const addItem = ({item, quantity}) => {
        //si no está en el carrito
        if(!isInCart(item.id)){
            setCart(prev => [...prev, { ...item, quantity }])
        } else{
            console.error('Producto fuera de stock')
        }
    }

    //quita el producto del carrito
    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    //esto nos indica si hay o no un elemento en el carrito. 
    const isInCart = ({itemId}) => {
        return cart.some(product => product.id === itemId)
    }

    const total = cart.reduce((total, item) => total + item.precio * item.quantity, 0)
    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, total, totalQuantity, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );

}
