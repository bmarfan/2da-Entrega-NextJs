import { NextResponse } from "next/server";
import { collection, getDocs, query, where} from "firebase/firestore";
import { db } from "@/firebase/config";


export async function GET(request, { params }) {
    const menuRef = collection(db, 'menu')
    const querySnapshot = await getDocs(menuRef)

    const docs = querySnapshot.docs.map(doc => doc.data())

    return NextResponse.json(docs)

    
}



// import { NextResponse } from "next/server";
// import { dataMenu } from "@/app/dataMenu";

// const sleep = (timer) => {
//     return new Promise((resolve) => {
//         setTimeout(resolve, timer)
//     })
// }

// export async function GET() {
//     await sleep(1000)
//     return NextResponse.json(dataMenu)
// }