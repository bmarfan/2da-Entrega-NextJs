'use client'
import React from 'react'
import { useAuthContext } from '@/app/context/AuthContext'
import { LoggedButton, AuthButton } from '@/components/ui/widgets'

const LogButton = () => {
    const {user} = useAuthContext()
    return user.logged ?  <LoggedButton/> : <AuthButton/>
}

export default LogButton
