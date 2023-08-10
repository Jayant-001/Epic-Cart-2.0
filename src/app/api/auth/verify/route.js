import { extractToken } from "@/app/utils/extractToken";
import { query } from "@/config/db";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const userId = await extractToken(req);
        if (userId === null) {
            const response = NextResponse.json(
                { success: false, message: "Session expired" },
                { status: 401 }
            );

            response.cookies.set("token", "", {
                expires: new Date(0),
                httpOnly: true,
            });

            return response;
        }
        const q = "SELECT * FROM user WHERE user_id = ?";
        const existingUser = await query(q, [userId]);
        if (existingUser.length <= 0) {
            const response = NextResponse.json(
                { success: false, message: "Session expired" },
                { status: 401 }
            );

            response.cookies.set("token", "", {
                expires: new Date(0),
                httpOnly: true,
            });

            return response;
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
