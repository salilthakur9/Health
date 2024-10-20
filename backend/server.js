import express from 'express'
import cors from 'cors'                               
import 'dotenv/config'                     // get the support of environment variables
import connetDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'


// app config
const app = express()            
const port = process.env.PORT || 4000
connetDB()
connectCloudinary()

// middlewares
app.use(express.json())         // whenever we made an req it will get passs using this 
app.use(cors())                   // it will allow frontend to connect with backend

//API endpoints
app.get('/',(req, res)=>{
    res.send('API WORKING !')
})

app.listen(port, ()=>console.log("Server Started", port))