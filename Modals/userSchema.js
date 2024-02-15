const mongoose=require('mongoose')

const validator=require('validator')

// create schema
const userSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },
    lname:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw Error('invalid email')
            }
        }
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10
    },
    gender:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    father:{
        type:String,
        required:true
    },
    mother:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    faculty:{
        type:String,
        required:true,
        trim:true
    },
    subject1:{
        type:String,
        required:true
    },
    subject2:{
        type:String,
        required:true
    },
    subject3:{
        type:String,
        required:true
    },
    subject4:{
        type:String,
        required:true
    },
    subject5:{
        type:String,
        required:true
    },
    subject6:{
        type:String,
        required:true
    }
})

const users=new mongoose.model('users',userSchema)

module.exports=users

