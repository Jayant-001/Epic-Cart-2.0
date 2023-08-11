import { query } from "@/config/db";
import prisma from "@/config/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const res = await prisma.user.findMany();
        return NextResponse.json(res, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
