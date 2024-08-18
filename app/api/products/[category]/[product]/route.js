import { NextResponse } from "next/server";
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
}