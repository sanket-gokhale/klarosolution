import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://sanketgokhale12_db_user:1OOWldJhu4BNxbBX@cluster0.kkrupmb.mongodb.net/reppair-sap').then(()=>console.log("DB Connected"));
}