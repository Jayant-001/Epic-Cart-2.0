import { query } from "@/config/db";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();

        const existUser = await query(
            "select * from user where user_email = ?",
            [email]
        );
        if (existUser.length > 0) {
            return NextResponse.json(
                { message: "Email already exists" },
                { status: 409 }
            );
        }

        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        console.log(hashedPassword)

        const q =
            "INSERT INTO user (user_name, user_email, password) VALUES (?, ?, ?)";
        const res = await query(q, [name, email, hashedPassword]);

        return NextResponse.json({ user: res }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
