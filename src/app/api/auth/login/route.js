import { query } from "@/config/db";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
    try {
        const { email, password } = await req.json();
        const existUser = await query(
            "SELECT * FROM user WHERE user_email = ?",
            [email]
        );
        if (existUser.length < 1) {
            return NextResponse.json(
                { error: "User does not exist" },
                { status: 404 }
            );
        }

        // check password
        const validPassword = await bcryptjs.compare(
            password,
            existUser[0].password
        );

        if (!validPassword) {
            return NextResponse.json(
                { success: false, message: "Wrong password" },
                { status: 400 }
            );
        }

        // create token
        const tokenData = {
            id: existUser[0].id,
            name: existUser[0].name,
            password: existUser[0].password,
        };

        const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        const response = NextResponse.json({
            message: true,
            message: "Login successfully",
        });

        response.cookies.set("token", token, { httpOnly: true });

        return response;
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
