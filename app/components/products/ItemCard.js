import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import styles from '../../styles.module.scss'


const ItemCard = ({items}) => {
  return (
    <div className='p-5 w-[250px] bg-white border border-black/10 rounded-lg'>
        <Image
            src={items.image}
            alt={items.name}
            width={250}
            height={250}
            className='rounded-lg'
        />
        <Link className='text-accent font-bold text-[13px] pt-2 block' href={'/products/' + items.type + '/' + items.id}>{items.name}</Link>
        <div className='text-right py-2'>${items.price}</div>

      <button type='buttton' className={`hvr-sweep-to-right ${styles.boton}`}>
        <a href={'/products/' + items.type + '/' + items.id}>Ver Detalle</a>
      </button>
      
    </div>
  )
}

export default ItemCard