import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111] border-t border-[#333] pt-[60px] pb-[30px]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div className="footer-brand">
          <h3 className="text-lg font-semibold mb-3">
            Ver<span className="text-gray-500">mento</span>
          </h3>
          <p className="text-gray-400 text-sm mb-5 leading-relaxed">
            Connecting professionals with expert mentors for career growth and success.
          </p>
          <div className="flex gap-2">
            <a
              href="#"
              className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center text-xs font-semibold hover:bg-gray-100 transition-colors"
            >
              f
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center text-xs font-semibold hover:bg-gray-100 transition-colors"
            >
              t
            </a>
            <a
              href="#"
              className="w-9 h-9 bg-white text-black rounded-full flex items-center justify-center text-xs font-semibold hover:bg-gray-100 transition-colors"
            >
              in
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Platform</h3>
          <ul className="list-none">
            <li className="mb-1.5">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Find a Mentor
              </a>
            </li>
            <li className="mb-1.5">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Become a Mentor
              </a>
            </li>
            <li className="mb-1.5">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                How it Works
              </a>
            </li>
            <li className="mb-1.5">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="list-none">
            <li className="mb-1.5">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Help Center
              </a>
            </li>
            <li className="mb-1.5">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Community
              </a>
            </li>
            <li className="mb-1.5">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
            <li className="mb-1.5">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="list-none">
            <li className="mb-1.5">
              <a href="mailto:hello@vermento.com" className="text-gray-400 text-sm hover:text-white transition-colors">
                hello@vermento.com
              </a>
            </li>
            <li className="mb-1.5">
              <a href="tel:+15551234567" className="text-gray-400 text-sm hover:text-white transition-colors">
                +1 (555) 123-4567
              </a>
            </li>
            <li className="mb-1.5">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                San Francisco, CA
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 border-t border-gray-700 pt-5 text-center text-gray-400 text-sm">
        <p>&copy; 2024 Vermento. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;