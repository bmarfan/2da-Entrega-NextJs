'use client'
import React from 'react'
import { useCartContext } from '@/app/context/CartContext'
import { updateDoc, doc, query, where, writeBatch, documentId, addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '@/config/firebase'
import { useState, useEffect } from 'react'
import styles from '../../styles/styles.module.scss'
import CartPreview from '../cart/CartPreview'
import { useGetLocalStorage } from '@/utils/hooks'
import { useLocalStorage } from '@/utils/hooks'
import { Button } from '../ui/buttons'
import { useRouter } from 'next/navigation'


const CheckoutConfirm = ({ id }) => {
    const router = useRouter()
    const { cart, total, clearCart } = useCartContext()
    const [loading, setLoading] = useState(false)
    //sacar los datos previamente dados del localStorage
    const [dat, setDat] = useState({
        name: '',
        email: '',
        domicilio: '',
        telefono: ''
    })
    useEffect(() => {
        const clientData = JSON.parse(localStorage.getItem("datos"));
        if (clientData) {
            setDat(clientData);
        }
    }, []);
    console.log(cart)

    const confirmOrder = async () => {
        try {
            const batch = writeBatch(db);
            const outOfStock = []
            const productsIds = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
            const getProducts = await getDocs(query(productsRef, where(documentId(), 'in', productsIds)))
            const {docs} = getProducts

            docs.forEach(doc => {
                const docData = doc.data()
                const producStock = docData.stock
                const cartProducts = cart.find(prod => prod.id === doc.id)
                const prodQuantity = cartProducts?.quantity

                if(producStock >= prodQuantity){
                    batch.update(doc.ref, {stock: producStock - prodQuantity})
                } else{
                    outOfStock.push({id: doc.id, ...docData})
                }
            })

            if(outOfStock.length === 0){
                await batch.commit()
                const docRef = await addDoc(collection(db, "compras"), {
                    items: cart,
                    cliente: dat,
                    total: total()
                  })
                  clearCart()
                  router.push(`/store/checkout/${docRef.id}`)
            } else {
                console.error('Producto fuera de stock')
            }

        } catch (error) {
            console.log(error)
        } 
        
    }



    return (
        <main className='flex gap-5 container justify-center'>
            <section className='w-[40%]'>
                <h2 className={styles.titleChikito}>Tu compra</h2>
                <div className={styles.previewContainer}>
                    <CartPreview />
                </div>
            </section>
            <section className='w-[40%]'>
                <h2 className={styles.titleChikito}>Tus datos</h2>
                <div className={styles.previewContainer}>
                    <ul className='p-3 text-[12px]'>
                        <li className='p-1 border-b border-b-black/10'>
                            <b className='text-accent block uppercase'>Nombre</b>
                            {dat.name}
                        </li>
                        <li className='p-1 border-b border-b-black/10 mt-1'>
                            <b className='text-accent block uppercase'>Email</b>
                            {dat.email}
                        </li>
                        <li className='p-1 border-b border-b-black/10 mt-1'>
                            <b className='text-accent block uppercase'>Domicilio</b>
                            {dat.domicilio}
                        </li>
                        <li className='p-1 mt-1'>
                            <b className='text-accent block uppercase'>Teléfono</b>
                            {dat.telefono}
                        </li>
                    </ul>
                </div>
                
                <div className='p-3'>
                    <Button onClick={() => confirmOrder()}>
                        Confirmar Compra
                    </Button>
                </div>
            </section>
        </main>
    )
}

export default CheckoutConfirm
