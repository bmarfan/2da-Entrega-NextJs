import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Categories = ({items}) => {
    return (
        
        <div className='flex justify-center gap-2'>
            {items.map((submenu, index) => (
                <div key={index} className=''>
                  
                        <Link href={submenu.href} className='relative w-[100%] h-[200px] overflow-hidden block rounded-lg'>
                            <Image src={submenu.image} className='w-full relative hover-img' width={500} height={500} alt={submenu.name}/>
                            <span className='text-white font-extrabold absolute bottom-0 p-5 text-2xl uppercase text-shadow'>{submenu.name}</span>
                        </Link>
                    
                </div>
            ))}
        </div>
        
      )
}

export default Categories
