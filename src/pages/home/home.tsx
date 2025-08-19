import React from 'react';
import Navbar from '../../components/navbar/navbar';
import Hero from '../../components/hero/hero';
import Features from '../../components/features/features';
import Testimonials from '../../components/testimonials/testimonials';
import CTA from '../../components/cta/cta';
import Footer from '../../components/footer/footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default Home;