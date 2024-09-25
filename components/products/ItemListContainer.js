import React from 'react'
import ItemCard from './ItemCard'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '@/config/firebase';

const ItemListContainer = async ({ category }) => {
    const productsRef = collection(db, 'products')
    const q = category === 'todo' ? productsRef : query(productsRef, where('type', '==', category))

    const querySnapshot = await getDocs(q)

    const docs = querySnapshot.docs.map(doc => doc.data())

    const items = docs
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
