import React from 'react'
import { Instagram, Facebook, Code } from 'iconsax-react'
import Image from 'next/image'
import Link from 'next/link'

const Rrss = () => {
  return (
    <div className='flex gap-2'>
        <Link href={'/'}>
            <Instagram 
                size="22"
                color="var(--accent)"
            />
        </Link>
        <Link href={'/'}>
            <Facebook 
                size="22"
                color="var(--accent)"
            />
        </Link>
         <Link href={'/'}>
            <Code 
                size="22"
            color="var(--accent)"
            />
         </Link>
    </div>
  )
}

export default Rrss
