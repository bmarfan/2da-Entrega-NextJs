import ConfirmCheckout from '@/components/store/ConfirmCheckout'
import React from 'react'

export const metadata = {
    title: 'Compra Confirmada',
    description: '...',
  }

const page = ({params}) => {
    const id = params.id
  return (
      <ConfirmCheckout id={id}/>
  )
}

export default page