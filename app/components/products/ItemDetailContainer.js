import React from 'react'
import ItemDetail from './ItemDetail'
import { dataProducts } from '@/app/dataProducts'
import AddtoCart from '../utilities/AddtoCart'

const ItemDetailContainer = async ({product, category}) => {
    const item = await fetch(`http://localhost:3000/api/products/${category}/${product}`,
        {cache: 'no-store'}
    ).then(r => r.json())

  return (
    <div className='w-full p-10'>
      <ItemDetail {...item}/>
      <AddtoCart {...item}/>
    </div>
  )
}

export default ItemDetailContainer
