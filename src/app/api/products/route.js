import { query } from "@/config/db";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
