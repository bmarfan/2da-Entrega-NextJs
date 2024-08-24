import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/config/firebase";


export async function GET(request, { params }) {
    const { category }= params
    const productsRef = collection(db, 'products')
    const q = category === 'todo' ? productsRef : query(productsRef, where('type', '==', category))

    const querySnapshot = await getDocs(q)

    const docs = querySnapshot.docs.map(doc => doc.data())

    return NextResponse.json(docs)

    
}

/*import { NextResponse } from "next/server";
import { dataProducts } from "@/app/dataProducts";

const sleep = (timer) => {
    return new Promise((resolve) => {
        setTimeout(resolve, timer)
    })
}

export async function GET(request, { params }) {
    const {category}= params
    const data = category === 'todo' ? dataProducts : dataProducts.filter(item => item.type === category)

    await sleep(1000)
    return NextResponse.json(data)
}
*/