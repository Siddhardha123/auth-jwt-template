import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config();
const connectToDb = () =>{
    try{
        mongoose.connect(process.env.DB,()=>{
            console.log("connected to DB")
        })
    }catch(error){
        console.log(error)
    }
    
}



export default connectToDb