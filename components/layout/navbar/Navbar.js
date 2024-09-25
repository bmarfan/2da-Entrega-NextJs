
import React from 'react'
import styles from '../../../styles/styles.module.scss'
import Link from 'next/link'
import Menu from './Menu'
import CartWidget from '../../cart/CartWidget'
import { AuthButton } from '../../ui/widgets'
import { useAuthContext } from '@/app/context/AuthContext'
import { LoggedButton } from '../../ui/widgets'
import LogButton from './LogButton'


const Navbar = () => {
  return (
    <div className='w-full h-20 flex justify-between items-center px-10 border-b-4 border-b-accent-light z-40 sticky top-0 bg-white'>
        <section className='flex gap-10 items-center'>
            <Link href={'/'} className={styles.titleNavbar}>Cherrybooks</Link>
            <Menu/>
        </section>
        <section className='flex gap-5 items-center'>
           <LogButton/>
            <CartWidget/>
        </section>
    </div>
  )
}

export default Navbar
