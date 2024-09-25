import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = async ({ product, category }) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL
    const item = await fetch(`${apiUrl}/api/products/${category}/${product}`,
        { cache: 'no-store' }
    ).then(r => r.json())

    return (
        <section className='w-full p-10'>
            <ItemDetail {...item} />
        </section>
    )
}

export default ItemDetailContainer
