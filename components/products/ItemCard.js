import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ButtonGray } from '../ui/buttons'

const ItemCard = ({ items }) => {
    return (
        <div className='p-5 w-[340px] bg-white border border-black/10 rounded-lg relative grid'>
            <Image
                src={items.image}
                alt={items.name}
                width={340}
                height={340}
                className='rounded-lg'
            />
            <Link className='text-accent font-bold text-[13px] pt-2 block h-7' href={'/products/' + items.type + '/' + items.id}>{items.name}</Link>
            <div className='text-right py-2'>${items.price}</div>

            <ButtonGray>
                <Link href={'/products/' + items.type + '/' + items.slug}>Ver Detalle</Link>
            </ButtonGray>
        </div>
    )
}

export default ItemCard
