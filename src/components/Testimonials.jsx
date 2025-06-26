import React from 'react';

const testimonials = [
  {
    quote: "The sound quality is absolutely amazing! Best earbuds I've ever owned. The bass is incredible and they fit perfectly.",
    name: 'Rohan Sharma',
    location: 'Mumbai, India',
    rating: 5, // Out of 5
    avatar: './user-icon.png' // Placeholder avatar
  },
  {
    quote: "Stylish, comfortable, and the battery life is fantastic. I use my boAt Rockerz all day long for calls and music.",
    name: 'Priya Singh',
    location: 'Delhi, India',
    rating: 5,
    avatar: './user-icon.png' // Placeholder avatar
  },
  {
    quote: "Value for money! The smartwatch tracks my workouts accurately and looks great too. Highly recommend it.",
    name: 'Amit Patel',
    location: 'Ahmedabad, India',
    rating: 4,
    avatar: './user-icon.png' // Placeholder avatar
  }
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <i
        key={i}
        className={`fa-solid fa-star ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      ></i>
    );
  }
  return <div className="flex items-center">{stars}</div>;
};

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-100 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-base font-normal text-gray-600 sm:text-lg">
            Real stories from satisfied boAtheads.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex-grow mb-4">
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
              </div>
              <div className="mt-auto">
                <div className="flex items-center mb-2">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full mr-3 object-cover" />
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <StarRating rating={testimonial.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
