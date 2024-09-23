import React from 'react'
import EditForm from '@/components/admin/EditForm'

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
