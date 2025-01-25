import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email } = reqBody;

        // Validate request body
        if (!email) {
            return NextResponse.json({ error: "Email is required." }, { status: 400 });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 });
        }

        console.log("User exists");

        // Create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        };

        // Create token 
        const Payment_TOKEN = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1d' });

        const response = NextResponse.json({ message: "Send Verify Email successful", success: true });

        await sendEmail({email,emailType:"EARLY_SUCCESS_EMAIL",userId:user._id})
        
        // Set the token in cookies with options
        response.cookies.set("Payment_success", Payment_TOKEN, {
            httpOnly: true, // Prevents JavaScript access to the cookie
            secure: process.env.NODE_ENV === 'production', // Only set secure flag in production
            sameSite: 'strict', // Helps prevent CSRF attacks
            maxAge: 24 * 60 * 60, // Cookie expiry in seconds (1 day)
        });

        return response;

    } catch (error: any) {
        console.error(error); // Log the error for server-side debugging
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}