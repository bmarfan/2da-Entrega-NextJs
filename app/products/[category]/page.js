import React from 'react'
import { dataProducts } from '@/app/dataProducts'
import ItemListContainer from '@/app/components/products/ItemListContainer'

export function generateStaticParams(){
    return[
        {category: 'todo'},
        {category: 'bullet-journal'},
        {category: 'washi-tapes'},
    ]
}

const page = ({params}) => {
    const category = params.category
  return (
    <div>
      <ItemListContainer category={category}/>
    </div>
  )
}

export default page
