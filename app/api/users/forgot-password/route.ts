import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel';
import crypto from "crypto";
import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from "@/helpers/mailer";


connect();

export async function POST(request:NextRequest) {
    try {
        console.log("Initiating forgot-password api POST request");
        const reqBody = await request.json();
        console.log("reqBody formed");
        const {email} = reqBody;
        console.log("email Found from Body")

        const user = await User.findOne({email});

        if (!user){
            return NextResponse.json({Message:"User Does not exist",status:400})
        }

        console.log("User found in DB")
        const uniqueString = `${user.email}-${Date.now()}`;
        const forgot_passwrd_token = crypto.createHash('sha256').update(uniqueString).digest('hex');
        console.log("forgot Password Token Generated")
		const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000; // 1 hour
        console.log("Forgot token Expiry Generated")

		
        user.forgotPasswordToken = forgot_passwrd_token;
        user.forgotPasswordTokenExpiry = resetTokenExpiresAt;

        await user.save();

        console.log("Sending Reset Password Request Email")
        await sendEmail({email,emailType:"RESET",userId:user._id})
        console.log("Reset Password Request Email Sent !")



        return NextResponse.json({
            message:"Forgot Password Token",
            success: true
        })



    } catch (error:any) {
        console.log(error.message);
        return NextResponse.json({message:error.message},{status:500})
        
    }
    
}