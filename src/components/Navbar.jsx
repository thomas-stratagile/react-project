import React, { useState } from 'react'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(prev => !prev)
    }

    return (
        <>
            <div className='sticky top-0 left-0 z-10 w-full bg-white flex justify-between items-center shadow-lg px-5 py-5 lg:px-10 lg:py-6'>
                <div className='flex justify-between items-center'>
                    <div className='w-28 flex items-center gap-4'>
                        <div onClick={handleNav} className='w-16'>
                            {
                                nav ? (
                                    <img className='lg:hidden' src="./close.png" alt="close" />
                                ) : (
                                    <img className='w-full lg:hidden cursor-pointer' src="./hamburger-icon.png" alt="menu" />
                                )
                            }
                        </div>
                        <div>
                            <img className='w-full' src="./boat-logo.png" alt="img" />
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center gap-8 pl-14 text-md text-gray-500">
                        <h1 className="relative hover:border-b-2 hover:border-red-600 cursor-pointer transition-all ">Categories</h1>
                        <h1 className="relative hover:border-b-2 hover:border-red-600 cursor-pointer transition-all">boAt Personalation</h1>
                        <h1 className="relative hover:border-b-2 hover:border-red-600 cursor-pointer transition-all">Gift With BoAt</h1>
                        <h1 className="relative hover:border-b-2 hover:border-red-600 cursor-pointer transition-all">Corporate Orders</h1>
                        <h1 className="relative hover:border-b-2 hover:border-red-600 cursor-pointer transition-all">More</h1>
                    </div>

                </div>
                <div className='flex items-center gap-5'>
                    <div className='hidden w-full lg:flex items-center bg-gray-200 rounded-full px-3 py-1'>
                        <img className='w-4' src="./search-icon.png" alt="" />
                        <input className='outline-none bg-transparent px-2 placeholder:text-black' type="text" placeholder="Search Earphones" />
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='lg:hidden w-5'>
                            <img className='w-full' src="./search-icon.png" alt="" />
                        </div>
                        <div className='w-5'>
                            <img className='w-full' src="./user-icon.png" alt="" />
                        </div>
                        <div className='w-5'>
                            <img className='w-full' src="./bag-icon.svg" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* for mobile */}
            {
                nav && (
                    <div className='lg:hidden w-[90%] border-r-2 h-screen overflow-y-hidden px-9 py-4'>
                        <div className='flex flex-col gap-10'>
                            <div>
                                <h1>Categories</h1>
                            </div>
                            <div>
                                <h1>boAt Personalation</h1>
                            </div>
                            <div>
                                <h1>Gift With BoAt</h1>
                            </div>
                            <div>
                                <h1>Corparate Orders</h1>
                            </div>
                            <div>
                                <h1>More</h1>
                            </div>
                            <div>
                                <h1>Track Your Order</h1>
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    )
}

export default Navbar
