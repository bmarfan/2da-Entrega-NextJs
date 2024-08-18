import { NextResponse } from "next/server";
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