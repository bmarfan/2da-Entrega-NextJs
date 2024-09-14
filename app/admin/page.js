import React from 'react'
import ProductTable from '../components/admin/ProductTable'
import style from '../styles.module.scss'

const page = () => {
  return (
    <>
        <div className='bg-accent-light w-full sticky top-20 flex justify-between border-b border-accent p-2 text-[10px]'>
            <h1>Panel de Administración</h1>
            <b>Warning: Todo cambio realizado no se puede deshacer.</b>
        </div>
        <div className='container my-10'>

                
                <ProductTable/>
        </div>
    </>
    
  )
}

export default page
