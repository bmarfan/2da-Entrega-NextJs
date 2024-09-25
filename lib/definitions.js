import { z } from 'zod'

export const SignupFormSchema = z.object({
    name: z
        .string()
        .min(3, { message: 'El nombre debe tener como mínimo 3 caracteres.' })
        .trim(),
    email: z.string().email({ message: 'Por favor ingresa una dirección de correo electrónico válida' }).trim(),
    password: z
        .string()
        .min(5, { message: 'Mínimo 5 caracteres en total.' })
        .regex(/[a-zA-Z]/, { message: 'Al menos una letra.' })
        .regex(/[0-9]/, { message: 'Al menos un número.' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Al menos un caracter especial',
        })
        .trim(),
})

export const CheckoutFormSchema = z.object({
    name: z 
        .string()
        .trim(),
    email: z 
        .string().email({ message: 'Por favor ingresa una dirección de correo electrónico válida' }).trim(),
    domicilio: z 
        .string()
        .trim(),
    telefono: z 
        .string()
        .max(9, {message: 'Ingresa un número de teléfono válido'})
        .trim(),
})