import { CheckoutFormSchema } from "@/lib/definitions";
import { db } from "@/config/firebase";
import { addDoc, collection, Timestamp, doc, setDoc } from "firebase/firestore";
import { redirect, permanentRedirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function checkout(state, formData) {
    const validatedFields = CheckoutFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        domicilio: formData.get('domicilio'),
        telefono: formData.get('telefono')
    })

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    //02. Preprarar Data
    const { name, email, domicilio, telefono } = validatedFields.data

    //03. Enviar Data

    //agregar al localStorage para usar la info luego
    localStorage.setItem("datos", JSON.stringify(
        { name, email, domicilio, telefono }
    ))
    //redirecciona a confirmar compra
    redirect(`/store/checkout/order`)






    // const docRef = await addDoc(collection(db, "orders"), {
    //     buyer: {
    //         name, email, domicilio, telefono
    //     },
    //     date: Timestamp.fromDate(new Date())
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    //   redirect(`/store/checkout/${docRef.id}`)




}