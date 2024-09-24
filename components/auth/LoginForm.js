'use client'
import React, { useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { login } from '@/actions/auth'
import { Button } from '../ui/buttons'
import { EmailInput, PasswordInput } from '../ui/forms'
import { useAuthContext } from '@/app/context/AuthContext'

const LoginForm = ({ position }) => {
    const [state, action] = useFormState(login, undefined)

    // const [values, setValues] = useState({
    //     email: '',
    //     password: ''
    // })

    // const handleChange = (e) => {
    //     setValues({
    //         ...values,
    //         [e.target.name]: e.target.value
    //     })
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     await loginUser(values)
    // }

    return (
        <div>
            <form action={action}>

                <section className='px-5 pt-5 pb-1'>
                    <h2 className='text-accent font-black text-[38px] uppercase mb-3'>Ingresar</h2>
                    <EmailInput
                        label='Email'
                        id='email'
                        placeholder='Correo Electrónico'
                        name='email'
                        
                        required
                    />
                    <PasswordInput
                        label='Contraseña'
                       id='password'
                        placeholder='Correo Electrónico'
                        name='password'
                        
                        required
                    />
                    {state?.success === false &&
                        <div className="error">
                           Error
                        </div>
                    }
                </section>

                <section className={`mt-3 flex gap-3 justify-end ${position}`}>
                    <Button type='submit'>Log In</Button>
                </section>
            </form>

        </div>
    )
}

export default LoginForm
