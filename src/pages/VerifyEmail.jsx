import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import toast from "react-hot-toast";
import { useResendOtp, useVerifyOtp } from "../hooks/useAuth";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [email, setEmail] = useState("");
  const [isResending, setIsResending] = useState(false);
  const [timer, setTimer] = useState(5);
  const { mutate } = useVerifyOtp();
  const { mutate: resendOtp } = useResendOtp();

  useEffect(() => {
    const emailFromState = location.state?.email;
    const emailFromStorage = localStorage.getItem("pendingVerificationEmail");

    if (emailFromState) {
      setEmail(emailFromState);
      localStorage.setItem("pendingVerificationEmail", emailFromState);
    } else if (emailFromStorage) {
      setEmail(emailFromStorage);
    } else {
      toast.error("Please register first");
      navigate("/registration");
    }
  }, [location, navigate]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`).focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleVerify = async () => {
    const otpCode = otp.join("");

    if (otpCode.length !== 6) {
      toast.error("Please enter complete OTP");
      return;
    }

    try {
      const credentials = {
        email,
        otp: otpCode,
      };
      mutate(credentials, {
        onSuccess: () => {
          localStorage.removeItem("pendingVerificationEmail");
          toast.success("Email verified successfully!");
          navigate("/login");
        },
      });
    } catch (error) {
      toast.error("Invalid OTP. Please try again.");
      console.log(error);
    }
  };

  const handleResendOtp = async () => {
    if (timer > 0) return;

    setIsResending(true);
    try {
      resendOtp(
        { email },
        {
          onSuccess: () => {
            toast.success("OTP resent successfully!");
            setTimer(60);
            setOtp(["", "", "", "", "", ""]);
          },
        }
      );
    } catch (error) {
      toast.error("Failed to resend OTP");
      console.log(error);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 font-body">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-8 h-8 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Verify your email
            </h1>
            <p className="text-gray-600 text-sm">
              We've sent a verification code to
            </p>
            <p className="text-gray-900 font-medium mt-1">{email}</p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3 text-center">
                Enter verification code
              </label>
              <div className="flex justify-center gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 text-center text-xl font-semibold border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  />
                ))}
              </div>
            </div>

            <button
              onClick={handleVerify}
              className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded-md transition duration-200"
            >
              Verify Email
            </button>

            <div className="text-center">
              <p className="text-gray-600 text-sm mb-2">
                Didn't receive the code?
              </p>
              {timer > 0 ? (
                <p className="text-gray-500 text-sm">
                  Resend code in{" "}
                  <span className="font-medium text-primary">{timer}s</span>
                </p>
              ) : (
                <button
                  onClick={handleResendOtp}
                  disabled={isResending}
                  className="text-primary hover:text-primary/80 font-medium text-sm underline disabled:opacity-50"
                >
                  {isResending ? "Sending..." : "Resend Code"}
                </button>
              )}
            </div>

            <div className="text-center pt-4 border-t border-gray-200">
              <button
                onClick={() => navigate("/registration")}
                className="text-gray-600 hover:text-gray-900 text-sm"
              >
                ← Back to Registration
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
