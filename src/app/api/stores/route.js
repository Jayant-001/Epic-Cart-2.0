import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

export async function GET(req) {
    try {
        const stores = await prisma.store.findMany();

        return NextResponse.json({ stores }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
