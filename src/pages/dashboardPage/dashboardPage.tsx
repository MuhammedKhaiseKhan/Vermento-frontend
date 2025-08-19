import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
import DashboardHeader from "../../components/dashboardHeader/dashboardHeader";

export const DashboardPage: React.FC = () => {
  
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <DashboardHeader />
        <main className="main-content">
          <Outlet/>
        </main>
      </div>
    </div>
  );
};

