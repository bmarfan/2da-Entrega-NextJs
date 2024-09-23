import React from 'react'
import Link from 'next/link'

const FooterInfo = () => {
  return (
    <section className='flex gap-5 text-gray-400 text-[11px]'>
        <Link href={'/'}>Sobre Nosotros</Link>
        <Link href={'/'}>Envios</Link>
        <Link href={'/'}>Acuerdos y Condiciones</Link>
    </section>
  )
}

export default FooterInfo
