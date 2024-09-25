import React from 'react'
import ItemDetailContainer from '@/components/products/ItemDetailContainer'


  export async function generateMetadata({ params }) {
    return {
      title: `${params.product}`
    }
}
  
  export default function Page({ params }) {
    const product = params.product
    const category = params.category

    return(
        <>
        <ItemDetailContainer product={product} category={category}/>
        </>
    )
  }
