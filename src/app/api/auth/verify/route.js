import { extractToken } from "@/app/utils/extractToken";
import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";

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
        // const q = "SELECT * FROM user WHERE user_id = ?";
        // const existingUser = await query(q, [userId]);

        const existingUser = await prisma.user.findUnique({
            where: { id: userId },
        });

        if (!existingUser) {
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

        return NextResponse.json({ user: existingUser }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
