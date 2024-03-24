
import {instance} from "../app.js"
import crypto from "crypto"
import { Payment } from "../model/Payment.model.js"

export const  checkout =async(req,res)=>{
    
    try {
        const option = {
            amount : Number(req.body.amount * 100),
            currency:'INR'
        }
        const order = await instance.orders.create(option)
        console.log(order);

        res.status(200).json({
            success:true,
            order
            
        })
    } catch (error) {
        res.status(404).json({
            success:false
        })
    }
}

export const paymentverification = async(req,res)=>{

    const {razorpay_payment_id,razorpay_order_id,razorpay_signature} = req.body
    console.log(req.body);

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
    .createHmac("sha256",process.env.RAZORPAY_SECRET_KEY)
    .update(body.toString())
    .digest("hex")

    const isAunthentic = expectedSignature === razorpay_signature

    if(isAunthentic)
    {
        // Save in DB
        await Payment.create({
            razorpay_payment_id,
            razorpay_order_id,
            razorpay_signature
        })
        res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`)

        res.status(200)
    }
    else
    {
        res.status(400).json({
            success:false
        })
    }

    res.status(200).json({
        success:true
    })
}