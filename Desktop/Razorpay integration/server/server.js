import {app} from './app.js';

// Import environment variables

import Razorpay from 'razorpay'
export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
    currency: 'INR', // or any other currency code
    
})
// console.log(process.env.RAZORPAY_API_SECRET)


app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)  // Use environment variable PORT instead of hardcoded port number
})