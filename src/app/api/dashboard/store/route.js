import { extractToken } from "@/app/utils/extractToken";
import { query } from "@/config/db";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const userId = await extractToken(req);

        const q = "SELECT * FROM store WHERE user_id = ?";
        const stores = await query(q, [userId]);

        return NextResponse.json({ stores }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ stores: [] }, { status: 200 });
    }
}

export async function POST(req) {
    try {
        const { name, desc } = await req.json();

        const userId = await extractToken(req);
        const q =
            "INSERT INTO store (store_name, store_desc, user_id) VALUE (?, ?, ?)";
        const res = await query(q, [name, desc, userId]);
        return NextResponse.json({ success: true }, { status: 201 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ stores: [] }, { status: 200 });
    }
}
