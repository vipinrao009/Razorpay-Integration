import { config } from "dotenv";
config({path:"./config/config.env"})
import  express from "express";
import Razorpay from "razorpay"
import paymentRouter from "./routes/paymentRouter.js";


const app = express();


export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
  });
app.use('/api',paymentRouter)



export default app