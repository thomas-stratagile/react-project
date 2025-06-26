import React from 'react';
import Navbar from "../components/Navbar";
import Twssection from "../components/Twssection";
import FeaturedProducts from '../components/FeaturedProducts';
import CategoriesDisplay from '../components/CategoriesDisplay';
import BrandHighlights from '../components/BrandHighlights';
import Testimonials from '../components/Testimonials';
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Twssection />
      <FeaturedProducts />
      <CategoriesDisplay />
      <BrandHighlights />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Home;
