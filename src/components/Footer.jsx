import React from 'react'

function Footer() {
  return (
    <>
      <div className="container-fluid p-12 flex lg:flex-row flex-col" style={{ backgroundColor: "#e7f0f5" }}>
        <div className="col-md-3">
          <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt_logo.svg" alt="" />
          <h3 className="text-3xl font-semibold pt-3">Subscribe to our email<br /> alerts!</h3>
          <div className='bg-white lg:h-12 lg:w-96 w-76 p-3 lg:mt-5 mb-8 rounded-md mt-10'>
            <input className='text-black   outline-none' type='text' placeholder='Enter your email address' />
            <button className='w-6 h-6 rounded-md border-white float-end flex justify-center items-center' type='submit' style={{border:"1px solid #929ba2",borderRadius:"50%"}}>
              <span><i class="fa-solid fa-angle-right fa-sm"></i></span>
            </button>
          </div> 
        </div>

        <div className="col-md-3 lg:ps-14 ps-0 mb-8">
        <p className='font-bold mb-6'>Shop</p>
        <div className='flex'>
          <ul className=''>
            <li className='mb-3'><a href='#'>True wireless Earbuds</a></li>
            <li className='mb-3'><a href='#'>wired Headphones</a></li>
            <li className='mb-3'><a href='#'>Home Audio</a></li>
            <li className='mb-3'><a href='#'>Smart Watches</a></li>
            <li className='mb-3'><a href='#'>Misfit Trimmer</a></li>
          </ul>
          <ul className='ms-6'>
            <li className='mb-3'><a href='#'>wireless Headphones</a></li>
            <li className='mb-3'><a href='#'>Wireless Speaker</a></li>
            <li className='mb-3'><a href='#'>Mobile Accessories</a></li>
            <li className='mb-3'><a href='#'>TRebel</a></li>
            <li className='mb-3'><a href='#'>Refer & Earn</a></li>
          </ul>
        </div>
        </div>
        <div className="col-md-3 lg:ms-20 ms-0 mb-8">
        <p className='font-bold mb-6'>Help</p>
        <div className='flex'>
          <ul className=''>
            <li className='mb-3'><a href='#'>Track Your Order</a></li>
            <li className='mb-3'><a href='#'>Warranty & Support</a></li>
            <li className='mb-3'><a href='#'>Return Policy</a></li>
            <li className='mb-3'><a href='#'>Service Centers</a></li>
            <li className='mb-3'><a href='#'>Bulk Orders</a></li>
            <li className='mb-3'><a href='#'>FAQs</a></li>
            <li className='mb-3'><a href='#'>Why Buy Direct</a></li>
          </ul>
        </div>
        </div>
        <div className="col-md-3 lg:ms-20 ms-0">
        <p className='font-bold mb-6'>Company</p>
        <div className='flex'>
          <ul className=''>
            <li className='mb-3'><a href='#'>About boAt</a></li>
            <li className='mb-3'><a href='#'>News</a></li>
            <li className='mb-3'><a href='#'>Read Our Blogs</a></li>
            <li className='mb-3'><a href='#'>Careers</a></li>
            <li className='mb-3'><a href='#'>Security</a></li>
            <li className='mb-3'><a href='#'>Investors Relations</a></li>
            <li className='mb-3'><a href='#'>Social Responsibility</a></li>
            <li className='mb-3'><a href='#'>Warranty Policy</a></li>
          </ul>
        </div>
        </div>
      </div>
    </>
  )
}

export default Footer
