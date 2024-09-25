import React from 'react'
import ItemCard from './ItemCard'

const ItemListContainer = async ({ category }) => {
    const baseUrl = process.env.VERCEL_URL
    ? `http://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'
    const items = await fetch(`http://${baseUrl}/api/products/${category}`,
        { cache: 'no-store' }
    ).then(r => r.json())

    return (
        <section className='relative' id='ItemListContainer'>
            <div className='bg-background2 p-3 rounded-xl'>
                <ul className='flex flex-wrap gap-3 p-5'>
                    {
                        items.map((item, index) => {
                            return <ItemCard key={index} items={item} />
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default ItemListContainer
