import { query } from "@/config/db";
import { NextResponse } from "next/server";

export async function GET(req) {
    const q = "SELECT * FROM user";
    const users = await query(q);
    return NextResponse.json({ users });
}

export async function POST(req) {
    try {
        const {
            name,
            desc,
            storeId,
            userId,
            quantity,
            price,
            image,
            categoryId,
        } = await req.json();

        const productData = {
            name,
            desc,
            storeId,
            userId,
            quantity,
            price,
            image,
            categoryId,
        };

        const data = req.body
        console.log(productData);

        return NextResponse.json(
            { message: "product created" },
            { status: 201 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
