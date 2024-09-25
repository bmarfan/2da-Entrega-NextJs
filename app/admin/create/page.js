import CreateForm from '@/components/admin/CreateForm'
import React from 'react'

export const metadata = {
    title: 'Crear Producto',
    description: '...',
  }

const page = async () => {
    return (
        <CreateForm />
    )
}

export default page
