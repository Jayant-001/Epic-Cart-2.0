import { extractToken } from "@/app/utils/extractToken";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

export async function GET(req) {
    try {
        const user_id = await extractToken(req);

        const cart = await prisma.cart.findUnique({
            where: {
                user_id: user_id,
            },
            include: {
                products: {
                    include: {
                        store: true,
                    },
                },
            },
        });

        return NextResponse.json({ cart }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const user_id = await extractToken(req);
        const { productId } = await req.json();

        const cart = await prisma.cart.upsert({
            where: { user_id },
            create: {
                user: {
                    connect: {
                        id: user_id,
                    },
                },
                products: {
                    connect: {
                        id: productId,
                    },
                },
            },
            update: {
                products: {
                    connect: { id: productId },
                },
            },
        });

        return NextResponse.json({ success: true }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function PATCH(req) {
    try {
        const user_id = await extractToken(req);
        const { productId } = await req.json();

        const res = await prisma.cart.update({
            where: { user_id },
            data: {
                products: {
                    disconnect: { id: productId },
                },
            },
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
