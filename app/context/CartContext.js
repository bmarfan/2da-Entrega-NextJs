'use client'
import React, { useContext, createContext, useState, useEffect } from 'react'

export const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])


    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem("cart"));
        if (cartData) {
          setCart(cartData);
        }
      }, []);

    //agrega un producto al carrito. 
    const addItem = (item) => {
        if(!isInCart(item.id)){
            setCart([...cart, item])
            localStorage.setItem("cart", JSON.stringify([...cart, item]));
        } else {
            console.error('Este producto ya fue agregado')
        }
    }

    //quita el producto del carrito
    const removeItem = (itemId, item) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
        localStorage.setItem("cart", JSON.stringify(cartUpdated));
    }

    //limpia el carrito
    const clearCart = () => {
        setCart([])
        localStorage.clear()
    }

    //esto nos indica si hay o no un elemento en el carrito. 
    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const total = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0)
    }
    const totalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0)
    };

    return (
        <CartContext.Provider value={{ cart, total, totalQuantity, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );

}
