import React from 'react';

const highlights = [
  {
    icon: 'fa-solid fa-headphones-simple', // Font Awesome class
    title: 'Premium Sound',
    description: 'Experience immersive sound quality with our cutting-edge audio technology.'
  },
  {
    icon: 'fa-solid fa-palette', // Font Awesome class
    title: 'Stylish Designs',
    description: 'Choose from a wide range of trendy designs that match your lifestyle.'
  },
  {
    icon: 'fa-solid fa-indian-rupee-sign', // Font Awesome class
    title: 'Great Value',
    description: 'Get the best audio experience without breaking the bank.'
  },
  {
    icon: 'fa-solid fa-shield-halved', // Font Awesome class
    title: 'Durable & Reliable',
    description: 'Built to last with high-quality materials and robust construction.'
  }
];

const BrandHighlights = () => {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
            Why Choose boAt?
          </h2>
          <p className="mt-4 text-base font-normal text-gray-600 sm:text-lg">
            Discover the features that make our products stand out.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((highlight, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 text-3xl text-white bg-red-600 rounded-full">
                <i className={highlight.icon}></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{highlight.title}</h3>
              <p className="text-sm text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandHighlights;
