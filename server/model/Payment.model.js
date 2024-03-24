import {Schema,model} from "mongoose";

const paymentSchema = new Schema({
    razorpay_payment_id:{
        type:String,
        required:true
    },
    razorpay_order_id:{
        type:String,
        required:true
    },
    razorpay_signature:{
        type:String,
        required:true
    }
},{timeseries:true})

export const Payment = model("Payment",paymentSchema)