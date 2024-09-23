import React from 'react'
import styles from '../../styles/styles.module.scss'
import Image from 'next/image'
import { Counter } from '../ui/counter'
import { TextBody } from '@/utils/texts'


const ItemDetail = ({ name, image, price, description, slug, stock }) => {

    const item = {
        name: name,
        price: price,
        id: slug,
        image: image
    }

    return (
        <article className={styles.contentContainer}>
            <div className='flex justify-between container gap-20'>
                <section className='w-[50%]'>
                    <Image
                        src={image}
                        alt={name}
                        width={700}
                        height={700}
                    />
                </section>
                <section className='w-[50%]'>
                    <h1 className='text-[22px] font-extrabold uppercase text-accent'>{name}</h1>
                    <span className='text-[15px]'>${price}</span>
                    <div className='mt-5 text-[10px] flex gap-5'>
                        <Counter stock={stock} item={item} />
                    </div>
                    <div className='mt-16'>
                        <div className='border-b border-accent mb-5'>
                            <h2 className='uppercase text-[14px] font-bold text-accent border-b-2 border-accent w-fit px-3'>Detalles</h2>
                        </div>
                        <TextBody content={description} />
                    </div>
                </section>
            </div>
        </article>
    )
}

export default ItemDetail
