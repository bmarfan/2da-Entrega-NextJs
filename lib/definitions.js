import { z } from 'zod'

export const SignupFormSchema = z.object({
    name: z
      .string()
      .min(3, { message: 'El nombre debe tener como mínimo 3 caracteres.' })
      .trim(),
    email: z.string().email({ message: 'Por favor ingresa una dirección de correo electrónico válida' }).trim(),
    password: z
      .string()
      .min(5, { message: 'Debe tener como mínomo 5 caracteres' })
      .regex(/[a-zA-Z]/, { message: 'Debe contener al menos una letra.' })
      .regex(/[0-9]/, { message: 'Debe contener al menos un número' })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Debe contener al meno un caracter especial',
      })
      .trim(),
  })