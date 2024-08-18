import Image from 'next/image'
import React from 'react'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div className='w-full h-20 flex justify-between items-center px-10 border-b-4 border-b-accent-light z-40 sticky top-0 bg-white'>

        <div>
            <Image
                src={'/logo.svg'}
                width={200}
                height={100}
                alt='CherryBooks'
            />
        </div>
        <div>
            <Menu/>
        </div>
      
    </div>
  )
}

export default Navbar
