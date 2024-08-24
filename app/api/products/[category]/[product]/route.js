import { NextResponse } from "next/server";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/config/firebase";


export async function GET(request, { params }) {
    const { product } = params

    const docRef = doc(db, 'products', product)
    const docSnapshot = await getDoc(docRef)

    return NextResponse.json(docSnapshot.data())
}


//MOCKDATA
/*import { NextResponse } from "next/server";
import { dataProducts } from "@/app/dataProducts";

const sleep = (timer) => {
    return new Promise((resolve) => {
        setTimeout(resolve, timer)
    })
}

export async function GET(request, { params }) {
    const {product} = params

    const data = dataProducts.find(item => item.id === product)

    await sleep(1000)
    return NextResponse.json(data)
}*/