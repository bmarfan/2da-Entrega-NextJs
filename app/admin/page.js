import React from 'react'
import ProductTable from '@/components/admin/ProductTable'
import Dashboard from '@/components/admin/Dashboard'


const page = () => {
      
  return (
    <>
        <div className='container my-10'>
            <Dashboard/>
                <ProductTable/>
        </div>
    </>
    
  )
}

export default page
