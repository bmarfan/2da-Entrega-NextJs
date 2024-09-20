import { NextResponse } from "next/server";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase";


export async function GET(request, { params }) {
    const {id} = params

    const docRef = doc(db, 'products', id)
    const docSnapshot = await getDoc(docRef)

    return NextResponse.json(docSnapshot.data())
}
