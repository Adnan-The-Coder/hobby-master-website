import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";


connect();



export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json();
        const {username,email,password} = reqBody;

        const user = await User.findOne({email});

        if (user){
            return NextResponse.json({error:"User Already Exists"}, {status:400})
        }


        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password,salt)

        const newUser = new User({
            username,
            email,
            password:hashedPassword,
        })

        const savedUser = await newUser.save();
        console.log("User is in DB")
        console.log("Sending Verify Mail")

        await sendEmail({email,emailType:"VERIFY",userId:savedUser._id})
        console.log("Verify Mail Sent!")

        return NextResponse.json({
            message:"User Created Successfully",
            success: true,
            savedUser
        })

    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500})
    }
    
}