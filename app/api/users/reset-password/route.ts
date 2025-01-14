import { connect } from "@/dbConfig/dbConfig";
import { sendEmail } from "@/helpers/mailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { NextRequest,NextResponse } from "next/server";


connect();

export async function POST(request:NextRequest){

    try {
        const reqBody = await request.json();
        const {token,password} = reqBody;

        const user = await User.findOne({
            forgotPasswordToken:token,
            forgotPasswordTokenExpiry: {$gt: Date.now()},
        });
        
        if (!user){
            return NextResponse.json({success:false,message:"Invalid or Expired Token"});
        }

        const hashedPassword = await bcryptjs.hash(password,10);
        user.password = hashedPassword;
        user.forgotPasswordToken = undefined;
        user.forgotPasswordTokenExpiry = undefined;
        await user.save()

        console.log("Password Changed Successfully !")
        console.log("Sending Reset Success Email")
        await sendEmail({email:user.email,emailType:"RESET_SUCCESS",userId:user._id})
        console.log("Reset Success Email Sent !")
        return NextResponse.json({success:true,message:"Password Changed Successfully",status:200})

    } catch (error:any) {
        return NextResponse.json({success:false,message:error.message,status:500})
        
    }

}