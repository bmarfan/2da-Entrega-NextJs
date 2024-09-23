"use server"
import { SignupFormSchema } from "@/lib/definitions"
import { auth } from "@/config/firebase"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"

export async function signup(formData, state) {
    // 01. Validar datos del formulario
    const validatedFields = SignupFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    //02. Preparar la data
    const { name, email, password } = validatedFields.data

    //03. Crear la cuenta en Firebase
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            user.updateProfile({
                displayName: name
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    
          
}