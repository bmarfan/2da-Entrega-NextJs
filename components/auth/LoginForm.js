'use client'
import React, {useState} from 'react'
import { Button } from '../ui/buttons'
import { EmailInput, PasswordInput } from '../ui/forms'
import { useAuthContext } from '@/app/context/AuthContext'

const LoginForm = ({ position }) => {
    const { loginUser } = useAuthContext()

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
                    
                    <Button onClick={() => loginUser(values)} >Log In</Button>
                </section>
            </form>

        </div>
    )
}

export default LoginForm
