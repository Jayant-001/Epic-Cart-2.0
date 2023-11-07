import { extractToken } from "@/app/utils/extractToken";
import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";

export async function GET(req) {
    try {
        const user_id = await extractToken(req);
        if (user_id === null) {
            const response = NextResponse.json(
                { success: false, message: "Session not found" },
                { status: 401 }
            );

            response.cookies.set("token", "", {
                expires: new Date(0),
                httpOnly: true,
            });

            return response;
        }
        // const q = "SELECT * FROM user WHERE user_id = ?";
        // const existingUser = await query(q, [user_id]);

        const existingUser = await prisma.user.findUnique({
            where: { id: user_id },
            include: {
                address: true,
            },
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

        const cart = await prisma.cart.findUnique({
            where: { user_id },
            include: {
                products: {
                    include: {
                        cart: true,
                    },
                },
            },
        });
    
        return NextResponse.json({ user: existingUser, cart }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
