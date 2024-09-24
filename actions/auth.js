import { SignupFormSchema } from "@/lib/definitions"
import { auth } from "@/config/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

export async function signup(state, formData) {
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

export async function login(state, formData) {
    const data = {
        email: formData.get('email'),
        password: formData.get('password')
    }

    signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('user logged')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('error')
        });

}