import LoginForm from '@/app/components/auth/LoginForm'
import { Modal } from '@/app/components/UI/modal'
import React from 'react'

const page = () => {
  return (
    <Modal>
        <LoginForm position={'modal-btn'}/>
    </Modal>
  )
}

export default page
