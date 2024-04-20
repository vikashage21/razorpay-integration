import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({

    content:{
        type:String,
        required:true

    },
    completed:{
        type:Boolean,
        default:false
    }
    ,
    createbyUser:{

        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
    ,
    subTodod:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Todo'
        }
    ]


},{
    timestamps:true

})


const Todo = mongoose.model('Todo',todoSchema)


export default Todo