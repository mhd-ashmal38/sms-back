// step 1 - import dotenv
require('dotenv').config()

// import database connection
require('./DB-connection/connection')

// step 2 - import express for creating server
const express=require('express')

// import cors
const cors=require('cors')

// create server using express
const smsServer=express()

// import router
const router=require('./Routes/router')

// use cors in server
smsServer.use(cors())

// use parser in server
smsServer.use(express.json())

// use route
smsServer.use(router)

smsServer.use('/uploads',express.static('./uploads'))

// set/customize port
const PORT=4000||process.env.PORT

// run server
smsServer.listen(PORT,()=>{
    console.log(`sms server started at port ${PORT}`);
})

// request from front-end
// smsServer.post('/',(req,res)=>{
//     res.send(`<h1>sms server started at port 4000</h1>`)
// })

