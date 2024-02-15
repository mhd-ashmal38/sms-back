const mongoose=require('mongoose')
const validator=require('validator')

const registerSchema=new mongoose.Schema({
    uname:{
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
    password:{
        type:String,
        required:true,
        minlength:8
        }
})

const accounts=new mongoose.model('accounts',registerSchema)

module.exports=accounts