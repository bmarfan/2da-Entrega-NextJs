import React from 'react'
import styles from '../../styles.module.scss'
import Image from 'next/image'
import Select from '../utilities/Select'
import Counter from '../utilities/Counter'
import TextBody from '../utilities/TextBody'
import AddtoCart from '../utilities/AddtoCart'

const ItemDetail = ({name, image, price, selectTitle, select, description, slug, stock, id}) => {

    const item = {
        name: name,
        price: price,
        slug: slug
    }
  return (
    <div className={styles.boxContainer}>
      <div className='flex justify-between container gap-20'>
        <div className='w-[50%]'>
            <img
                src={image}
                width={700}
                height={700}
                alt={name}
            />
        </div>
        <div className='w-[50%]'>
            <h1 className='text-[22px] font-extrabold uppercase text-accent'>{name}</h1>
            <span className='text-[15px]'>${price}</span>

            <div className='mt-5 flex items-start'>
                <label className={styles.datos}>{selectTitle}</label>
                <Select title={selectTitle} value={select}/>
            </div>
            <div className='mt-5 text-[10px] flex gap-5'>
                <Counter stock={stock} item={item}/>
            </div>
            <div className='mt-16'>
              <div className='border-b border-accent mb-5'>
                <h2 className='uppercase text-[14px] font-bold text-accent border-b-2 border-accent w-fit px-3'>Detalles</h2>
              </div>
                <TextBody content={description}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
