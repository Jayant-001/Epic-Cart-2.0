import { NextResponse } from "next/server";
import prisma from "../../../../../../prisma";

export async function GET(req, { params }) {
    try {
        const { storeId } = await params;
        const store = await prisma.store.findUnique({
            where: {
                id: storeId,
            },
            include: {
                products: true,
            },
        });

        return NextResponse.json({ store }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PATCH(req, { params }) {
    try {
        const { storeId } = await params;
        const { name, desc } = await req.json();

        const res = await prisma.store.update({
            where: { id: storeId },
            data: { name, desc },
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
