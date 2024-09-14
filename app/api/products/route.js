import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/config/firebase";


export async function GET(request) {
    const productsRef = collection(db, 'products')

    const querySnapshot = await getDocs(productsRef)

    const docs = querySnapshot.docs.map(doc => doc.data())

    return NextResponse.json(docs)

    
}