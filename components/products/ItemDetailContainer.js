import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = async ({ product, category }) => {
    const baseUrl = process.env.VERCEL_URL
    ? `http://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'
    const item = await fetch(`${baseUrl}/api/products/${category}/${product}`,
        { cache: 'no-store' }
    ).then(r => r.json())

    return (
        <section className='w-full p-10'>
            <ItemDetail {...item} />
        </section>
    )
}

export default ItemDetailContainer
