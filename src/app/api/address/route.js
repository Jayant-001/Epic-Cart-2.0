import { extractToken } from "@/app/utils/extractToken";
import { NextResponse } from "next/server";
import prisma from "../../../../prisma";

export async function GET(req) {
    try {
        const user_id = await extractToken(req);
        const addresses = await prisma.address.findMany({
            where: {
                user_id,
            },
        });
    
        return NextResponse.json({ addresses }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const user_id = await extractToken(req);
        const { address, city, state, pincode } = await req.json();

        const data = await prisma.address.create({
            data: {
                address,
                city,
                pincode,
                state,
                user_id,
            },
        });

        console.log(data);

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
