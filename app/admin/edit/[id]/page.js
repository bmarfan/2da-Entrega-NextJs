import React from 'react'
import EditForm from '@/components/admin/EditForm'

export async function generateMetadata({ params }) {
    return {
      title: `Edita ${params.id}`
    }
}
  

const page = async ({ params }) => {
    const baseUrl = process.env.VERCEL_URL
    ? `http://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'
    const { id } = params
    const item = await fetch(`http://${baseUrl}/api/edit/${id}`,
        { cache: 'no-store' }
    ).then(r => r.json())
    return (
        <EditForm item={item} />
    )


}

export default page
