import React, { useState } from "react";
import GoogleButton from "./googleButton";
import FileInput from "./fileInput";
import QuoteSection from "./quoteSection";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  jobTitle?: string;
  category?: string;
  linkedinUrl?: string;
  skills?: string;
  bio?: string;
  supportingDocument?: File | null;
}

const SignupForm: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"user" | "mentor">("user");
  const [file, setFile] = useState<File | null>(null);

  const switchTab = (type: "user" | "mentor") => {
    setActiveTab(type);
  };

  const validatePasswords = (password: string, confirmPassword: string): boolean => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }
    if (password.length < 8) {
      alert("Password must be at least 8 characters long");
      return false;
    }
    return true;
  };

  const handleUserSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: FormData = Object.fromEntries(formData) as any;

    if (!validatePasswords(data.password, data.confirmPassword)) {
      return;
    }

    console.log("User signup data:", data);
    alert("User account created successfully! (This is a demo)");
  };

  const handleMentorSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: FormData = Object.fromEntries(formData) as any;

    if (!validatePasswords(data.password, data.confirmPassword)) {
      return;
    }

    if (data.bio && data.bio.length < 100) {
      alert("Bio must be at least 100 characters long");
      return;
    }

    console.log("Mentor signup data:", { ...data, supportingDocument: file });
    alert("Mentor account created successfully! (This is a demo)");
  };

  const signUpWithGoogle = () => {
    console.log("Google signup initiated");
    alert("Google signup would be integrated here");
  };

  return (
    <main className="flex-1 flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
      <div className="flex-1 flex items-center justify-center p-5 bg-black">
        <div className="signup-container bg-gray-900 border border-gray-700 rounded-2xl p-6 w-full max-w-[420px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] max-h-[calc(100vh-140px)] overflow-y-auto">
          {/* Header */}
          <div className="text-center mb-5">
            <h1 className="text-2xl font-extrabold text-white mb-1.5">Join Vermento</h1>
            <p className="text-gray-400 text-sm">Start your mentorship journey today</p>
          </div>

          {/* Tab Buttons */}
          <div className="flex bg-gray-800 rounded-lg p-0.5 mb-[18px]">
            <button
              className={`flex-1 py-2 px-3 border-none font-semibold rounded-md cursor-pointer transition-all duration-200 text-xs ${
                activeTab === "user" 
                  ? "bg-white text-black" 
                  : "bg-[#222] text-gray-400"
              }`}
              onClick={() => switchTab("user")}
            >
              Join as User
            </button>
            <button
              className={`flex-1 py-2 px-3 border-none font-semibold rounded-md cursor-pointer transition-all duration-200 text-xs ${
                activeTab === "mentor" 
                  ? "bg-white text-black" 
                  : "bg-[#222] text-gray-400"
              }`}
              onClick={() => switchTab("mentor")}
            >
              Join as Mentor
            </button>
          </div>

          {/* Google Sign Up */}
          <div className="mb-4">
            <GoogleButton onClick={signUpWithGoogle} />
          </div>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="flex-1 h-px bg-gray-700"></div>
            <span className="px-3 text-gray-400 text-[11px]">or</span>
            <div className="flex-1 h-px bg-gray-700"></div>
          </div>

          {/* User Form */}
          {activeTab === "user" && (
            <div className="block">
              <form onSubmit={handleUserSignup}>
                <div className="flex gap-2.5 mb-3 md:flex-row flex-col md:gap-2.5 gap-0">
                  <div className="flex-1 min-w-0">
                    <label htmlFor="userName" className="block mb-1 text-gray-300 text-xs font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="userName"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="w-full p-2.5 bg-[#222] border border-[#444] rounded-md text-white text-sm transition-all duration-200 focus:outline-none focus:border-white focus:bg-[#333] placeholder-gray-500 placeholder:text-xs"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label htmlFor="userEmail" className="block mb-1 text-gray-300 text-xs font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="userEmail"
                      name="email"
                      required
                      placeholder="Enter your email"
                      className="w-full p-2.5 bg-[#222] border border-[#444] rounded-md text-white text-sm transition-all duration-200 focus:outline-none focus:border-white focus:bg-[#333] placeholder-gray-500 placeholder:text-xs"
                    />
                  </div>
                </div>
                
                <div className="flex gap-2.5 mb-3 md:flex-row flex-col md:gap-2.5 gap-0">
                  <div className="flex-1 min-w-0">
                    <label htmlFor="userPassword" className="block mb-1 text-gray-300 text-xs font-medium">
                      Password
                    </label>
                    <input
                      type="password"
                      id="userPassword"
                      name="password"
                      required
                      placeholder="Create password"
                      minLength={8}
                      className="w-full p-2.5 bg-[#222] border border-[#444] rounded-md text-white text-sm transition-all duration-200 focus:outline-none focus:border-white focus:bg-[#333] placeholder-gray-500 placeholder:text-xs"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label htmlFor="userConfirmPassword" className="block mb-1 text-gray-300 text-xs font-medium">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="userConfirmPassword"
                      name="confirmPassword"
                      required
                      placeholder="Confirm password"
                      className="w-full p-2.5 bg-[#222] border border-[#444] rounded-md text-white text-sm transition-all duration-200 focus:outline-none focus:border-white focus:bg-[#333] placeholder-gray-500 placeholder:text-xs"
                    />
                  </div>
                </div>
                
                <div className="mt-4">
                  <button
                    type="submit"
                    className="w-full bg-white text-black border-none py-2.5 rounded-md text-sm font-semibold cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:-translate-y-px disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    Create User Account
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Mentor Form */}
          {activeTab === "mentor" && (
            <div className="block">
              <form onSubmit={handleMentorSignup}>
                <div className="flex gap-2.5 mb-3 md:flex-row flex-col md:gap-2.5 gap-0">
                  <div className="flex-1 min-w-0">
                    <label htmlFor="mentorName" className="block mb-1 text-gray-300 text-xs font-medium">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="mentorName"
                      name="name"
                      required
                      placeholder="Enter your name"
                      className="w-full p-2.5 bg-[#222] border border-[#444] rounded-md text-white text-sm transition-all duration-200 focus:outline-none focus:border-white focus:bg-[#333] placeholder-gray-500 placeholder:text-xs"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label htmlFor="mentorEmail" className="block mb-1 text-gray-300 text-xs font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="mentorEmail"
                      name="email"
                      required
                      placeholder="Enter your email"
                      className="w-full p-2.5 bg-[#222] border border-[#444] rounded-md text-white text-sm transition-all duration-200 focus:outline-none focus:border-white focus:bg-[#333] placeholder-gray-500 placeholder:text-xs"
                    />
                  </div>
                </div>
                
                <div className="flex gap-2.5 mb-3 md:flex-row flex-col md:gap-2.5 gap-0">
                  <div className="flex-1 min-w-0">
                    <label htmlFor="mentorPassword" className="block mb-1 text-gray-300 text-xs font-medium">
                      Password
                    </label>
                    <input
                      type="password"
                      id="mentorPassword"
                      name="password"
                      required
                      placeholder="Create password"
                      minLength={8}
                      className="w-full p-2.5 bg-[#222] border border-[#444] rounded-md text-white text-sm transition-all duration-200 focus:outline-none focus:border-white focus:bg-[#333] placeholder-gray-500 placeholder:text-xs"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label htmlFor="mentorConfirmPassword" className="block mb-1 text-gray-300 text-xs font-medium">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      id="mentorConfirmPassword"
                      name="confirmPassword"
                      required
                      placeholder="Confirm password"
                      className="w-full p-2.5 bg-[#222] border border-[#444] rounded-md text-white text-sm transition-all duration-200 focus:outline-none focus:border-white focus:bg-[#333] placeholder-gray-500 placeholder:text-xs"
                    />
                  </div>
                </div>
                
                <div className="flex gap-2.5 mb-3 md:flex-row flex-col md:gap-2.5 gap-0">
                  <div className="flex-1 min-w-0">
                    <label htmlFor="jobTitle" className="block mb-1 text-gray-300 text-xs font-medium">
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      required
                      placeholder="e.g. Senior Engineer"
                      className="w-full p-2.5 bg-[#222] border border-[#444] rounded-md text-white text-sm transition-all duration-200 focus:outline-none focus:border-white focus:bg-[#333] placeholder-gray-500 placeholder:text-xs"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <label htmlFor="category" className="block mb-1 text-gray-300 text-xs font-medium">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      required
                      className="w-full p-2.5 bg-[#222] border border-[#444] rounded-md text-white text-sm transition-all duration-200 focus:outline-none focus:border-white focus:bg-[#333]"
                    >
                      <option value="" className="bg-[#222] text-white">Select category</option>
                      <option value="business" className="bg-[#222] text-white">Business</option>
                      <option value="technology" className="bg-[#222] text-white">Technology</option>
                      <option value="design" className="bg-[#222] text-white">Design</option>
                      <option value="marketing" className="bg-[#222] text-white">Marketing</option>
                      <option value="finance" className="bg-[#222] text-white">Finance</option>
                      <option value="healthcare" className="bg-[#222] text-white">Healthcare</option>
                      <option value="education" className="bg-[#222] text-white">Education</option>
                      <option value="other" className="bg-[#222] text-white">Other</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="linkedinUrl" className="block mb-1 text-gray-300 text-xs font-medium">
                    LinkedIn URL
                  </label>
                  <input
                    type="url"
                    id="linkedinUrl"
                    name="linkedinUrl"
                    required
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="w-full p-2.5 bg-[#222] border border-[#444] rounded-md text-white text-sm transition-all duration-200 focus:outline-none focus:border-white focus:bg-[#333] placeholder-gray-500 placeholder:text-xs"
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="skills" className="block mb-1 text-gray-300 text-xs font-medium">
                    Skills
                  </label>
                  <input
                    type="text"
                    id="skills"
                    name="skills"
                    required
                    placeholder="JavaScript, Leadership, Strategy"
                    className="w-full p-2.5 bg-[#222] border border-[#444] rounded-md text-white text-sm transition-all duration-200 focus:outline-none focus:border-white focus:bg-[#333] placeholder-gray-500 placeholder:text-xs"
                  />
                  <div className="text-gray-500 text-[10px] mt-0.5">Separate skills with commas</div>
                </div>
                
                <div className="mb-3">
                  <label htmlFor="bio" className="block mb-1 text-gray-300 text-xs font-medium">
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    name="bio"
                    required
                    placeholder="Brief description of your experience and expertise..."
                    className="w-full p-2.5 bg-[#222] border border-[#444] rounded-md text-white text-sm transition-all duration-200 focus:outline-none focus:border-white focus:bg-[#333] placeholder-gray-500 placeholder:text-xs resize-y min-h-[60px]"
                  ></textarea>
                  <div className="text-gray-500 text-[10px] mt-0.5">Minimum 100 characters</div>
                </div>
                
                <FileInput file={file} setFile={setFile} />
                
                <div className="mt-4">
                  <button
                    type="submit"
                    className="w-full bg-white text-black border-none py-2.5 rounded-md text-sm font-semibold cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:-translate-y-px disabled:bg-gray-700 disabled:text-gray-500 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    Create Mentor Account
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Login Link */}
          <div className="text-center mt-4 pt-4 border-t border-gray-700">
            <p className="text-gray-400 text-xs">
              Already have an account?{" "}
              <a href="/login" className="text-white font-semibold no-underline hover:underline">
                Sign in here
              </a>
            </p>
          </div>
        </div>
      </div>
      
      <QuoteSection />
    </main>
  );
};

export default SignupForm;