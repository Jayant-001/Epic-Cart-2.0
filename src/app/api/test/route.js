import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

export async function GET(req) {
    try {
        const res = await prisma.user.findMany({
            where: { user_name: { startsWith: "test" } },
        });

        return NextResponse.json(res, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
