import React from 'react'
import Image from 'next/image'
import { usePrice } from '../utilities/PriceNumber'
import { useCartContext } from '@/app/context/CartContext'
import { CloseCircle } from 'iconsax-react'

const CartItem = ({item}) => {
    const { removeItem } = useCartContext()
    const handleRemoveItem = () => {
        removeItem(item.id, item)
    }
  return (
    <div className='bg-[#f7f7f7] p-3 mb-3 border border-black/05 relative'>
        <span onClick={handleRemoveItem} className='absolute right-1 top-1 cursor-pointer'>
            <CloseCircle size="20" color="#333" variant="Bold"/>
        </span>
        <div className='flex gap-3'>
            <div className='relative w-[160px]'>
                <Image src={item.image} width={200} height={200}/>
            </div>
            <div className='bg-white p-3 w-full'>
                <div className='font-bold mb-1 border-b border-accent text-left text-[13px] text-accent-shade leading-4 pb-1'>{item.name}</div>
                    <div className='text-[12px] text-stone-700'>
                        <p>
                            <b>Cantidad:</b> <span>{item.quantity}</span>
                        </p>
                        <p>
                            <b>Precio:</b> <span>{usePrice(item.price)}</span>
                        </p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CartItem
