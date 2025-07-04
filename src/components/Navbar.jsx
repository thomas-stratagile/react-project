import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const handleNavToggle = () => {
        setNavOpen(!navOpen);
    };

    // Effect to handle body scroll lock
    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        // Cleanup function to reset overflow when component unmounts
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [navOpen]);

    return (
        <>
            {/* Desktop Navbar */}
            <div className="sticky top-0 left-0 z-20 w-full bg-white flex justify-between items-center shadow-lg px-4 py-4 sm:px-6 lg:px-10 lg:py-5"> {/* Adjusted z-index and padding */}
                <div className="flex justify-between items-center">
                    <div className="w-28 flex items-center gap-4">
                        <div onClick={handleNavToggle} className="w-10 lg:hidden cursor-pointer">
                            <img className="w-full" src="./hamburger-icon.png" alt="menu" />
                        </div>
                        <div className='w-20'>
                            <img className="w-full" src="./boat-logo.png" alt="img" />
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center gap-8 pl-14 text-md text-gray-500">
                        <h1 className="cursor-pointer">Categories</h1>
                        <h1 className="cursor-pointer">boAt Personalization</h1>
                        <h1 className="cursor-pointer">Gift With BoAt</h1>
                        <h1 className="cursor-pointer">Corporate Orders</h1>
                        <h1 className="cursor-pointer">More</h1>
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div className="hidden lg:flex items-center bg-gray-100 rounded-full px-3 py-1.5"> {/* Slightly adjusted padding and bg color */}
                        <img className="w-4 h-4 text-gray-500" src="./search-icon.png" alt="Search" /> {/* Added alt text */}
                        <input className="outline-none bg-transparent px-2 text-sm text-gray-700 placeholder-gray-500" type="text" placeholder="Search Earphones" />
                    </div>
                    <div className="flex items-center gap-4">
                        <img className="w-5 lg:hidden" src="./search-icon.png" alt="" />
                        <img className="w-5" src="./user-icon.png" alt="" />
                        <img className="w-5" src="./bag-icon.svg" alt="" />
                    </div>
                </div>
            </div>

            {/* Mobile Sidebar */}
            {navOpen && (
                <div className="lg:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-50">
                    <div className="fixed inset-y-0 left-0 w-[90%] bg-white z-50 overflow-y-auto">
                        <div className="px-6 py-4 flex justify-between items-center">
                            <img className="w-20" src="./boat-logo.png" alt="img" />
                            <div onClick={handleNavToggle} className="w-6 cursor-pointer">
                                <img className="w-full" src="./close.png" alt="close" />
                            </div>
                        </div>
                        <div className="px-6 py-5 flex flex-col gap-5">
                            <h1 className="text-lg font-medium cursor-pointer">Categories</h1>
                            <h1 className="text-lg font-medium cursor-pointer">boAt Personalization</h1>
                            <h1 className="text-lg font-medium cursor-pointer">Gift With BoAt</h1>
                            <h1 className="text-lg font-medium cursor-pointer">Corporate Orders</h1>
                            <h1 className="text-lg font-medium cursor-pointer">More</h1>
                            <h1 className="text-lg font-medium cursor-pointer">Track Your Order</h1>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
