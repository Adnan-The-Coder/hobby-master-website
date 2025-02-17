import nodemailer from "nodemailer";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, WELCOME_EMAIL_TEMPLATE,PAYMENT_SUCCESS_EARLY_ACCESS } from "./emailTemplates.js";
import { NextResponse } from "next/server.js";

export const sendEmail = async ({ email, emailType, userId,username="user" }:any) => {
    try {
        const hashedToken = await bcryptjs.hash(userId.toString(), 10);
        console.log("Hashed Token Generated");

        const verifyCode = Math.floor(100000 + Math.random()*900000).toString();

        let updateData = {};
        let emailSubject = '';
        let emailHtml = '';

        switch (emailType) {
            case 'VERIFY':
                updateData = {
                    verifyToken: verifyCode,
                    verifyTokenExpiry: Date.now() + 3600000 // Expires in 1 hour
                };
                emailSubject = "Verify Your Email";
                emailHtml = VERIFICATION_EMAIL_TEMPLATE.replace("{VERIFY_CODE}", `${verifyCode}`);
                break;

            case 'RESET':
                updateData = {
                    forgotPasswordToken: hashedToken,
                    forgotPasswordTokenExpiry: Date.now() + 3600000
                };
                emailSubject = "Reset Your Password";
                emailHtml = PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", `${process.env.DOMAIN}/reset-password?token=${hashedToken}`);
                break;

            case 'RESET_SUCCESS':
                emailSubject = "Your Password Reset Was Successful";
                emailHtml = PASSWORD_RESET_SUCCESS_TEMPLATE;
                break;

            case 'WELCOME':
                emailSubject = "😄 You’re In! Get Ready for Creative Sparks (and Smiles)!";
                emailHtml = WELCOME_EMAIL_TEMPLATE.replace("{user}",username);
                break;

            case 'EARLY_SUCCESS_EMAIL':
                emailSubject = "Your Early Purchase is Locked In – Here’s What Happens Next!";
                emailHtml = PAYMENT_SUCCESS_EARLY_ACCESS.replace("[Customer Name]",username);
                break;

            // Add more cases as needed
            default:
                throw new Error("Invalid email type");
        }

        await User.findByIdAndUpdate(userId, updateData);
        console.log("User Found in DB with tokens updated");

        const transport = nodemailer.createTransport({
            host: "live.smtp.mailtrap.io",
            port: 587,
            auth: {
                user: process.env.MAILTRAP_USER,
                pass: process.env.MAILTRAP_PASS
            }
        });
        console.log("Email Transporter is now Ready!");

        const mailOptions = {
            from: '"Hobby Master" <hello@hobbymaster.xyz>',
            to: email,
            subject: emailSubject,
            html: emailHtml,
        };

        console.log("Mail Options Are now Set!");
        console.log("Sending Email...");
        const mailResponse = await transport.sendMail(mailOptions);
        return mailResponse;

    } catch (error:any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

