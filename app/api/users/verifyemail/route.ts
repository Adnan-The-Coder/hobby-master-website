import { connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { sendEmail } from "@/helpers/mailer";


connect();

export async function POST(request: NextRequest) {
    
    try {
        const reqBody = await request.json();
        const {token } = reqBody;
        console.log("token  is ", token);
        
        // Find the user with the provided token
        const user = await User.findOne({
            verifyToken: token,
            verifyTokenExpiry: { $gt: Date.now() },
        });
        console.log(user);
        if (!user) {
            return NextResponse.json({ error: "Invalid Token" }, { status: 400 });
        }

        // Verify the user and clear the token
        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        await user.save();

        // send Welcome Email
        console.log("sending Welcome Email")
        // await sendEmail(user,"WELCOME");
        await sendEmail({email:user.email,emailType:"WELCOME",userId:user._id,username:user.username})
        console.log("Welcome Email Sent")

        return NextResponse.json({ message: "Email Verified successfully", success: true });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}