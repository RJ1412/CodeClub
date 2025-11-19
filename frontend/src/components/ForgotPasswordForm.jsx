import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { z } from "zod";
import { useAuthStore } from "../store/useAuthStore";

const emailSchema = z.string().email("Enter a valid email");
const resetSchema = z.object({
  email: z.string().email(),
  otp: z.string().length(6, "OTP must be 6 digits"),
  newPassword: z.string().min(6, "Password must be at least 6 characters"),
});

export default function ForgotPasswordForm({ onBack }) {
  const { forgotPassword, resetPassword } = useAuthStore();

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState("request");
  const [errors, setErrors] = useState({});
  const [resendTimer, setResendTimer] = useState(30);
  const [loading, setLoading] = useState(false);
  const inputsRef = useRef([]);

  // OTP input handling
  const handleOtpChange = (e, idx) => {
    const val = e.target.value.replace(/[^0-9]/g, "").slice(0, 1);
    const arr = otp.split("");
    arr[idx] = val;
    const updatedOtp = arr.join("").slice(0, 6);
    setOtp(updatedOtp);
    
    if (val && inputsRef.current[idx + 1]) {
      inputsRef.current[idx + 1].focus();
    }
  };

  const handleOtpKeyDown = (e, idx) => {
    if (e.key === 'Backspace' && !otp[idx] && inputsRef.current[idx - 1]) {
      inputsRef.current[idx - 1].focus();
    }
  };

  // Countdown for resend
  useEffect(() => {
    if (resendTimer <= 0) return;
    const timer = setInterval(() => {
      setResendTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [resendTimer]);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setErrors({ email: result.error.errors?.[0]?.message || "Invalid email" });
      return;
    }
    
    try {
      setLoading(true);
      setErrors({});
      const result = await forgotPassword(email);
      
      // Only proceed to OTP step if the request was successful
      if (result.success) {
        setStep("verify");
        setResendTimer(30);
      }
      // If result.success is false, the error is already handled by the toast in the store
    } catch (error) {
      // Fallback error handling
      setErrors({ email: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    try {
      resetSchema.parse({ email, otp, newPassword });
      setErrors({});
      await resetPassword(email, otp, newPassword);
      setStep("done");
    } catch (err) {
      if (err instanceof z.ZodError) {
        const fieldErrors = {};
        err.errors.forEach((e) => (fieldErrors[e.path[0]] = e.message));
        setErrors(fieldErrors);
      }
    }
  };

  const handleResend = async () => {
    if (resendTimer > 0) return;
    try {
      const result = await forgotPassword(email);
      if (result.success) {
        setResendTimer(30);
      }
    } catch (error) {
      setErrors({ general: "Failed to resend OTP. Please try again." });
    }
  };

  const handleBackToEmail = () => {
    setStep("request");
    setOtp("");
    setNewPassword("");
    setErrors({});
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-6 p-6 rounded-xl shadow-lg bg-[#0f172a] border border-cyan-400 max-w-md w-full"
    >
      {/* Back Button - Show in all steps except done */}
      {step !== "done" && (
        <button
          onClick={step === "verify" ? handleBackToEmail : onBack}
          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer flex items-center gap-1"
        >
          ← Back to {step === "verify" ? "Email" : "Sign In"}
        </button>
      )}

      <h2 className="text-2xl font-bold text-cyan-400 text-center drop-shadow-md">
        {step === "done" ? "Password Reset" : "Reset Your Password"}
      </h2>

      {step === "done" ? (
        <div className="space-y-4">
          <p className="text-sm text-center text-gray-300">
            Your password has been reset successfully.
          </p>
          <button
            onClick={onBack}
            className="w-full mt-4 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:opacity-90 transition duration-200 shadow-md"
          >
            ← Back to Sign In
          </button>
        </div>
      ) : (
        <form
          onSubmit={step === "request" ? handleEmailSubmit : handleResetSubmit}
          className="space-y-4"
        >
          <div>
            <input
              type="email"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={step === "verify"}
              className="w-full bg-[#0f172a] border border-gray-600 px-3 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
              required
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* OTP Section - ONLY SHOWS IF STEP IS VERIFY AND NO EMAIL ERROR */}
          {step === "verify" && !errors.email && (
            <>
              <div className="space-y-4">
                <p className="text-sm text-center text-gray-300">
                  We've sent a 6-digit OTP to {email}
                </p>
                
                {/* OTP Input Boxes - Same as OtpForm */}
                <div className="flex justify-center gap-2">
                  {[...Array(6)].map((_, idx) => (
                    <input
                      key={idx}
                      type="text"
                      maxLength={1}
                      value={otp[idx] || ""}
                      onChange={(e) => handleOtpChange(e, idx)}
                      onKeyDown={(e) => handleOtpKeyDown(e, idx)}
                      ref={(el) => (inputsRef.current[idx] = el)}
                      className="w-12 h-14 text-center text-xl font-bold rounded-lg border border-cyan-500 bg-[#1e293b] text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition duration-150 shadow-md"
                    />
                  ))}
                </div>

                {/* Resend OTP Button */}
                <p className="text-center text-sm text-gray-400">
                  Didn't receive the code?{" "}
                  <button
                    type="button"
                    onClick={handleResend}
                    disabled={resendTimer > 0}
                    className={`${
                      resendTimer > 0
                        ? "text-gray-500 cursor-not-allowed"
                        : "text-pink-400 hover:underline"
                    } font-medium`}
                  >
                    {resendTimer > 0 ? `Resend in ${resendTimer}s` : "Resend OTP"}
                  </button>
                </p>

                {errors.otp && <p className="text-red-400 text-sm text-center">{errors.otp}</p>}
              </div>

              <div>
                <input
                  type="password"
                  placeholder="New password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full bg-[#0f172a] border border-gray-600 px-3 py-3 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition duration-200"
                  required
                />
                {errors.newPassword && <p className="text-red-400 text-sm mt-1">{errors.newPassword}</p>}
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 py-3 rounded-lg bg-cyan-400 text-black font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition duration-200 shadow-md"
          >
            {loading ? "Sending..." : step === "request" ? "Send OTP" : "Reset Password"}
          </button>

          {errors.general && (
            <p className="text-red-400 text-sm text-center">{errors.general}</p>
          )}
        </form>
      )}

      {/* Only show this footer in the request step */}
      {step === "request" && (
        <div className="text-center text-sm text-gray-400 mt-4">
          Remembered your password?{" "}
          <button
            onClick={onBack}
            className="text-cyan-400 hover:underline cursor-pointer"
          >
            Sign In
          </button>
        </div>
      )}
    </motion.div>
  );
}