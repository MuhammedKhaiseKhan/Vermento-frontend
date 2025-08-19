import React from "react";
import Header from "../../components/header/header";
import ChangePasswordForm from "../../components/changePasswordForm/changePasswordForm";
import Footer from "../../components/footer/footer2";

export const ChangePasswordPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#000] text-[#fff] font-[-apple-system,BlinkMacSystemFont,'Segoe_UI','Roboto','Oxygen','Ubuntu','Cantarell',sans-serif]">
      <Header />
      <ChangePasswordForm />
      <Footer />
    </div>
  );
};