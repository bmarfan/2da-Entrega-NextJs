import { NextResponse } from "next/server";
import { dataMenu } from "@/app/dataMenu";

const sleep = (timer) => {
    return new Promise((resolve) => {
        setTimeout(resolve, timer)
    })
}

export async function GET() {
    await sleep(1000)
    return NextResponse.json(dataMenu)
}