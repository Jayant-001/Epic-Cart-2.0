import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";

export async function GET(req, { params }) {
    try {
        const { id } = await params;
        const product = await prisma.product.findUnique({
            where: { id },
            include: {
                store: true,
                category: true
            },
        });

        return NextResponse.json({ product }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
