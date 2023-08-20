import { NextResponse } from "next/server";
import prisma from "../../../../prisma";
import { extractToken } from "@/app/utils/extractToken";

export async function GET(req) {
    try {
        const user_id = await extractToken(req);
        // const res = await prisma.user.findMany({
        //     where: { user_name: { startsWith: "test" } },
        // });

        const user = await prisma.user.findUnique({
            where: {
                id: user_id,
            },
            include: {
                address: true,
            },
        });

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

        // return NextResponse.json(res, { status: 200 });

        return NextResponse.json({ user, cart }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
