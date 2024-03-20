import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    quantity: {
        amount: {
            type: Number,
            required: true
        },
        unity: {
            type: String,
            required: true
        }
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        available: {
            type: Boolean,
            required: true
        },
        amount: {
            type: Number        
        }
    },
    color: {
        type: String,
        required: true
    },
    material: {
        type: String
    },
    insulation: {
        type: String,
        enum: ['Glass', 'Air', 'Foam', 'Vacuum', 'Cooper']
    },
    fabricated: {
        type: String
    },
    photo: {
        type: String
    }
    //! add filter --> con palo, sin palo, tipo de yerba (ahumada o no, etc)
});

const  productModel= mongoose.model('product',productSchema)
export default productModel