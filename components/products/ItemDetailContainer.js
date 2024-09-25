import React from 'react'
import ItemDetail from './ItemDetail'
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase";

const ItemDetailContainer = async ({ product, category }) => {


    const docRef = doc(db, 'products', product)
    const docSnapshot = await getDoc(docRef)

    const item = docSnapshot.data()
    return (
        <section className='w-full p-10'>
            <ItemDetail {...item} />
        </section>
    )
}

export default ItemDetailContainer
