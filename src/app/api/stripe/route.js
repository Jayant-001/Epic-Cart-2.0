import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_TEST_KEY);

const dynamic = "force-dymanic";

export async function POST(req) {
    try {
        const data = await req.json();

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: data,
            mode: "payment",
            success_url:
                `${process.env.BASE_URL}/account/checkout` + "?status=success",
            cancel_url:
                `${process.env.BASE_URL}/account/checkout` + "?status=cancel",
        });

        return NextResponse.json(
            { success: true, id: session.id },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
