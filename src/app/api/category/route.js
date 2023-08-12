import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

export async function GET(req) {
    try {
        const categories = await prisma.category.findMany();

        return NextResponse.json({ categories }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const { name } = await req.json();
        const category = await prisma.category.create({
            data: {
                name,
            },
        });

        return NextResponse.json({ success: true }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
