'use client'
import React, { useState } from 'react'
import style from '../../styles.module.scss'
import Button from '../UI/Button'
import { EmailInput, PasswordInput } from '../UI/forms'
import { OtherButton } from '../UI/buttons'
import { useAuthContext } from '@/app/context/AuthContext'

const LoginForm = ({ position }) => {

    const {registerUser, loginUser} = useAuthContext()

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <section className='px-5 pt-5 pb-1'>
                    <h2 className='text-accent font-black text-[38px] uppercase mb-3'>Ingresar</h2>
                    <EmailInput
                        label='Email'
                        value={values.email}
                        placeholder='Correo Electrónico'
                        name='email'
                        onChange={handleChange}
                        required
                    />
                    <PasswordInput
                        label='Contraseña'
                        value={values.password}
                        placeholder='Correo Electrónico'
                        name='password'
                        onChange={handleChange}
                        required
                    />
                </section>

                <section className={`mt-3 flex gap-3 justify-end ${position}`}>
                    <OtherButton onClick={() => registerUser(values)} >Registrarse</OtherButton>
                    <Button onClick={() => loginUser(values)} >Log In</Button>
                </section>
            </form>

        </div>
    )
}

export default LoginForm
