import express from "express"
import { loginUser,registerUser,sendOtp,verifyOtp,changePassword } from "../controllers/userController.js"
 


const userRouter = express.Router()

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.post("/send-otp",sendOtp)
userRouter.post("/verify-otp",verifyOtp)
userRouter.post("/change-password",changePassword)


export default userRouter;