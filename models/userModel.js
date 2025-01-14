import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,"Please Provide a UserName"],
        unique:true,
    },
    email: {
        type: String,
        required: [true,"Please Provide a Email"],
        unique:true,
    },
    password: {
        type: String,
        required: [true,"Please Provide a Password"],
        unique:true,
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAdmin:{
        type: Boolean,
        default:false,
    },
    forgotPasswordToken:String,
    forgotPasswordTokenExpiry:String,
    verifyToken:String,
    verifyTokenExpiry:Date,


})


const User = mongoose.models.users || mongoose.model("users",userSchema);



export default User;