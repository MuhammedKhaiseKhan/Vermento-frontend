import React from 'react';
import { Outlet } from 'react-router-dom';
import MentorSidebar from '../../../components/mentor/sidebar/sidebar';
import DashboardHeader from '../../../components/mentor/dashboardHeader/dashboardHeader';

export const MentorDashboardPage: React.FC = () => {
  return (
    <div className="flex min-h-screen w-full bg-black">
      <MentorSidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <main className="flex-1 ml-64 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};