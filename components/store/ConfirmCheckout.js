import React from 'react'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '@/config/firebase'
import styles from '../../styles/styles.module.scss'
import { usePrice } from '@/utils/hooks'
import { Information } from 'iconsax-react'

const ConfirmCheckout = async ({ id }) => {
    const docRef = doc(db, 'compras', id)
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const docData = docSnap.data()
        return (
            <main className='w-[50%] mb-10'>
                <h1 className={styles.titleColor}>
                    Orden confirmada
                </h1>
                <section className={`${styles.contentContainer} relative`}>
                    <div className='absolute right-4'>
                        <Information size="109" color="var(--accent-light)"  variant="Bold"/>
                    </div>
                    <ul className=''>
                        <li className='p-1 border-b border-b-black/10'>
                            <b className='text-accent block uppercase text-[12px]'>
                                Nombre
                            </b>
                            <span className='py-2'>
                                {docData.cliente.name}
                            </span>
                        </li>
                        <li className='p-1 border-b border-b-black/10 mt-3'>
                            <b className='text-accent block uppercase text-[12px]'>
                                Email
                            </b>
                            <span className='py-2'>
                                {docData.cliente.email}
                            </span>
                        </li>
                        <li className='p-1 border-b border-b-black/10 mt-3'>
                            <b className='text-accent block uppercase text-[12px]'>
                                Domicilio
                            </b>
                            <span className='py-2'>
                                {docData.cliente.domicilio}
                            </span>
                        </li>
                        <li className='p-1 border-b border-b-black/10 mt-3'>
                            <b className='text-accent block uppercase text-[12px]'>
                                Teléfono
                            </b>
                            <span className='py-2'>
                                {docData.cliente.telefono}
                            </span>
                        </li>
                        <li className='p-1 border-b border-b-black/10 mt-3'>
                            <b className='text-accent block uppercase text-[12px]'>
                                Número de orden
                            </b>
                            <span className='py-2'>
                                {id}
                            </span>
                        </li>
                        <li className='p-1 border-b border-b-black/10 mt-3'>
                            <b className='text-accent block uppercase text-[12px]'>
                                Total de la compra
                            </b>
                            <span className='py-2'>
                                $ {
                                    docData.total
                                } 
                            </span>
                        </li>
                    </ul>

                </section>
            </main>
        )
        console.log("Document data:", docSnap.data());
    } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
    }


}

export default ConfirmCheckout
