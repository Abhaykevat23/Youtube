import express from 'express'
import mongoose from "mongoose"
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import userRoutes from './Routes/user.js'
import videoRoutes from './Routes/video.js'
import commentRoutes from './Routes/comment.js'

import path from 'path'

dotenv.config()

const app=express()
app.use(cors())

app.use(express.json({limit:"30mb",extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))
app.use('/uploads',express.static(path.join('uploads')))

app.get('/',(req,res)=>{
    res.send("hello")
})

app.use(bodyParser.json())

app.use('/user',userRoutes)
app.use('/video',videoRoutes)
app.use('/comment',commentRoutes)

const PORT=5500

app.listen(PORT,()=>{
    console.log(`server running on the port ${PORT} `)
})

const DB_URL="mongodb+srv://abhaykevat6355:Abhay%402310@cluster0.mo4gzgk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB_URL,{}).then(()=>{
    console.log("MongoDB database connected........")
}).catch((error)=>{
    console.log("Error : "+ error.response.data)
})

// "both" :"concurrently \" npm run start \" \" nodemon ../server/index.js \""