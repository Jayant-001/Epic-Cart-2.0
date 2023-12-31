import { query } from "@/config/db";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

export async function GET() {
    try {
        const products = await prisma.product.findMany();

        return NextResponse.json({ products }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
