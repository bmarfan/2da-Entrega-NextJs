import React from 'react'
import { dataProducts } from '@/app/dataProducts'
import ItemListContainer from '@/app/components/products/ItemListContainer'

const page = ({params}) => {
    const category = params.category
  return (
    <div>
      <ItemListContainer category={category}/>
    </div>
  )
}

export default page
