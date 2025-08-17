import React from "react";
import Header from "../../components/header/header";
import OtpVerificationForm from "../../components/otpVerificationForm/otpVerificationForm";
import Footer from "../../components/footer/footer2"; 

export const OtpVerificationPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#000] text-[#fff] font-[-apple-system,BlinkMacSystemFont,'Segoe_UI','Roboto','Oxygen','Ubuntu','Cantarell',sans-serif]">
      <Header />
      <OtpVerificationForm />
      <Footer />
    </div>
  );
};
