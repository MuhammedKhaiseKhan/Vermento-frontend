import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from '../../../components/admin/sidebar/sidebar'
import DashboardHeader from '../../../components/admin/dashboardHeader/dashboardHeader';

export const AdminDashboardPage: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full bg-black">
      <AdminSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 ml-64 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

