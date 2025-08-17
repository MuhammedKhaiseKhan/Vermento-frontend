import React from "react";

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-700 bg-black/90 backdrop-blur-[20px] z-[100]">
      <nav className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="text-2xl font-bold text-white no-underline">
          Ver<span className="text-gray-500">mento</span>
        </a>
        <ul className="hidden md:flex list-none gap-8">
          <li>
            <a 
              href="#features" 
              className="text-gray-400 no-underline text-sm font-medium hover:text-white transition-colors duration-200"
            >
              Features
            </a>
          </li>
          <li>
            <a 
              href="#testimonials" 
              className="text-gray-400 no-underline text-sm font-medium hover:text-white transition-colors duration-200"
            >
              Testimonials
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="text-gray-400 no-underline text-sm font-medium hover:text-white transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex gap-3 items-center">
          <a 
            href="/login" 
            className="px-4 py-2 rounded-md text-sm font-medium no-underline transition-all duration-200 cursor-pointer border-none inline-flex items-center gap-2 bg-transparent text-gray-400 hover:text-white"
          >
            Sign In
          </a>
          <a
            href="/signup"
            className="px-4 py-2 rounded-md text-sm font-medium no-underline transition-all duration-200 cursor-pointer border-none inline-flex items-center gap-2 bg-white text-black hover:bg-gray-100"
          >
            Get Started
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;