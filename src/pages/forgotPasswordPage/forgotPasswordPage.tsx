import React from "react";
import Header from "../../components/header/header";
import ForgotPasswordForm from "../../components/forgotPasswordForm/forgotPasswordForm";
import Footer from "../../components/footer/footer2";

export const ForgotPasswordPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#000] text-[#fff] font-[-apple-system,BlinkMacSystemFont,'Segoe_UI','Roboto','Oxygen','Ubuntu','Cantarell',sans-serif]">
      <Header />
      <ForgotPasswordForm />
      <Footer />
    </div>
  );
};