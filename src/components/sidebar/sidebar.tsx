import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64  border-r border-border-dark pt-6 px-4 flex flex-col">
      <NavLink to="/Dashboard" className="text-2xl font-bold text-text-primary mb-8 block">
        Ver<span className="text-text-tertiary">mento</span>
      </NavLink>
      <nav className="sidebar-nav flex-1">
        <div className="sidebar-nav-item mb-2">
          <NavLink
            to="/Dashboard/DashboardHome"
            className={({ isActive }) =>
              `sidebar-nav-link flex items-center py-3 px-4 text-sm font-medium rounded-md transition-colors ${
                isActive ? "bg-bg-light text-text-primary" : "text-text-secondary hover:bg-bg-light hover:text-text-primary"
              }`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-3 flex-shrink-0"
            >
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            <span>Home</span>
          </NavLink>
        </div>
        <div className="sidebar-nav-item mb-2">
          <NavLink
            to="/Dashboard/explore"
            className={({ isActive }) =>
              `sidebar-nav-link flex items-center py-3 px-4 text-sm font-medium rounded-md transition-colors ${
                isActive ? "bg-bg-light text-text-primary" : "text-text-secondary hover:bg-bg-light hover:text-text-primary"
              }`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-3 flex-shrink-0"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48 0a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14" />
            </svg>
            <span>Explore</span>
          </NavLink>
        </div>
        <div className="sidebar-nav-item mb-2">
          <NavLink
            to="/Dashboard/messages"
            className={({ isActive }) =>
              `sidebar-nav-link flex items-center py-3 px-4 text-sm font-medium rounded-md transition-colors ${
                isActive ? "bg-bg-light text-text-primary" : "text-text-secondary hover:bg-bg-light hover:text-text-primary"
              }`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-3 flex-shrink-0"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>Messages</span>
          </NavLink>
        </div>
        <div className="sidebar-nav-item mb-2">
          <NavLink
            to="/Dashboard/bookings"
            className={({ isActive }) =>
              `sidebar-nav-link flex items-center py-3 px-4 text-sm font-medium rounded-md transition-colors ${
                isActive ? "bg-bg-light text-text-primary" : "text-text-secondary hover:bg-bg-light hover:text-text-primary"
              }`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-3 flex-shrink-0"
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
            <span>Bookings</span>
          </NavLink>
        </div>
        <div className="sidebar-nav-item mb-2">
          <NavLink
            to="/Dashboard/wallet"
            className={({ isActive }) =>
              `sidebar-nav-link flex items-center py-3 px-4 text-sm font-medium rounded-md transition-colors ${
                isActive ? "bg-bg-light text-text-primary" : "text-text-secondary hover:bg-bg-light hover:text-text-primary"
              }`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-3 flex-shrink-0"
            >
              <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4H5a2 2 0 0 0 0 4h12a2 2 0 0 0 2-2v-3" />
              <path d="M10 12H7a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3" />
            </svg>
            <span>Wallet</span>
          </NavLink>
        </div>
      </nav>
      <div className="sidebar-footer p-4 border-t border-border-dark">
        <div className="sidebar-nav-item mb-2">
          <NavLink
            to="/Dashboard/profile"
            className={({ isActive }) =>
              `sidebar-nav-link flex items-center py-3 px-4 text-sm font-medium rounded-md transition-colors ${
                isActive ? "bg-bg-light text-text-primary" : "text-text-secondary hover:bg-bg-light hover:text-text-primary"
              }`
            }
          >
            <span className="w-6 h-6 rounded-full overflow-hidden mr-3">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="User Profile"
                className="w-full h-full object-cover"
              />
              <span className="avatar-fallback flex items-center justify-center w-full h-full bg-bg-light text-text-primary font-semibold">JD</span>
            </span>
            <span>John Doe</span>
          </NavLink>
        </div>
        <div className="sidebar-nav-item">
          <NavLink
            to="/logout"
            className={({ isActive }) =>
              `sidebar-nav-link flex items-center py-3 px-4 text-sm font-medium rounded-md transition-colors ${
                isActive ? "bg-bg-light text-text-primary" : "text-text-secondary hover:bg-bg-light hover:text-text-primary"
              }`
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-3 flex-shrink-0"
            >
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="17 16 22 12 17 8" />
              <line x1="22" x2="10" y1="12" y2="12" />
            </svg>
            <span>Logout</span>
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;