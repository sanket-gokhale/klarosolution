import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// placing user order from frontend
const placeService = async (req,res) =>{

    const frontend_url = "http://localhost:5174";
  

  try {

    const newOrder = new orderModel({
      userId: req.body.userId || null,   // Allow anonymous orders
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,
      paymentMethod: "cod",
      payment: false
    });

    await newOrder.save();

    // Only clear cart if user is logged in
    if (req.body.userId) {
      await userModel.findByIdAndUpdate(req.body.userId, {
        cartData: {}
      });
    }

    res.json({
      success: true,
      message: "Service Placed Successfully (COS)"
    });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
}



//user order for frontend
const userOrders = async (req,res) =>{
try {
  const orders = await orderModel.find({userId:req.body.userId});
  res.json({success:true,data:orders})
} catch (error) {
  console.log(error);
  res.json({success:false,message:"Error"})
}
}

// Listing order for admin panel
const listOrders = async (req,res) =>{
   try {
    const orders = await orderModel.find({});
    res.json({success:true,data:orders})
   } catch (error) {
    console.log(error);
    res.json({success:false,message:"Error"})
    
   }
}


// api for updating order status
const updateStatus = async (req,res) =>{
try {
  await orderModel.findByIdAndUpdate(req.body.orderId,{status:req.body.status});
  res.json({success:true,message:"Status Updated"})
} catch (error) {
  console.log(error);
  res.json({success:false,message:"Error"})
}
}


//update payment status
const updatePaymentStatus = async (req, res) => {
  try {

    console.log("BODY:", req.body); // 👈 check what is coming

    const { orderId, payment } = req.body;

    if (!orderId || !payment) {
      return res.json({ success: false, message: "Missing data" });
    }

    await orderModel.findByIdAndUpdate(orderId, { payment });

    res.json({ success: true, message: "Payment updated" });

  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error updating payment" });
  }
};



export {placeService,userOrders,listOrders,updateStatus,updatePaymentStatus}

