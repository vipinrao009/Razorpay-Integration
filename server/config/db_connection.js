import mongoose from "mongoose";

const connectToDB = async()=>{

    try {
        const {connection} =await mongoose.connect(process.env.MONGO_URI || `mongodb://localhost:27017/RazorPay`)

        if(connection)
        {
            console.log(`DB is connected ${connection.host}`);
        }
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectToDB