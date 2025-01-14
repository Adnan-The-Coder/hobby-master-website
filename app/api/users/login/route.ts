import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs"; // Using 'bcrypt' instead of 'bcryptjs' for clarity
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        // Validate request body
        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 });
        }

        console.log("User exists");

        // Validate password
        const validPassword = await bcrypt.compare(password, user.password); // Use 'bcrypt' for consistency

        if (!validPassword) {
            return NextResponse.json({ error: "Invalid password" }, { status: 400 });
        }

        // Create token data
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        };

        // Create token 
        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: '1d' });

        const response = NextResponse.json({ message: "Login successful", success: true });

        // Set the token in cookies with options
        response.cookies.set("token", token, {
            httpOnly: true, // Prevents JavaScript access to the cookie
            secure: process.env.NODE_ENV === 'production', // Only set secure flag in production
            sameSite: 'strict', // Helps prevent CSRF attacks
            maxAge: 24 * 60 * 60, // Cookie expiry in seconds (1 day)
        });

        response.cookies.set("auth","true");

        return response;

    } catch (error: any) {
        console.error(error); // Log the error for server-side debugging
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}