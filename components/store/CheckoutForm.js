'use client'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { EmailInput, NumberInput, TextInput } from '../ui/forms'
import styles from '../../styles/styles.module.scss'
import { Button } from '../ui/buttons'
import { checkout } from '@/actions/store'
import { useRouter } from 'next/navigation'

const CheckoutForm = () => {
    const [state, action] = useFormState(checkout, undefined)
    const router = useRouter()

    return (
        <section className='container'>
            <h1 className={styles.titleColor}>Terminar la compra</h1>
            <form action={action} className={styles.contentContainer}>
                <TextInput
                    label='Nombre y Apellido'
                    name='name'
                    placeholder='Juan Pérez'
                    id='name'
                />
                {state?.errors?.name && <p>{state.errors.name}</p>}
                <EmailInput
                    label='Email'
                    name='email'
                    placeholder='name@example.com'
                    id='email'
                />
                {state?.errors?.name && <p>{state.errors.email}</p>}
                <TextInput
                    label='Domicilio'
                    name='domicilio'
                    placeholder='Calle, Número, Comuna'
                    id='domicilio'
                />
                {state?.errors?.name && <p>{state.errors.domicilio}</p>}
                <TextInput
                    label='Número de teléfono'
                    name='telefono'
                    placeholder='912345678'
                    id='telefono'
                />
                {state?.errors?.name && <p>{state.errors.telefono}</p>}

                <div className='flex justify-end'>
                    <SubmitButton />
                </div>
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

export default CheckoutForm
