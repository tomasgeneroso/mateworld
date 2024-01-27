import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    birthday:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    postalCode:{
        type:Number,
        required:true
    },
    addressDetails:{
        type:String
        
    }
    
})

const  userModel= mongoose.model('user',userSchema)
export default userModel