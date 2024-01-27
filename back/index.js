import express from 'express'
import bodyParser from 'body-parser'

import dotenv from 'dotenv'
dotenv.config()

import connectDB from './DB/db.js'

const app=express()
app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
const PORT=process.env.PORT 

import router from './routers/router.js'
app.use('/',router)

app.listen(PORT,(error)=>{
    if (error) return  console.error('Error en ',PORT)
    console.log(`server is listening on ${PORT}`)
})

