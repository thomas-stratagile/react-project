import React from 'react';
import Card from './Card';

const products = [
  {
    imageSrc: './watch.png',
    altText: 'Smartwatch',
    tagline: 'Alexa Enabled',
    productName: 'boAt Storm Pro',
    price: '1,499',
    originalPrice: '5,999',
    discount: '75',
    productLink: '#product-watch-storm-pro'
  },
  {
    imageSrc: './twshome.png', // Assuming this is a generic earbuds image
    altText: 'Wireless Earbuds',
    tagline: 'Clear Sound',
    productName: 'boAt Airdopes 131',
    price: '999',
    originalPrice: '2,990',
    discount: '67',
    productLink: '#product-airdopes-131'
  },
  {
    imageSrc: './watch.png', // Placeholder, ideally a product image
    altText: 'Audio Product 3',
    tagline: 'New Arrival',
    productName: 'boAt Rockerz 450',
    price: '1,299',
    originalPrice: '3,990',
    discount: '67',
    productLink: '#product-rockerz-450'
  },
  {
    imageSrc: './twshome.png', // Placeholder, ideally a product image
    altText: 'Audio Product 4',
    tagline: 'Best Seller',
    productName: 'boAt Stone 180',
    price: '899',
    originalPrice: '2,490',
    discount: '64',
    productLink: '#product-stone-180'
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
            Featured Products
          </h2>
          <p className="mt-4 text-base font-normal text-gray-600 sm:text-lg">
            Check out our latest and greatest audio gear.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:mt-16">
          {products.map((product, index) => (
            <Card
              key={index}
              imageSrc={product.imageSrc}
              altText={product.altText}
              tagline={product.tagline}
              productName={product.productName}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              productLink={product.productLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
