import React, { useState } from "react";

const ChangePasswordForm: React.FC = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: "error" | "success" } | null>(null);

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (newPassword !== confirmNewPassword) {
      setMessage({ text: "New passwords do not match!", type: "error" });
      setTimeout(() => setMessage(null), 3000);
      return;
    }
    if (newPassword.length < 8) {
      setMessage({ text: "New password must be at least 8 characters long!", type: "error" });
      setTimeout(() => setMessage(null), 3000);
      return;
    }

    setIsSubmitting(true);
    setMessage(null);

    // Simulate API call
    setTimeout(() => {
      setMessage({ text: "Password changed successfully!", type: "success" });
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <main className="flex-1 flex items-center justify-center p-5 sm:p-10 bg-[linear-gradient(135deg,#000_0%,#111_50%,#000_100%)]">
      <div className="bg-[#111] border border-[#333] rounded-2xl p-10 w-full max-w-[450px] text-center shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
        <div className="mb-8">
          <h1 className="text-[28px] font-extrabold text-[#fff] mb-3">Change Your Password</h1>
          <p className="text-[#888] text-base leading-relaxed mb-2">Update your account password below.</p>
        </div>

        {message && (
          <div
            className={`bg-[rgba(255,68,68,0.1)] border border-[#ff4444] text-[#ff4444] p-3 rounded-lg text-sm mb-4 ${
              message.type === "success" ? "bg-[rgba(34,197,94,0.1)] border-[#22c55e] text-[#22c55e]" : ""
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleChangePassword}>
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
            {isSubmitting ? "Changing..." : "Change Password"}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-[#333]">
          <a
            href="/login"
            className="text-[#888] text-sm transition-colors duration-200 hover:text-[#fff] hover:underline"
          >
            ← Back to Login
          </a>
        </div>
      </div>
    </main>
  );
};

export default ChangePasswordForm;