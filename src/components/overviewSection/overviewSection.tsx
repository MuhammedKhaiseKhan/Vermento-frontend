import React from "react";

const OverviewSection: React.FC = () => {
  return (
    <section id="overview" className="mb-10">
      <h2 className="text-xl font-semibold mb-6 text-white">Today's Overview</h2>
      <div className="flex-cards-container">
        <div className="card">
          <div className="card-content p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
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
                <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                <line x1="16" x2="16" y1="2" y2="6" />
                <line x1="8" x2="8" y1="2" y2="6" />
                <line x1="3" x2="21" y1="10" y2="10" />
                <path d="M12 16h.01" />
                <path d="M8 16h.01" />
                <path d="M16 16h.01" />
                <path d="M12 12h.01" />
                <path d="M8 12h.01" />
                <path d="M16 12h.01" />
              </svg>
            </div>
            <p className="text-gray-600 text-sm mb-1">Today's Bookings</p>
            <h3 className="text-3xl font-bold">2</h3>
          </div>
        </div>
        <div className="card">
          <div className="card-content p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
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
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <p className="text-gray-600 text-sm mb-1">Remaining Sessions</p>
            <h3 className="text-3xl font-bold">1</h3>
          </div>
        </div>
        <div className="card">
          <div className="card-content p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-4">
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <p className="text-gray-600 text-sm mb-1">Completed Sessions</p>
            <h3 className="text-3xl font-bold">15</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;