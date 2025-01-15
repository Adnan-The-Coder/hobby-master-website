import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_LIVE_KEY_ID as string,
    key_secret: process.env.RAZORPAY_LIVE_KEY_SECRET
})


export async function POST(req:Request) {
    const {amount} = await req.json();
    const order = await razorpay.orders.create({
        amount,
        currency:"INR",
    });
    

    return NextResponse.json(order);

}