import React from "react";

const DashboardHeader: React.FC = () => {
  return (
    <header className="header">
      <div className="relative w-64">
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
          className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input type="text" placeholder="Search mentors, topics..." className="input pl-9" />
      </div>
      <div className="nav-buttons">
        <a href="#" className="btn-ghost">
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
          <img src="/placeholder.svg?height=36&width=36" alt="User Profile" className="avatar-image" />
          <span className="avatar-fallback">JD</span>
        </span>
        <span className="font-medium text-white hidden md:block">John Doe</span>
      </div>
    </header>
  );
};

export default DashboardHeader;
