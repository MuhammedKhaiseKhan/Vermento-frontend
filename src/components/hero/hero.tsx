import React from 'react';
import Button from '../Button/Button';

const Hero: React.FC = () => {
  return (
    <section className="gradient-bg min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in stagger-1">
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-gradient leading-tight">
            Achieve Your Goals with<br />Expert Mentors
          </h1>
        </div>
        <div className="fade-in stagger-2">
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Vermento connects you with industry experts in business, tech, creative fields, and more to accelerate your journey through personalized mentorship.
          </p>
        </div>
        <div className="fade-in stagger-3 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" size="lg">
            Find a Mentor
          </Button>
          <Button variant="secondary" size="lg">
            Become a Mentor
          </Button>
        </div>
      </div>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
};

export default Hero;