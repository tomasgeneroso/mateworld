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
    country:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    postalCode:{
        type:String,
        required:true
    },
    addressDetails:{
        type:String
        
    },
    /*
    role:{
        type:String,
        required:true
    }
    */
    
})

const  userModel= mongoose.model('user',userSchema)
export default userModel