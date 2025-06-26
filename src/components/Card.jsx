import React from 'react';

const Card = ({
  imageSrc,
  altText = "Product Image",
  tagline,
  productName,
  price,
  originalPrice,
  discount,
  productLink = "#" // Default link, can be customized
}) => {
  return (
    <div className='w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col'>
      <div className='relative'>
        <a href={productLink}>
          <img className='h-64 w-full object-cover' src={imageSrc} alt={altText} />
        </a>
        {tagline && (
          <div className='w-3/4 bg-yellow-500 rounded-md mt-[-20px] relative mx-auto shadow-sm'>
            <p className='text-xs text-center font-bold py-1 px-2 text-gray-800'>{tagline}</p>
          </div>
        )}
      </div>

      <div className='p-4 flex flex-col flex-grow bg-slate-50'>
        <h3 className='text-lg font-bold text-gray-800 mb-1 truncate' title={productName}>
          <a href={productLink} className="hover:text-red-600">{productName}</a>
        </h3>
        <div className='my-2'>
          <p className='text-xl font-bold text-gray-900'>
            ₹{price}
            {originalPrice && (
              <span className='font-normal text-gray-500 text-sm line-through ml-2'>₹{originalPrice}</span>
            )}
          </p>
          {discount && (
            <p className='text-sm text-green-600 font-semibold mt-1'>{discount}% off</p>
          )}
        </div>
        <a
          href={productLink} // Can be changed to an onAddToCart function if needed
          className='mt-auto w-full bg-black text-white font-semibold rounded-md py-2.5 text-sm text-center hover:bg-gray-800 transition-colors duration-300'
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Card;
