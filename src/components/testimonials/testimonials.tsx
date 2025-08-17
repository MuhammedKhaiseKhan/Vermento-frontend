import React from 'react';
import Card from '../Card/Card';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: 'My mentor helped me launch my startup in just 6 months. The personalized business advice was invaluable.',
      author: 'Sarah Chen',
      role: 'Entrepreneur, TechStartup'
    },
    {
      quote: 'Being a mentor on Vermento has been rewarding. Helping others grow in their careers is truly fulfilling.',
      author: 'Marcus Johnson',
      role: 'Business Consultant'
    },
    {
      quote: 'The mentorship helped me transition into a creative director role. Highly recommend Vermento!',
      author: 'Alex Rivera',
      role: 'Creative Director at DesignCo'
    }
  ];

  return (
    <section className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Success Stories</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear from individuals who transformed their careers through mentorship.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className={`bg-gray-900/30 fade-in stagger-${index + 1}`}>
              <div className="text-6xl text-gray-600 mb-4">"</div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">{testimonial.quote}</p>
              <div>
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-gray-400 text-sm">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;