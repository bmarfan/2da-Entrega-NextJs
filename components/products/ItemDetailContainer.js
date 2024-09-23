import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = async ({ product, category }) => {
    const item = await fetch(`http://localhost:3000/api/products/${category}/${product}`,
        { cache: 'no-store' }
    ).then(r => r.json())

    return (
        <section className='w-full p-10'>
            <ItemDetail {...item} />
        </section>
    )
}

export default ItemDetailContainer
