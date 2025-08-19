import React from 'react';
import Button from '../button/button';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold text-white">
              Ver<span className="text-gray-400">mento</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#" className="nav-link text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="#" className="nav-link text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Find Mentors
              </a>
              <a href="#" className="nav-link text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                For Mentors
              </a>
              <a href="#" className="nav-link text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
                Pricing
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-hover text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">
              Login
            </button>
            <Button variant="primary" size="sm">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;