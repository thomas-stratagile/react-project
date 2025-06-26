import React from 'react';

function Footer() {
  const commonLinkClasses = "text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm";

  return (
    <footer style={{ backgroundColor: "#e7f0f5" }} className="pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Column 1: Logo and Subscription */}
          <div className="mb-8 md:mb-0">
            <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_logo.svg" alt="boAt logo" className="h-7 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-1">Subscribe to our email alerts!</h3>
            <p className="text-sm text-gray-600 mb-4">Get updates on new products and special offers.</p>
            <form className='flex items-center bg-white shadow-sm rounded-md p-1 max-w-sm'>
              <input
                className='text-gray-700 text-sm outline-none flex-grow py-2 px-3 bg-transparent placeholder-gray-500'
                type='email'
                placeholder='Enter your email address'
                aria-label="Email address for subscription"
              />
              <button
                className='w-9 h-9 rounded-md bg-red-600 hover:bg-red-700 text-white flex justify-center items-center transition-colors duration-200 flex-shrink-0'
                type='submit'
                aria-label="Subscribe"
              >
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </form>
          </div>

          {/* Column 2: Shop Links */}
          <div className="mb-8 md:mb-0">
            <h4 className='text-lg font-semibold text-gray-800 mb-4'>Shop</h4>
            <ul className='space-y-2'>
              <li><a href='#' className={commonLinkClasses}>True wireless Earbuds</a></li>
              <li><a href='#' className={commonLinkClasses}>Wired Headphones</a></li>
              <li><a href='#' className={commonLinkClasses}>Wireless Headphones</a></li>
              <li><a href='#' className={commonLinkClasses}>Wireless Speaker</a></li>
              <li><a href='#' className={commonLinkClasses}>Home Audio</a></li>
              <li><a href='#' className={commonLinkClasses}>Smart Watches</a></li>
              <li><a href='#' className={commonLinkClasses}>Mobile Accessories</a></li>
              <li><a href='#' className={commonLinkClasses}>Misfit Trimmer</a></li>
              <li><a href='#' className={commonLinkClasses}>TRebel</a></li>
              <li><a href='#' className={commonLinkClasses}>Refer & Earn</a></li>
            </ul>
          </div>

          {/* Column 3: Help Links */}
          <div className="mb-8 md:mb-0">
            <h4 className='text-lg font-semibold text-gray-800 mb-4'>Help</h4>
            <ul className='space-y-2'>
              <li><a href='#' className={commonLinkClasses}>Track Your Order</a></li>
              <li><a href='#' className={commonLinkClasses}>Warranty & Support</a></li>
              <li><a href='#' className={commonLinkClasses}>Return Policy</a></li>
              <li><a href='#' className={commonLinkClasses}>Service Centers</a></li>
              <li><a href='#' className={commonLinkClasses}>Bulk Orders</a></li>
              <li><a href='#' className={commonLinkClasses}>FAQs</a></li>
              <li><a href='#' className={commonLinkClasses}>Why Buy Direct</a></li>
            </ul>
          </div>

          {/* Column 4: Company Links */}
          <div>
            <h4 className='text-lg font-semibold text-gray-800 mb-4'>Company</h4>
            <ul className='space-y-2'>
              <li><a href='#' className={commonLinkClasses}>About boAt</a></li>
              <li><a href='#' className={commonLinkClasses}>News</a></li>
              <li><a href='#' className={commonLinkClasses}>Read Our Blogs</a></li>
              <li><a href='#' className={commonLinkClasses}>Careers</a></li>
              <li><a href='#' className={commonLinkClasses}>Security</a></li>
              <li><a href='#' className={commonLinkClasses}>Investor Relations</a></li>
              <li><a href='#' className={commonLinkClasses}>Social Responsibility</a></li>
              <li><a href='#' className={commonLinkClasses}>Warranty Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright and Social Links */}
        <div className="mt-12 pt-8 border-t border-gray-300 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-red-600 text-xl"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-red-600 text-xl"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-red-600 text-xl"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="YouTube" className="text-gray-500 hover:text-red-600 text-xl"><i className="fab fa-youtube"></i></a>
            <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-red-600 text-xl"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} boAt Lifestyle. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Website clone for educational purposes.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
