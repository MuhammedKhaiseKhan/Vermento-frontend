import React, { useState, useEffect, useRef } from "react";

interface OtpVerificationFormProps {
  email?: string;
}

const OtpVerificationForm: React.FC<OtpVerificationFormProps> = ({ 
  email = "john.doe@example.com" 
}) => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [isVerifying, setIsVerifying] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Invalid verification code. Please try again.");
  const [successMessage, setSuccessMessage] = useState("Email verified successfully! Redirecting...");
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startTimer();
    // Focus on first input
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    
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
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleOtpInput = (value: string, index: number) => {
    // Only allow numbers
    const numericValue = value.replace(/[^0-9]/g, '');
    
    const newOtp = [...otp];
    newOtp[index] = numericValue;
    setOtp(newOtp);

    // Move to next input if value is entered
    if (numericValue && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Clear error state
    setShowError(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Handle backspace
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = '';
      setOtp(newOtp);
      inputRefs.current[index - 1]?.focus();
    }
    
    // Handle arrow keys
    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
    if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text');
    
    if (pastedData.length === 6 && /^\d{6}$/.test(pastedData)) {
      const newOtp = pastedData.split('');
      setOtp(newOtp);
      
      // Focus on last input
      inputRefs.current[5]?.focus();
    }
  };

  const isAllInputsFilled = (): boolean => {
    return otp.every(digit => digit !== '');
  };

  const verifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isVerifying || !isAllInputsFilled()) return;
    
    setIsVerifying(true);
    setShowError(false);
    setShowSuccess(false);
    
    // Simulate API call
    setTimeout(() => {
      const otpString = otp.join('');
      
      // For demo purposes, accept '123456' as valid OTP
      if (otpString === '123456') {
        setShowSuccess(true);
        setTimeout(() => {
          // Redirect to login page
          window.location.href = '/login';
        }, 2000);
      } else {
        setShowError(true);
        setErrorState();
      }
      
      setIsVerifying(false);
    }, 1500);
  };

  const setErrorState = () => {
    setOtp(["", "", "", "", "", ""]);
    
    // Remove error state after 3 seconds
    setTimeout(() => {
      setShowError(false);
    }, 3000);
    
    // Focus on first input
    setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 100);
  };

  const resendOTP = () => {
    // Clear inputs
    setOtp(["", "", "", "", "", ""]);
    setShowError(false);
    setShowSuccess(false);
    
    // Reset timer
    setTimeLeft(300);
    startTimer();
    
    // Show success message briefly
    setSuccessMessage("New verification code sent!");
    setShowSuccess(true);
    
    setTimeout(() => {
      setShowSuccess(false);
      setSuccessMessage("Email verified successfully! Redirecting...");
    }, 3000);
    
    // Focus on first input
    setTimeout(() => {
      inputRefs.current[0]?.focus();
    }, 100);
  };

  return (
    <main className="flex-1 flex items-center justify-center p-5 sm:p-10 bg-[linear-gradient(135deg,#000_0%,#111_50%,#000_100%)]">
      <div className="bg-[#111] border border-[#333] rounded-2xl p-10 w-full max-w-[450px] text-center shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
        {/* Header */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-[linear-gradient(135deg,#333_0%,#555_100%)] rounded-full flex items-center justify-center mx-auto mb-6 text-[32px] animate-[pulse_2s_ease-in-out_infinite]">
            📧
          </div>
          <h1 className="text-[28px] font-extrabold text-[#fff] mb-3">Verify Your Email</h1>
          <p className="text-[#888] text-base leading-relaxed mb-2">
            We've sent a 6-digit verification code to
          </p>
          <div className="text-[#fff] font-semibold text-base">{email}</div>
        </div>

        {/* Error/Success Messages */}
        {showError && (
          <div className="bg-[rgba(255,68,68,0.1)] border border-[#ff4444] text-[#ff4444] p-3 rounded-lg text-sm mb-4">
            {errorMessage}
          </div>
        )}
        
        {showSuccess && (
          <div className="bg-[rgba(34,197,94,0.1)] border border-[#22c55e] text-[#22c55e] p-3 rounded-lg text-sm mb-4">
            {successMessage}
          </div>
        )}

        {/* OTP Form */}
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
                  digit ? 'border-[#fff] bg-[#333]' : ''
                } ${showError ? 'border-[#ff4444] bg-[rgba(255,68,68,0.1)]' : ''}`}
              />
            ))}
          </div>
          
          <button
            type="submit"
            disabled={!isAllInputsFilled() || isVerifying}
            className="w-full bg-[#fff] text-[#000] border-none py-4 rounded-lg text-base font-semibold cursor-pointer transition-all duration-200 hover:bg-[#f0f0f0] hover:-translate-y-px disabled:bg-[#333] disabled:text-[#666] disabled:cursor-not-allowed disabled:transform-none mb-4"
          >
            {isVerifying ? 'Verifying...' : 'Verify Email'}
          </button>
        </form>

        {/* Timer Section */}
        <div className="mb-6">
          <div className={`text-lg font-semibold mb-2 ${timeLeft <= 60 ? 'text-[#ff4444]' : 'text-[#fff]'}`}>
            {formatTime(timeLeft)}
          </div>
          <div className="text-sm text-[#888]">Time remaining</div>
        </div>

        {/* Resend Section */}
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

        {/* Back Link */}
        <div className="mt-6 pt-6 border-t border-[#333]">
          <a 
            href="/signup" 
            className="text-[#888] text-sm transition-colors duration-200 hover:text-[#fff] hover:underline"
          >
            ← Back to Sign Up
          </a>
        </div>
      </div>
    </main>
  );
};

export default OtpVerificationForm;