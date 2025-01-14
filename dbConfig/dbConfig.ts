import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;
        connection.on('connected',()=>{console.log("Mongo DB Connected Successfully");})

        connection.on('error',(err)=>{
            console.log("Mongo DB Connection Error Please Make Sure Mongo DB is running. "+ err);
        })
    } catch (error) {
        console.log("Something Went Wrong");
        console.log(error)
        
    }
}