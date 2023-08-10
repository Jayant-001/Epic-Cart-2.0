import { query } from "@/config/db";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const q = "SELECT * FROM store WHERE user_id = 5";

        const res = await query(q);

        return NextResponse.json(res, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
