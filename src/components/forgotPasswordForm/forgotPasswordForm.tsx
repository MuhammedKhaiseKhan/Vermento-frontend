import React, { useState, useEffect, useRef } from "react";

interface ForgotPasswordFormProps {
  email?: string;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ email = "" }) => {
  const [currentSection, setCurrentSection] = useState<"email" | "otp" | "resetPassword">("email");
  const [currentEmail, setCurrentEmail] = useState(email);
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (currentSection === "otp") {
      startTimer();
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentSection]);

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setTimeLeft(300);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (timerRef.current) {
            clearInterval(timerRef.current);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    // Simulate API call
    setTimeout(() => {
      setSuccessMessage("Verification code sent!");
      setCurrentSection("otp");
      setIsSubmitting(false);
      setTimeout(() => setSuccessMessage(""), 3000);
    }, 1500);
  };

  const handleOtpInput = (value: string, index: number) => {
    const numericValue = value.replace(/[^0-9]/g, "");
    const newOtp = [...otp];
    newOtp[index] = numericValue;
    setOtp(newOtp);

    if (numericValue && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
    setErrorMessage("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");
    if (pastedData.length === 6 && /^\d{6}$/.test(pastedData)) {
      const newOtp = pastedData.split("");
      setOtp(newOtp);
      inputRefs.current[5]?.focus();
    }
  };

  const isAllInputsFilled = (): boolean => {
    return otp.every((digit) => digit !== "");
  };

  const verifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (isVerifying || !isAllInputsFilled()) return;

    setIsVerifying(true);
    setErrorMessage("");
    setSuccessMessage("");

    // Simulate API call
    setTimeout(() => {
      const otpString = otp.join("");
      if (otpString === "123456") {
        setSuccessMessage("Code verified successfully! Redirecting...");
        setTimeout(() => {
          setCurrentSection("resetPassword");
          setIsVerifying(false);
        }, 2000);
      } else {
        setErrorMessage("Invalid verification code. Please try again.");
        setOtp(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
        setTimeout(() => setErrorMessage(""), 3000);
        setIsVerifying(false);
      }
    }, 1500);
  };

  const resendOTP = () => {
    if (timeLeft > 0) return;
    setOtp(["", "", "", "", "", ""]);
    setErrorMessage("");
    setSuccessMessage("New verification code sent!");
    startTimer();
    setTimeout(() => setSuccessMessage(""), 3000);
    inputRefs.current[0]?.focus();
  };

  const resetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (newPassword !== confirmNewPassword) {
      setErrorMessage("Passwords do not match!");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }
    if (newPassword.length < 8) {
      setErrorMessage("Password must be at least 8 characters long!");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    // Simulate API call
    setTimeout(() => {
      setSuccessMessage("Password has been reset successfully! Redirecting...");
      setTimeout(() => {
        window.location.href = "/login";
      }, 1500);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <main className="flex-1 flex items-center justify-center p-5 sm:p-10 bg-[linear-gradient(135deg,#000_0%,#111_50%,#000_100%)]">
      <div className="bg-[#111] border border-[#333] rounded-2xl p-10 w-full max-w-[450px] text-center shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
        {/* Email Section */}
        {currentSection === "email" && (
          <div>
            <div className="mb-8">
              <h1 className="text-[28px] font-extrabold text-[#fff] mb-3">Forgot Your Password?</h1>
              <p className="text-[#888] text-base leading-relaxed mb-2">
                Enter your email address below and we'll send you a verification code to reset your password.
              </p>
            </div>
            {errorMessage && (
              <div className="bg-[rgba(255,68,68,0.1)] border border-[#ff4444] text-[#ff4444] p-3 rounded-lg text-sm mb-4">
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div className="bg-[rgba(34,197,94,0.1)] border border-[#22c55e] text-[#22c55e] p-3 rounded-lg text-sm mb-4">
                {successMessage}
              </div>
            )}
            <form onSubmit={handleEmailSubmit}>
              <div className="mb-4 text-left">
                <label htmlFor="email" className="block mb-2 text-[#ccc] text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={currentEmail}
                  onChange={(e) => setCurrentEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="w-full p-3 bg-[#222] border border-[#444] rounded-lg text-[#fff] text-[15px] focus:outline-none focus:border-[#fff] focus:bg-[#333] placeholder:text-[#666] placeholder:text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#fff] text-[#000] border-none py-4 rounded-lg text-base font-semibold cursor-pointer transition-all duration-200 hover:bg-[#f0f0f0] hover:-translate-y-px disabled:bg-[#333] disabled:text-[#666] disabled:cursor-not-allowed disabled:transform-none mb-4"
              >
                {isSubmitting ? "Sending..." : "Send Verification Code"}
              </button>
            </form>
            <div className="mt-6 pt-6 border-t border-[#333]">
              <a
                href="/login"
                className="text-[#888] text-sm transition-colors duration-200 hover:text-[#fff] hover:underline"
              >
                ← Back to Sign In
              </a>
            </div>
          </div>
        )}

        {/* OTP Section */}
        {currentSection === "otp" && (
          <div>
            <div className="mb-8">
              <h1 className="text-[28px] font-extrabold text-[#fff] mb-3">Verify Your Email</h1>
              <p className="text-[#888] text-base leading-relaxed mb-2">
                We've sent a 6-digit verification code to
              </p>
              <div className="text-[#fff] font-semibold text-base">{currentEmail}</div>
            </div>
            {errorMessage && (
              <div className="bg-[rgba(255,68,68,0.1)] border border-[#ff4444] text-[#ff4444] p-3 rounded-lg text-sm mb-4">
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div className="bg-[rgba(34,197,94,0.1)] border border-[#22c55e] text-[#22c55e] p-3 rounded-lg text-sm mb-4">
                {successMessage}
              </div>
            )}
            <form onSubmit={verifyOTP} className="mb-8">
              <div className="flex gap-3 justify-center mb-6" onPaste={handlePaste}>
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpInput(e.target.value, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    className={`w-[50px] h-[50px] bg-[#222] border-2 border-[#444] rounded-lg text-[#fff] text-xl font-semibold text-center transition-all duration-200 focus:outline-none focus:border-[#fff] focus:bg-[#333] ${
                      digit ? "border-[#fff] bg-[#333]" : ""
                    } ${errorMessage ? "border-[#ff4444] bg-[rgba(255,68,68,0.1)]" : ""}`}
                  />
                ))}
              </div>
              <button
                type="submit"
                disabled={!isAllInputsFilled() || isVerifying}
                className="w-full bg-[#fff] text-[#000] border-none py-4 rounded-lg text-base font-semibold cursor-pointer transition-all duration-200 hover:bg-[#f0f0f0] hover:-translate-y-px disabled:bg-[#333] disabled:text-[#666] disabled:cursor-not-allowed disabled:transform-none mb-4"
              >
                {isVerifying ? "Verifying..." : "Verify Code"}
              </button>
            </form>
            <div className="mb-6">
              <div className={`text-lg font-semibold mb-2 ${timeLeft <= 60 ? "text-[#ff4444]" : "text-[#fff]"}`}>
                {formatTime(timeLeft)}
              </div>
              <div className="text-sm text-[#888]">Time remaining</div>
            </div>
            <div className="pt-6 border-t border-[#333]">
              <div className="text-[#888] text-sm mb-4">Didn't receive the code?</div>
              <button
                onClick={resendOTP}
                disabled={timeLeft > 0}
                className="bg-transparent text-[#fff] border border-[#444] py-3 px-6 rounded-lg text-sm font-semibold cursor-pointer transition-all duration-200 hover:border-[#fff] hover:bg-[rgba(255,255,255,0.1)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Resend Code
              </button>
            </div>
            <div className="mt-6 pt-6 border-t border-[#333]">
              <a
                href="/login"
                className="text-[#888] text-sm transition-colors duration-200 hover:text-[#fff] hover:underline"
              >
                ← Back to Sign In
              </a>
            </div>
          </div>
        )}

        {/* Reset Password Section */}
        {currentSection === "resetPassword" && (
          <div>
            <div className="mb-8">
              <h1 className="text-[28px] font-extrabold text-[#fff] mb-3">Set New Password</h1>
              <p className="text-[#888] text-base leading-relaxed mb-2">Enter your new password below.</p>
            </div>
            {errorMessage && (
              <div className="bg-[rgba(255,68,68,0.1)] border border-[#ff4444] text-[#ff4444] p-3 rounded-lg text-sm mb-4">
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div className="bg-[rgba(34,197,94,0.1)] border border-[#22c55e] text-[#22c55e] p-3 rounded-lg text-sm mb-4">
                {successMessage}
              </div>
            )}
            <form onSubmit={resetPassword}>
              <div className="mb-4 text-left">
                <label htmlFor="newPassword" className="block mb-2 text-[#ccc] text-sm font-medium">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                  minLength={8}
                  placeholder="Enter new password"
                  className="w-full p-3 bg-[#222] border border-[#444] rounded-lg text-[#fff] text-[15px] focus:outline-none focus:border-[#fff] focus:bg-[#333] placeholder:text-[#666] placeholder:text-sm"
                />
              </div>
              <div className="mb-4 text-left">
                <label htmlFor="confirmNewPassword" className="block mb-2 text-[#ccc] text-sm font-medium">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  id="confirmNewPassword"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                  required
                  placeholder="Confirm new password"
                  className="w-full p-3 bg-[#222] border border-[#444] rounded-lg text-[#fff] text-[15px] focus:outline-none focus:border-[#fff] focus:bg-[#333] placeholder:text-[#666] placeholder:text-sm"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#fff] text-[#000] border-none py-4 rounded-lg text-base font-semibold cursor-pointer transition-all duration-200 hover:bg-[#f0f0f0] hover:-translate-y-px disabled:bg-[#333] disabled:text-[#666] disabled:cursor-not-allowed disabled:transform-none mb-4"
              >
                {isSubmitting ? "Resetting..." : "Reset Password"}
              </button>
            </form>
            <div className="mt-6 pt-6 border-t border-[#333]">
              <a
                href="/login"
                className="text-[#888] text-sm transition-colors duration-200 hover:text-[#fff] hover:underline"
              >
                ← Back to Sign In
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ForgotPasswordForm;