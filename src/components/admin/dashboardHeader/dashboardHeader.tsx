import React from 'react';

const DashboardHeader: React.FC = () => {
  return (
    <header className="border-b border-[#333] bg-[#111] p-6 flex items-center justify-between sticky top-0 z-10 ml-64">
      <div className="relative w-64">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#9ca3af]"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="text"
          placeholder="Search users, mentors, bookings..."
          className="input w-full h-10 rounded-md border border-[#444] bg-[#222] pl-9 text-white text-sm focus-visible:outline-none focus-visible:border-white focus-visible:bg-[#333] focus-visible:ring-2 focus-visible:ring-white/10 placeholder:text-[#666]"
        />
      </div>
      <div className="nav-buttons flex items-center gap-3">
        <a href="#" className="btn-ghost flex items-center p-2 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-white"
          >
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.36 14H13.64a2 2 0 0 1 2 1.73 2 2 0 0 0 2 1.73H6.36a2 2 0 0 0 2 1.73 2 2 0 0 1 2-1.73Z" />
          </svg>
        </a>
        <span className="avatar h-9 w-9">
          <img
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt="Admin Profile"
            className="avatar-image"
          />
          <span className="avatar-fallback bg-[#333] text-[#eee] font-semibold">AS</span>
        </span>
        <span className="font-medium text-white hidden md:block">Admin Smith</span>
      </div>
    </header>
  );
};

export default DashboardHeader;