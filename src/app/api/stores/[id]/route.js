import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";

export async function GET(req, { params }) {
    try {
        const { id } = await params;
        const store = await prisma.store.findUnique({
            where: {
                id,
            },
            include: {
                products: true,
                user: {
                    select: {
                        name: true,
                        email: true,
                        id: true,
                    },
                },
            },
        });

        return NextResponse.json({ store }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
