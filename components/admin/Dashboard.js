'use client'
import React from 'react'
import { useAuthContext } from '@/app/context/AuthContext'
import { Button } from '../ui/buttons'

const Dashboard = () => {
    const {user, logout} = useAuthContext()
  return (
    <div>
      <Button onClick={() => logout()}>Cerrar sesión</Button>
    </div>
  )
}

export default Dashboard
