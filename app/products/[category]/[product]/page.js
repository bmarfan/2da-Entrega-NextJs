import React from 'react'
import ItemDetailContainer from '@/components/products/ItemDetailContainer'

export async function generateStaticParams() {
    const baseUrl = process.env.VERCEL_URL
    ? `http://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'
    const products = await fetch(`${baseUrl}/api/products`).then((res) => res.json())
   
    return products.map((product) => ({
      category: product.category,
      product: product.slug,
    }))
  }

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
