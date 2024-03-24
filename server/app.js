import { config } from "dotenv";
config({path:"./config/config.env"})
import  express from "express";
import Razorpay from "razorpay"
import cors from "cors"
import paymentRouter from "./routes/paymentRouter.js";



const app = express();
app.use('/api',paymentRouter)
app.use(cors())

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
  });




export default app