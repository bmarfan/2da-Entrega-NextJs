import LoginForm from '@/components/auth/LoginForm'
import { Modal } from '@/components/ui/modals'
import React from 'react'

const page = () => {
  return (
    <Modal>
        <LoginForm position={'modal-btn'}/>
    </Modal>
  )
}

export default page
