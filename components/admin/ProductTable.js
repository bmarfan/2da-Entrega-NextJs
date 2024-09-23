import React, { Suspense } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/buttons'
import styles from '../../styles/styles.module.scss'
import { Edit } from 'iconsax-react'
import DeleteButton from './DeleteButton'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ProductTable = async () => {
    const items = await fetch(`http://localhost:3000/api/products`,
        { cache: 'no-store' }
    ).then(r => r.json())

    return (
        <>
            <div className='flex justify-between items-center'>
                <div className={styles.titleColor}>Lista de Productos</div>
                <Link href='/admin/create'>
                    <Button>Crear nuevo producto</Button>
                </Link>
            </div>
            <div className={styles.contentContainer}>
                <div className='flex flex-col p-5'>

                    <section className='flex gap-4 font-bold uppercase bg-[#333] text-white p-2 rounded-t-md'>
                        <div className='p-2 w-7/12'>Nombre</div>
                        <div className='p-2 w-2/12'>Categoría</div>
                        <div className='p-2 w-2/12'>Precio</div>
                        <div className='p-2 w-1/12'>Acción</div>
                    </section>
                    <Suspense fallback={(<Skeleton count={5} />)}>
                        <section>
                            {
                                items.map((item, index) => (

                                    <article key={index} className='border-b border-black/05 flex gap-4 hover:bg-[#f5f5f5]'>

                                        <div className='p-3 w-7/12 flex gap-3'>
                                            <Image src={item.image} alt={item.name} width={50} height={50} />
                                            {item.name}</div>
                                        <div className='p-3 w-2/12'>{item.type}</div>
                                        <div className='p-3 w-2/12'>{item.price}</div>
                                        <div className='p-3 w-1/12 flex gap-1 items-center'>
                                            <Link
                                                href={`/admin/edit/${item.slug}`}
                                                className=''
                                                title='Editar'>
                                                <Edit size="20" color="var(--accent)" />
                                            </Link>
                                            <DeleteButton slug={item.slug} />
                                        </div>
                                    </article>
                                ))
                            }

                        </section>
                    </Suspense>
                </div>
            </div>
        </>
    )
}

export default ProductTable
