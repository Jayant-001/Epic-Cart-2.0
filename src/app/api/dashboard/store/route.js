import { extractToken } from "@/app/utils/extractToken";
import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";

export async function GET(req) {
    try {
        const user_id = await extractToken(req);

        // const q = "SELECT * FROM store WHERE user_id = ?";
        // const stores = await query(q, [userId]);

        const stores = await prisma.store.findMany({
            where: { user_id },
        });

        return NextResponse.json({ stores }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 200 });
    }
}

export async function POST(req) {
    try {
        const { name, desc } = await req.json();

        const user_id = await extractToken(req);
        // const q =
        //     "INSERT INTO store (store_name, store_desc, user_id) VALUE (?, ?, ?)";
        // const res = await query(q, [name, desc, userId]);

        const res = await prisma.store.create({
            data: { name, desc, user_id },
        });

        return NextResponse.json({ success: true }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 200 });
    }
}
