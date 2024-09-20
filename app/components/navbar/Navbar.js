import Image from 'next/image'
import React from 'react'
import Menu from './Menu'
import CartWidget from '../cart/CartWidget'
import style from '../../styles.module.scss'
import Link from 'next/link'
import { User } from 'iconsax-react'
import { CartButton, AuthButton } from '../UI/widgets'

const Navbar = () => {
    return (
        <div className='w-full h-20 flex justify-between items-center px-10 border-b-4 border-b-accent-light z-40 sticky top-0 bg-white'>

            <div className='flex gap-10 items-center'>
                <div className={style.titleNavbar}>
                    <Link href={'/'}> Cherrybooks</Link>
                </div>

                <Menu />

            </div>
            <div className='flex gap-5 items-center'>


                <AuthButton />
                <CartWidget />

            </div>

        </div>
    )
}

export default Navbar
