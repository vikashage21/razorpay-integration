import mongoose from 'mongoose';


// creating schema in mongoose 

const userSchema = new mongoose.Schema({

useName:{
    type: String,
    required: true,
    unique: true
},

passWord :{
    type: String,
    required: true,
    unique:true


}



},{timestamps:true})


const User = mongoose.model('User', userSchema);

export default User;