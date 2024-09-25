import React from 'react'
import EditForm from '@/components/admin/EditForm'

export async function generateMetadata({ params}, parent) {
    // read route params
    const id = params.id
   
    // fetch data
    const product = await fetch(`http://localhost:3000/api/edit/${id}`).then((res) => res.json())
   
    return {
      title: `Editar ${product.name}`,
    }
  }

const page = async ({ params }) => {
    const { id } = params
    const item = await fetch(`http://localhost:3000/api/edit/${id}`,
        { cache: 'no-store' }
    ).then(r => r.json())
    return (
        <EditForm item={item} />
    )


}

export default page
