import express from "express"
import authMiddleware from "../middleware/auth.js"
import { listOrders, placeService, updateStatus, userOrders } from "../controllers/placeserviceController.js";
import { updatePaymentStatus } from "../controllers/placeserviceController.js";

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeService);

orderRouter.post("/userOrders",authMiddleware,userOrders)
orderRouter.get('/list',listOrders)
orderRouter.post("/status",updateStatus)

orderRouter.post("/update-payment", updatePaymentStatus);

export default orderRouter;