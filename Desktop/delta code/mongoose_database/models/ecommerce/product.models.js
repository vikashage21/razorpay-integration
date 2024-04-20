import mongoose from "mongoose";
import { type } from "os";


const productSchema = new mongoose.Schema({
    description: {
        required: true,
        type: String
    },
    name: {
        required: true,
        type: String
    },
    prdouctImage: {
        required: true,
        type: String
    }
    , price: {
        type: Number,
        default: 0

    },
    stock: {
        default: 0,
        type: Number
    }
    , caterory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required:ture
    },

    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

}, { timestamps: true })


export default Product = mongoose.model("Product", productSchema)