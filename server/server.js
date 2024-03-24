import app from "./app.js";
import connectToDB from "./config/db_connection.js";

connectToDB()
const PORT = process.env.PORT

app.listen(PORT,()=>{
   console.log(`Server is running on ${PORT}`);
})

