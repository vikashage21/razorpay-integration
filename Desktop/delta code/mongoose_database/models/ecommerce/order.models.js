import mongoose from 'mongoose '


const orderItmesSchema = new mongoose.Schema({
    productid: {
        type: mongoose.Schema.Types.ObejctId,
        ref: "Product"
    },

    quantity: {
        type: Number,
        required: true

    }


})

const orderSchema = new mongoose.Schema({

    orderPrice: {
        type: Number,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    orderItmes: {
        type: [orderItmesSchema]
    },
     address: {
        type: String,
        required: true
    },
    status:{
        type:String,
        enum:["Pending","Cancelled","Delivered"],
        default:"Pending"
    }

})

export const Order = mongoose.model('Order', orderSchema)