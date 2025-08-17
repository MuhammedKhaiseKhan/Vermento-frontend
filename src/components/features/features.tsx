import React from 'react';
import Card from '../Card/Card';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      icon: '👥',
      title: '1:1 Mentorship',
      description: 'Get personalized guidance from experienced mentors who understand your goals in business, tech, or creative pursuits.'
    },
    {
      icon: '🎯',
      title: 'Tailored Guidance',
      description: 'Custom mentorship plans designed for your unique aspirations, whether in business, technology, or other fields.'
    },
    {
      icon: '🚀',
      title: 'Goal-Oriented Mentorship',
      description: 'Work on real-world goals with mentor support to achieve success in your chosen field.'
    },
    {
      icon: '🌟',
      title: 'Community Support',
      description: 'Join a vibrant community of learners and mentors sharing knowledge across industries.'
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Why Choose Vermento?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience accelerated growth through expert guidance, tailored support, and hands-on mentorship across any field.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`fade-in stagger-${index + 1}`}>
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;