import React from 'react'

function Card({ amount, img, checkoutHandler }) {
    return (
        <div  >
            <div className='w-60  rounded  h-50 bg-red-50 flex flex-col text-center  p-5 justify-center m-2 '>

                <img src={img} className='w-full h-full rounded-sm object-cover hover:shadow-md ' alt="payment method" />
                <h2>Payment Method</h2>
                <p>Rs. {amount}</p>
                <button className='bg-blue-600 text-white font-bold p-2 m-2 rounded-md ' onClick={()=>checkoutHandler(amount)}>Pay Now</button>

            </div>

        </div>
    )
}

export default Card
