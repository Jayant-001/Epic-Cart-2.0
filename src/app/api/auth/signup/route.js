import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import prisma from "../../../../../prisma";

export async function POST(req) {
    try {
        const { name, email, password } = await req.json();

        const existUser = await prisma.user.findUnique({
            where: { email },
        });

        // return NextResponse.json({ user: "breakpoint" }, { status: 200 });
        // const existUser = await query(
        //     "select * from user where user_email = ?",
        //     [email]
        // );
        
        if (existUser) {
            return NextResponse.json(
                { message: "Email already exists" },
                { status: 409 }
            );
        }

        // hash password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);

        // const q =
        //     "INSERT INTO user (user_name, user_email, password) VALUES (?, ?, ?)";
        // const res = await query(q, [name, email, hashedPassword]);

        await prisma.user.create({
            data: { name, email, password: hashedPassword },
        });

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
