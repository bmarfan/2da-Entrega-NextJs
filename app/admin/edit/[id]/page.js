import React from 'react'
import EditForm from '@/components/admin/EditForm'
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase";

export async function generateMetadata({ params }) {
    return {
      title: `Editar ${params.id}`
    }
}
  

const page = async ({ params }) => {
    const {id} = params
    const docRef = doc(db, 'products', id)
    const docSnapshot = await getDoc(docRef)
    const item = docSnapshot.data()
    return (
        <EditForm item={item} />
    )


}

export default page
