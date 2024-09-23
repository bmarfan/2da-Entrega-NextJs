import Cart from '@/components/cart/Cart'
import { ModalRight } from '@/components/ui/modals'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/buttons'

const page = () => {
  return (
    <ModalRight>
        <Cart position={'modal-btn'}/>
    </ModalRight>
    
  )
}

export default page
