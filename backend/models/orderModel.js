import mongoose from "mongoose"


const orderSchema = new mongoose.Schema({
    // Make userId optional so guests can place orders without logging in
    userId: { type: String },
    items: { type: Array, required: true },
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    status: { type: String, default: "Service Processing" },
    date: { type: Date, default: Date.now },
    // Store payment as a boolean flag (true = paid)
    payment: { type: Boolean, default: false },

    paymentMethod: { type: String, default: "Cash Payment" }
})


const orderModel = mongoose.models.order || mongoose.model("order",orderSchema);

export default orderModel;