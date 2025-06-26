import React from 'react'

const Twssection = () => {
    return (
        <>
            <div className='flex lg:flex-row flex-col lg:justify-between gap-10 min-h-screen items-center bg-gradient-to-b from-cyan-50 to-slate-100 py-10 px-4 sm:px-6 lg:px-8'>

                <div className='lg:w-1/2 w-full lg:p-10 text-center lg:text-left'>

                    <h1 className='text-4xl sm:text-5xl lg:text-7xl font-light'>True Wireless <span className='font-bold'>Earbuds</span></h1>
                    <h4 className='text-2xl sm:text-3xl lg:text-4xl mt-3'>Starting from <span className='font-bold'>₹999*</span></h4>

                    <div className='flex mt-6 lg:mt-8 bg-black hover:bg-gray-800 transition-colors duration-300 lg:mx-0 mx-auto max-w-xs sm:max-w-sm lg:w-auto text-white justify-center p-3 rounded-lg items-center cursor-pointer shadow-md hover:shadow-lg'>
                        <button className='font-bold text-sm sm:text-base'>Shop products</button>
                        {/* Using a simpler arrow icon for now, you can replace with your SVG if preferred */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>

                <div className='lg:w-1/2 w-full mt-8 lg:mt-0 flex justify-center'>
                    <img src="./twshome.png" alt="True Wireless Earbuds" className="max-w-full h-auto md:max-w-md lg:max-w-lg xl:max-w-xl" />
                </div>

            </div>
        </>
    )
}

export default Twssection
