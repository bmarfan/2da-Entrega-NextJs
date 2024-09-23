import React from 'react'
import ItemDetailContainer from '@/components/products/ItemDetailContainer'

export async function generateStaticParams() {
    const products = await fetch('http://localhost:3000/api/products').then((res) => res.json())
   
    return products.map((product) => ({
      category: product.category,
      product: product.slug,
    }))
  }

  export async function generateMetadata({ params }) {
    return {
      title: ` Cherrybooks -  ${params.product}`
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
