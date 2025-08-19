import React from 'react';

const Footer: React.FC = () => {
  const platformLinks = ['Find Mentors', 'Become a Mentor', 'Pricing', 'How it Works'];
  const companyLinks = ['About', 'Contact', 'Privacy Policy', 'Terms of Service'];

  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              Ver<span className="text-gray-400">mento</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Connecting professionals with industry experts to accelerate growth in business, tech, creative fields, and beyond.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">© 2025 Vermento. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;