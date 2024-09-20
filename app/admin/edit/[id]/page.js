import EditForm from '@/app/components/admin/EditForm'
import React from 'react'

const page = async ({params}) => {
    const { id } = params
    const item = await fetch(`http://localhost:3000/api/edit/${id}`,
        {cache: 'no-store'}
    ).then(r => r.json())
    return (
            <EditForm item={item}/>
    )
    

}

export default page
