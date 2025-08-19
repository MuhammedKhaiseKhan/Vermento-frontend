import React from 'react';
import Button from '../Button/Button';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Join thousands of professionals accelerating their careers through expert mentorship in any field.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" size="lg">
              Get Started Today
            </Button>
            <Button variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;