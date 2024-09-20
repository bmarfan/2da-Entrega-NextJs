import Image from 'next/image'
import React from 'react'
import Menu from './Menu'
import CartWidget from '../cart/CartWidget'
import style from '../../styles.module.scss'

const Navbar = () => {
  return (
    <div className='w-full h-20 flex justify-between items-center px-10 border-b-4 border-b-accent-light z-40 sticky top-0 bg-white'>

        <div className={style.titleNavbar}>
            Cherrybooks
        </div>
        <div className='flex gap-3 items-center'>
            <Menu/>
            <CartWidget/>
        </div>
      
    </div>
  )
}

export default Navbar
