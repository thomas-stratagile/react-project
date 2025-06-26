import React from 'react';

const categories = [
  {
    name: 'True Wireless',
    imageSrc: './twshome.png', // Re-using for TWS
    altText: 'True Wireless Earbuds',
    link: '#category-tws'
  },
  {
    name: 'Smart Watches',
    imageSrc: './watch.png', // Re-using for watches
    altText: 'Smart Watches',
    link: '#category-smartwatches'
  },
  {
    name: 'Neckbands',
    imageSrc: './twshome.png', // Placeholder - ideally a neckband image
    altText: 'twshome.png',
    link: '#category-neckbands'
  },
  {
    name: 'Speakers',
    imageSrc: './watch.png', // Placeholder - ideally a speaker image
    altText: 'Bluetooth Speakers',
    link: '#category-speakers'
  }
];

const CategoriesDisplay = () => {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
            Shop by Categories
          </h2>
          <p className="mt-4 text-base font-normal text-gray-600 sm:text-lg">
            Explore our wide range of audio products.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:mt-16">
          {categories.map((category, index) => (
            <a
              key={index}
              href={category.link}
              className="relative block overflow-hidden rounded-lg group shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={category.imageSrc}
                alt={category.altText}
                className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <h3 className="text-2xl font-semibold text-white text-center">
                  {category.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesDisplay;
