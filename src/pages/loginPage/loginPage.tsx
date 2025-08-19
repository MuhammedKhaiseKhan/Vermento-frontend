import React from "react";
import Header from "../../components/header/header";
import LoginForm from "../../components/loginForm/loginForm";
import Footer from "../../components/footer/footer2";

export const LoginPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white font-sans">
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
};