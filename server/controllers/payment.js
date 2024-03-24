
import {instance} from "../app.js"

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