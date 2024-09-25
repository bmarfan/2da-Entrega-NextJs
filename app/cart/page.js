
import React from 'react'
import Cart from '@/components/cart/Cart'

export async function generateMetadata({ params }) {
    return {
      title: `Carrito de compras`
    }
}
const page = () => {
   
  return (
    <div className='container bg-white p-10 rounded-lg border border-black/05 relative my-20'>
      <Cart/>
    </div>
  )
}

export default page
