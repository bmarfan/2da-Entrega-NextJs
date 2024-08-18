import Link from 'next/link'
import React from 'react'
import styles from '../../styles.module.scss'

const FooterInfo = () => {
  return (
      <div className='flex gap-5 text-gray-400 text-[11px]'>
        <Link href={'/'}>Sobre Nosotros</Link>
        <Link href={'/'}>Envios</Link>
        <Link href={'/'}>Acuerdos y Condiciones</Link>
      </div>
  )
}

export default FooterInfo
