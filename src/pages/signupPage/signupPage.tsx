import React from "react";
import Header from "../../components/header/header";
import SignupForm from  "../../components/signupForm/signupForm";
// import Footer from "../../components/footer/footer";
import Footer from "../../components/footer/footer2";

export const SignupPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <SignupForm />
      <Footer />
    </div>
  );
};