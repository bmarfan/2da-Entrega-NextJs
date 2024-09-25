import React from 'react'
import ProductTable from '@/components/admin/ProductTable'
import Dashboard from '@/components/admin/Dashboard'

export const metadata = {
    title: 'Panel de Administración',
    description: '...',
  }

const page = () => {

    return (
        <div className='container my-10'>
            <ProductTable />
        </div>
    )
}

export default page
