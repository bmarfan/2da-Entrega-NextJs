import React from 'react'
import Link from 'next/link'

const Categories = ({items}) => {
    return (
        
        <div className='flex justify-center gap-2'>
            {items.map((submenu, index) => (
                <div key={index} className=''>
                  {submenu.inIndex ? (
                        <Link href={submenu.href} className='relative w-[100%] h-[200px] overflow-hidden block rounded-lg'>
                            <img src={submenu.image} className='w-full relative hover-img'/>
                            <span className='text-white font-extrabold absolute bottom-0 p-5 text-2xl uppercase text-shadow'>{submenu.name}</span>
                        </Link>
                  ) : ('')}
                    
                </div>
            ))}
        </div>
        
      )
}

export default Categories
