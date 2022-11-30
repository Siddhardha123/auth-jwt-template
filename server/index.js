import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import db from './config/mongo.js'
import router from './router.js'
dotenv.config();
const app = express()


app.use(express.json())
app.use(cors())
app.use('/api',router)
db();
app.listen(process.env.PORT,()=>{
    console.log("connected to server")
})