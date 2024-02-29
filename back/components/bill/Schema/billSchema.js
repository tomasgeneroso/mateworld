import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    quantity:{              //add quantity:{ amount:12, unidad:'kg'}
        type:String,
        required:true
    },
    price:{              
        type:Number,
        required:true
    },
    stock:{
        type:Object,
        required:true
    },
    pais:{
        type:String,
        required:true
    },
    description:{
        type:String
    }
    //add filter --> con palo, sin palo,tipo de yerba (ahumada o no, etc)
})

const  productModel= mongoose.model('product',productSchema)
export default productModel