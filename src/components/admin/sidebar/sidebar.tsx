import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-[#111] border-r border-[#333] pt-6 flex flex-col items-start z-20">
      <NavLink to="/admin-Dashboard/Admin-DashboardHome" className="sidebar-logo text-xl font-bold text-white mb-8 pl-4">
        Ver<span className="text-[#888]">mento</span>
      </NavLink>
      <nav className="sidebar-nav w-full flex-grow">
        <ul className="list-none p-0 m-0">
          <li className="sidebar-nav-item mb-2">
            <NavLink
              to="/admin-Dashboard/Admin-DashboardHome"
              className={({ isActive }) =>
                `sidebar-nav-link flex items-center p-3 text-[#aaa] text-sm font-medium rounded-md transition-colors justify-start ${
                  isActive ? 'bg-[#222] text-white' : 'hover:bg-[#222] hover:text-white'
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
                className="mr-3 flex-shrink-0 text-[#aaa]"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li className="sidebar-nav-item mb-2">
            <NavLink
              to="/admin-Dashboard/user-management"
              className={({ isActive }) =>
                `sidebar-nav-link flex items-center p-3 text-[#aaa] text-sm font-medium rounded-md transition-colors justify-start ${
                  isActive ? 'bg-[#222] text-white' : 'hover:bg-[#222] hover:text-white'
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
                className="mr-3 flex-shrink-0 text-[#aaa]"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span>User Management</span>
            </NavLink>
          </li>
          <li className="sidebar-nav-item mb-2">
            <NavLink
              to="/admin-Dashboard/mentor-management"
              className={({ isActive }) =>
                `sidebar-nav-link flex items-center p-3 text-[#aaa] text-sm font-medium rounded-md transition-colors justify-start ${
                  isActive ? 'bg-[#222] text-white' : 'hover:bg-[#222] hover:text-white'
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
                className="mr-3 flex-shrink-0 text-[#aaa]"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
                <path d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
              <span>Mentor Management</span>
            </NavLink>
          </li>
          <li className="sidebar-nav-item mb-2">
            <NavLink
              to="/admin-Dashboard/view-manage-bookings"
              className={({ isActive }) =>
                `sidebar-nav-link flex items-center p-3 text-[#aaa] text-sm font-medium rounded-md transition-colors justify-start ${
                  isActive ? 'bg-[#222] text-white' : 'hover:bg-[#222] hover:text-white'
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
                className="mr-3 flex-shrink-0 text-[#aaa]"
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
              <span>View & Manage Bookings</span>
            </NavLink>
          </li>
          <li className="sidebar-nav-item mb-2">
            <NavLink
              to="/admin-Dashboard/financial-overview"
              className={({ isActive }) =>
                `sidebar-nav-link flex items-center p-3 text-[#aaa] text-sm font-medium rounded-md transition-colors justify-start ${
                  isActive ? 'bg-[#222] text-white' : 'hover:bg-[#222] hover:text-white'
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
                className="mr-3 flex-shrink-0 text-[#aaa]"
              >
                <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h12a2 2 0 0 1 0 4H5a2 2 0 0 0 0 4h12a2 2 0 0 0 2-2v-3" />
                <path d="M10 12H7a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3" />
              </svg>
              <span>Financial Overview</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer w-full p-4 border-t border-[#333]">
        <div className="sidebar-nav-item mb-2">
          <NavLink
            to="/admin-Dashboard/profile"
            className="sidebar-nav-link flex items-center p-3 text-[#aaa] text-sm font-medium rounded-md transition-colors justify-start hover:bg-[#222] hover:text-white"
          >
            <span className="avatar w-6 h-6 mr-3">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Admin Profile"
                className="avatar-image"
              />
              <span className="avatar-fallback bg-[#333] text-[#eee] font-semibold">AS</span>
            </span>
            <span>Admin Smith</span>
          </NavLink>
        </div>
        <div className="sidebar-nav-item">
          <NavLink
            to="/logout"
            className="sidebar-nav-link flex items-center p-3 text-[#aaa] text-sm font-medium rounded-md transition-colors justify-start hover:bg-[#222] hover:text-white"
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
              className="mr-3 flex-shrink-0 text-[#aaa]"
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

export default AdminSidebar;