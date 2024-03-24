
import {instance} from "../app.js"

export const  checkout =async(req,res,next)=>{
    
    try {
        const option = {
            amount:50000,
            currency:'INR'
        }
        const order = await instance.orders.create(option)
        console.log(order);

        res.status(200).json({
            success:true
            
        })
    } catch (error) {
        res.status(404).json({
            success:false
        })
    }
}