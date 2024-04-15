import React from 'react'

const Card = () => {
    return (

        <div className='lg:w-[300px] border rounded-md mt-5 w-full'>
            <div>
                <img className='h-[300px] w-full rounded-md' src="./watch.png" alt="" />
            </div>

            <div className='w-3/4 bg-yellow-500 rounded-md mt-[-10px] relative mx-auto'>
                <p className='text-[13px] text-center font-bold py-0.5'>Alexa Enabled</p>
            </div>

            <div className='p-2 px-3 pb-8 bg-slate-50'>
                <p className='font-bold'>Storm</p>
                <div className='my-2'><p className='font-bold'>₹1,499 <span className='font-thin text-slate-400 text-[11px] line-through'>₹5,999</span> <span className='text-[12px] text-green-500'>75% off</span></p></div>
                <button className='w-full bg-[#1A2024] text-white rounded-md py-2'>Add to Cart</button>
            </div>
        </div>
    )
}

export default Card
