import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import styles from '../../styles.module.scss'


const ItemCard = ({items}) => {
  return (
    <div className='p-5 w-[340px] bg-white border border-black/10 rounded-lg relative grid'>
        <img
            src={items.image}
            alt={items.name}
            width={340}
            height={340}
            className='rounded-lg'
        />
        <Link className='text-accent font-bold text-[13px] pt-2 block h-7' href={'/products/' + items.type + '/' + items.id}>{items.name}</Link>
        <div className='text-right py-2'>${items.price}</div>

      <button type='buttton' className={`hvr-sweep-to-right ${styles.boton}`}>
        <Link href={'/products/' + items.type + '/' + items.slug}>Ver Detalle</Link>
      </button>
      
    </div>
  )
}

export default ItemCard