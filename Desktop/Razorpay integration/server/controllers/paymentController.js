import { instance } from "../server.js"
import crypto from "crypto"

export const checkout = async (req, res) => {

    try {
        const options = {
            amount: Number(req.body.amount * 100),
            currency: "INR",

        }

        const order = await instance.orders.create(options)



        res.status(200).json({
            success: true,
            order,
        })

    } catch (error) {

        res.status(400).json({
            success: false,
            error: error.message,
        })

    }

}

export const paymentVerifiction = async (req, res) => {
    // console.log(req.body)
    

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const key_secret = process.env.RAZORPAY_API_SECRET;  // Replace with your Razorpay secret key

    // Create the expected signature
    const shasum = crypto.createHmac('sha256', key_secret);
    shasum.update(`${razorpay_order_id}|${razorpay_payment_id}`);
    const expectedSignature = shasum.digest('hex');

    if (expectedSignature === razorpay_signature) {
        // Payment is verified
        res.status(200).json({ success: true, message: "Payment verified successfully" });
    } else {
        // Payment verification failed
        res.status(400).json({ success: false, message: "Invalid signature" });
    }


    res.status(200).json({
        success: true,
        order,
    })

}