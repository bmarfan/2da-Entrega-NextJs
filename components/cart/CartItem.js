import React from 'react'
import Image from 'next/image'
import { usePrice } from '@/utils/hooks'
import { useCartContext } from '@/app/context/CartContext'
import { CloseCircle, Trash } from 'iconsax-react'

const CartItem = ({ item }) => {
    const { removeItem } = useCartContext()
    const handleRemoveItem = () => {
        removeItem(item.id, item)
    }

    return (
        <div className='p-3 mb-3 relative'>
            <div className='flex gap-3'>
                <div className='relative w-[160px]'>
                    <Image src={item.image} width={200} height={200} alt={item.name} />
                </div>

                <div className='w-full'>
                    <div className='font-bold mb-1 text-left text-[12px] text-[#333] leading-4 pb-1'>{item.name}</div>
                    <div className='text-[11px] text-stone-700'>
                        <p>
                            <b>Cantidad:</b> <span>{item.quantity}</span>
                        </p>
                        <p>
                            <b>Precio:</b> <span>{usePrice(item.price)}</span>
                        </p>
                    </div>
                    <section className='mt-3'>
                        <span onClick={handleRemoveItem} className='cursor-pointer'>
                            <Trash size="20" color="var(--accent)" variant="Bold" />
                        </span>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default CartItem
