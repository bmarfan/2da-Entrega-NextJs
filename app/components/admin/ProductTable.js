import Link from 'next/link'
import React from 'react'
import { Edit } from 'iconsax-react'
import style from '../../styles.module.scss'
import Button from '../UI/Button'
import Image from 'next/image'

const ProductTable = async () => {
    const items = await fetch(`http://localhost:3000/api/products`,
        {cache: 'no-store'}
    ).then(r => r.json())

  return (
   <>
    <div className='flex justify-between items-center'>
        <div className={style.titleColor}>Lista de Productos</div>
        <Link href='/admin/create'>
            <Button>Crear nuevo producto</Button>
        </Link>
    </div>
   <div className={style.contentContainer}>
        <div className='flex flex-col p-5'>

            <section className='flex gap-4 font-bold uppercase bg-[#333] text-white p-2 rounded-t-md'>
                <div className='p-2 w-7/12'>Nombre</div>
                <div className='p-2 w-2/12'>Categoría</div>
                <div className='p-2 w-2/12'>Precio</div>
                <div className='p-2 w-1/12'>Acción</div>
            </section>
            <section>
                {
                    items.map((item, index) => (
                        <article key={index} className='border-b border-black/05 flex gap-4 hover:bg-[#f5f5f5]'>

                            <div className='p-3 w-7/12 flex gap-3'>
                            <Image src={item.image} alt={item.name} width={50} height={50}/>
                             {index}. {item.name}</div>
                            <div className='p-3 w-2/12'>{item.type}</div>
                            <div className='p-3 w-2/12'>{item.price}</div>
                            <div className='p-3 w-1/12'>
                                <Link
                                    href={`/admin/edit/${item.slug}`}
                                    className=''
                                    title='Editar'>
                                        <Edit size="20" color="var(--accent)"/>
                                </Link>
                            </div>
                        </article>
                    ))
                }

            </section>
        </div>
   </div>
   </>
  )
}

export default ProductTable
