import React from 'react'
import Card from './component/card'
import axios from 'axios';

function Home() {
  const checkoutHandler = async (amount) => {
    const { data: { key } } = await axios.get("http://localhost:4000/api/getkey")
    const { data: { order } } = await axios.post('http://localhost:4000/api/checkout', {
      amount
    })

    const options = {
      key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "vikash sharma",
      description: "Testing by vikash sharma",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:4000/api/paymentVerifiction",
      prefill: {
        "name": "Gaurav Kumar",
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000"
      },
      notes: {
        "address": "Razorpay Corporate Office"
      },
      theme: {
        "color": "#3399cc"
      }
    };

  
    const razor = new window.Razorpay(options);

    razor.open();


    // call the Razorpay API here
  }
  return (
    <div className='bg-black h-[100vh] w-[100vw] flex justify-center items-center '>
      <Card amount={5000} img={'../src/img/mac.jpeg'} checkoutHandler={checkoutHandler} />
      <Card amount={8000} img={'../src/img/mac2.jpg'} checkoutHandler={checkoutHandler} />

    </div>
  )
}

export default Home
