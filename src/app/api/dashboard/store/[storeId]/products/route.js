import { NextResponse } from "next/server";
import prisma from "../../../../../../../prisma";
import { extractToken } from "@/app/utils/extractToken";

export async function GET(req, { params }) {
    try {
        const { storeId } = await params;

        const products = await prisma.product.findMany({
            where: {
                store_id: storeId,
            },
        });

        return NextResponse.json({ products }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const user_id = await extractToken(req);
        const {
            name,
            desc,
            price,
            quantity,
            store_id,
            address,
            image,
            category_id,
        } = await req.json();

        const res = await prisma.product.create({
            data: {
                name,
                desc,
                price,
                quantity,
                store: {
                    connect: { id: store_id },
                },
                address,
                image,
                category: {
                    connect: { id: category_id },
                },
                user: {
                    connect: { id: user_id },
                },
            },
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

