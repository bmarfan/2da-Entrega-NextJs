'use client'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { signup } from '@/actions/auth'
import { TextInput, EmailInput, PasswordInput } from '../ui/forms'
import styles from '../../styles/styles.module.scss'
import { Button } from '../ui/buttons'


export function SignupForm() {
    const [state, action] = useFormState(signup, undefined)

    return (
        <section className='container'>
            <h1 className={styles.titleColor}>Registrarse</h1>
            <form action={action} className={styles.contentContainer}>
                <TextInput
                    label='Nombre'
                    name='name'
                    placeholder='Nombre y Apellido'
                    id='name'
                />
                {state?.errors?.name && <p>{state.errors.name}</p>}

                <EmailInput
                    label='Email'
                    name='email'
                    placeholder='Email'
                    id='email'
                />
                {state?.errors?.email && <p>{state.errors.email}</p>}

                <PasswordInput
                    label='Contraseña'
                    name='password'
                    placeholder='Contraseña'
                    id='password'
                />
                {state?.errors?.password && (
                    <div>
                        <p>La contraseña debe tener</p>
                        <ul>
                            {state.errors.password.map((error) => (
                                <li key={error}>- {error}</li>
                            ))}
                        </ul>
                    </div>
                )}
                <section>
                    <div className='flex justify-end'>
                        <SubmitButton/>
                    </div>
                </section>
            </form>
        </section>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus()

    return (
        <Button type='submit' disabled={pending}>
            {pending ? "Enviando..." : "Enviar"}
        </Button>

    )
}