import mongoose from "mongoose";


const subTodoSchema = mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    complate:{
        type:String,
    }
    , createByuser:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
}

)