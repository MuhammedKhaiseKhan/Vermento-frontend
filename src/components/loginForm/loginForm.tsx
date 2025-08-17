import React from "react";
import GoogleButton from "./googleButton";

interface FormData {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: FormData = Object.fromEntries(formData) as any;

    console.log("Login attempt:", data);
    alert("Login functionality would be integrated here. (This is a demo)");
    // In a real application, you would send this data to your backend for authentication.
    // If successful, redirect to a dashboard or home page.
    // window.location.href = '/dashboard';
  };

  const signInWithGoogle = () => {
    console.log("Google sign-in initiated");
    alert("Google sign-in would be integrated here");
  };

  return (
    <main className="flex-1 flex items-center justify-center py-10 px-5 bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="bg-[#111] border border-gray-700 rounded-2xl p-10 w-full max-w-[400px] text-center shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[28px] font-extrabold text-white mb-3">Welcome Back</h1>
          <p className="text-gray-400 text-base leading-relaxed">Sign in to your Vermento account</p>
        </div>

        {/* Google Sign In */}
        <div className="mb-6">
          <GoogleButton onClick={signInWithGoogle} />
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-700"></div>
          <span className="px-3 text-gray-400 text-xs">or</span>
          <div className="flex-1 h-px bg-gray-700"></div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          <div className="mb-4 text-left">
            <label htmlFor="email" className="block mb-2 text-gray-300 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full p-3 bg-[#222] border border-gray-600 rounded-lg text-white text-[15px] transition-all duration-200 focus:outline-none focus:border-white focus:bg-[#333] placeholder-gray-500 placeholder:text-sm"
            />
          </div>
          
          <div className="mb-4 text-left">
            <label htmlFor="password" className="block mb-2 text-gray-300 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Enter your password"
              className="w-full p-3 bg-[#222] border border-gray-600 rounded-lg text-white text-[15px] transition-all duration-200 focus:outline-none focus:border-white focus:bg-[#333] placeholder-gray-500 placeholder:text-sm"
            />
          </div>
          
          <div className="text-right mb-6">
            <a href="/forgotPassword" className="text-gray-400 text-sm transition-colors duration-200 hover:text-white hover:underline">
              Forgot Password?
            </a>
          </div>
          
          <button
            type="submit"
            className="w-full bg-white text-black border-none py-4 rounded-lg text-base font-semibold cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:-translate-y-px disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed disabled:transform-none"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p className="text-gray-400 text-sm">
            Don't have an account?{" "}
            <a href="/signup" className="text-white font-semibold no-underline hover:underline">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;