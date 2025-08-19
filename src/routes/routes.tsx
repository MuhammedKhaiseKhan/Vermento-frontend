import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import { Test } from "../pages/home/test";
import { SignupPage } from "../pages/signupPage/signupPage";
import { LoginPage } from "../pages/loginPage/loginPage";
import { OtpVerificationPage } from "../pages/otpVerificationPage/otpVerificationPage";
import { ForgotPasswordPage } from "../pages/forgotPasswordPage/forgotPasswordPage";
import { ChangePasswordPage } from "../pages/changePasswordPage/changePasswordPage";
import { DashboardPage } from "../pages/dashboardPage/dashboardPage";
import { UserProfilePage } from "../pages/userProfilePage/userProfilePage";
import { ExplorePage } from "../pages/explorePage/explorePage";
import { BookingsPage } from "../pages/bookingsPage/bookingsPage";
import { MessagesPage } from "../pages/messagePage/messagePage";
import { WalletPage } from "../pages/walletPage/walletPage";
import { DashboardHome } from "../pages/dashboardHome/dashboardHome";

// Mentor
import { MentorDashboardPage } from "../pages/mentor/dashboardPage/MentorDashboardPage";
import { MentorDashboardHome } from "../pages/mentor/mentorDashboardHome/dashboardHome";
import { ReviewsRatings } from "../pages/mentor/reviews&Ratings/reviews&Ratings";
import { Bookings } from "../pages/mentor/bookings/bookings";

//Admin
import { AdminDashboardPage } from "../pages/admin/adminDashboardPage/adminDashboardPage";
import { AdminDashboardHome } from "../pages/admin/adminDashboardHome/adminDashboardHome";
import { UserManagement } from "../pages/admin/userManagement/userManagement";
import { MentorManagement } from "../pages/admin/mentorManagement/mentorManagement";
import { ViewManageBookings } from "../pages/admin/viewManageBookings/viewManageBookings";
import { FinancialOverview } from "../pages/admin/financialOverview/FinancialOverview";


const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/otp-verification" element={<OtpVerificationPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/change-password" element={<ChangePasswordPage />} />

      {/* User Dashboard Routes */}
      <Route path="/Dashboard" element ={<DashboardPage/>}>
        <Route path="DashboardHome" element ={<DashboardHome/>} />
        <Route path="profile" element={<UserProfilePage />} />
        <Route path="explore" element={<ExplorePage />} />
        <Route path="bookings" element={<BookingsPage />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="wallet" element={<WalletPage />} />
      </Route> 

      {/* Mentor Dashboard Routes */}
      <Route path="/mentor-Dashboard" element ={<MentorDashboardPage/>}>
        <Route path="Mentor-DashboardHome" element ={<MentorDashboardHome/>} />
        <Route path="profile" element={<UserProfilePage />} />
        <Route path="ReviewsRatings" element={<ReviewsRatings />} />
        <Route path="mentor-bookings" element={<Bookings />} />
        <Route path="messages" element={<MessagesPage />} />
        <Route path="wallet" element={<WalletPage />} />
      </Route> 

      {/* Admin Dashboard Routes */}
      
      <Route path="/admin-Dashboard" element={<AdminDashboardPage />}>
        <Route path="Admin-DashboardHome" element={<AdminDashboardHome />} />
        <Route path="user-management" element={<UserManagement />} />
        <Route path="mentor-management" element={<MentorManagement />} />
        <Route path="view-manage-bookings" element={<ViewManageBookings />} />
        <Route path="financial-overview" element={<FinancialOverview />} />
      </Route>

    </Routes>
  );
};

export default AppRoutes;