import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../../../../../prisma";

export async function POST(req) {
    try {
        const { email, password } = await req.json();
        // const existUser = await query(
        //     "SELECT * FROM user WHERE user_email = ?",
        //     [email]
        // );

        const existUser = await prisma.user.findUnique({
            where: { email },
        });

        if (!existUser) {
            return NextResponse.json(
                { error: "User does not exist" },
                { status: 404 }
            );
        }

        // check password
        const validPassword = await bcryptjs.compare(
            password,
            existUser.password
        );

        // return NextResponse.json({ user: "breakpoint" }, { status: 200 });

        if (!validPassword) {
            return NextResponse.json(
                { success: false, message: "Wrong password" },
                { status: 400 }
            );
        }

        // create token
        const tokenData = {
            id: existUser.id,
            name: existUser.name,
            password: existUser.password,
        };

        const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        const response = NextResponse.json({
            message: true,
            message: "Login successfully",
        });

        response.cookies.set("token", token, {
            maxAge: 24 * 60 * 60,
            httpOnly: true,
        });

        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
