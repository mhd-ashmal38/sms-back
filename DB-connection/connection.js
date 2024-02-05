// import mongoose
const mongoose=require('mongoose')

const connectionString=process.env.DATABASE

mongoose.connect(connectionString,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then((data)=>{
    console.log('mongo db atlas connected to sms server');
}).catch((err)=>{
    console.log('mongo db connection failed');
})