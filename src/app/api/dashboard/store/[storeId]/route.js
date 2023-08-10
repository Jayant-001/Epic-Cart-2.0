import { NextResponse } from "next/server"

export async function GET(req, {params}) {
    try {

        const {storeId} = await params;
        

        return NextResponse.json({store: "", products: []}, {status: 200})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({error: error.message}, {status: 500})
    }
}