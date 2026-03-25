import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
import nodemailer from "nodemailer"

//login user
const loginUser = async (req ,res) => {
    const {email,password} = req.body;
    try {
        const user = await userModel.findOne({email});
        if (!user) {
            return res.json({success:false,message:"user not exist"})
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) {
            return res.json({success:false,message:"Invalid credentials"})
        }
      
        const token = createToken(user._id);
        res.json({success:true,token})

    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}

//register user
const registerUser =async (req,res) =>{
    const {name,password,email} = req.body;
    try {
        // cheching is user alredy exist
        const exists = await userModel.findOne({email});
        if (exists){
            return res.json({success:false,message:"user alredy exist"})
        }

        // validating email format strong password
        if (!validator.isEmail(email)){
            return res.json({success:false,message:"please enter a valid email"})
        }

        if(password.length<8){
            return res.json({success:false,message:"enter a strong password"})
        }
        //hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashedPassword
        })

       const user = await newUser.save()
       const token = createToken(user._id)
       res.json({success:true,token})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}

const sendOtp = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }
        
        if (!process.env.BREVO_API_KEY || !process.env.EMAIL_USER) {
            console.error("CRITICAL: BREVO_API_KEY or EMAIL_USER missing inside Render environment variables!");
            return res.json({ success: false, message: "Server configuration error: email API credentials missing" });
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        user.resetOtp = otp;
        user.resetOtpExpire = Date.now() + 15 * 60 * 1000;
        await user.save();
        
        // Sending Email using Brevo's HTTP API to bypass Render's SMTP Port blocking!
        const response = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "api-key": process.env.BREVO_API_KEY,
                "content-type": "application/json"
            },
            body: JSON.stringify({
                sender: { email: process.env.EMAIL_USER, name: "Klaro Solutions" },
                to: [{ email: email }],
                subject: "Password Reset OTP",
                textContent: `Your OTP for password reset is ${otp}. It is valid for 15 minutes.`
            })
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Brevo HTTP Error: ${JSON.stringify(errorData)}`);
        }

        res.json({ success: true, message: "OTP sent to your email" });
    } catch (error) {
        console.log("Email API error: ", error);
        res.json({ success: false, message: `Error sending OTP: ${error.message}` });
    }
}

const verifyOtp = async (req, res) => {
    const { email, otp } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }
        
        if (user.resetOtp !== otp || user.resetOtp === "") {
            return res.json({ success: false, message: "Invalid OTP" });
        }
        
        if (user.resetOtpExpire < Date.now()) {
            return res.json({ success: false, message: "OTP expired" });
        }
        
        res.json({ success: true, message: "OTP verified successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error verifying OTP" });
    }
}

const changePassword = async (req, res) => {
    const { email, otp, newPassword } = req.body;
    try {
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.json({ success: false, message: "User not found" });
        }
        
        if (user.resetOtp !== otp || user.resetOtp === "") {
            return res.json({ success: false, message: "Invalid OTP" });
        }
        
        if (user.resetOtpExpire < Date.now()) {
            return res.json({ success: false, message: "OTP expired" });
        }
        
        if (newPassword.length < 8) {
            return res.json({ success: false, message: "Enter a strong password (min 8 characters)" });
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        
        user.password = hashedPassword;
        user.resetOtp = "";
        user.resetOtpExpire = 0;
        await user.save();
        
        res.json({ success: true, message: "Password updated successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error changing password" });
    }
}

export {loginUser,registerUser,sendOtp,verifyOtp,changePassword}