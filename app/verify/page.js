"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { verifyEmail, resendCode } from "./apiActions"; // ต้องมี export ฟังก์ชันเหล่านี้

export default function VerifyPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const emailFromQuery = searchParams.get("email") || "";

  const [email, setEmail] = useState(emailFromQuery);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [message, setMessage] = useState("");

  // ----------------------
  // Countdown state
  // ----------------------
  const [timeLeft, setTimeLeft] = useState(300); // 300 วินาที = 5 นาที
  const [isCounting, setIsCounting] = useState(true);

  useEffect(() => {
    let timer;
    if(isCounting && timeLeft > 0){
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if(timeLeft === 0){
      setIsCounting(false);
    }

    return () => clearInterval(timer);
  }, [isCounting, timeLeft]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60).toString().padStart(2, "0");
    const sec = (seconds % 60).toString().padStart(2, "0");
    return `${min}:${sec}`;
  };

  // ----------------------
  // Verify & Resend
  // ----------------------
  const handleVerify = async () => {
    if(code.length !== 6){
      setMessage("Code must be 6 digits");
      return;
    }
    setLoading(true);
    try{
      const result = await verifyEmail({ email, code });
      if(result.success){
        setMessage("Email verified! Redirecting...");
        setTimeout(() => router.push("/login"), 1500);
      } else {
        setMessage(result.message || "Invalid code");
      }
    }catch(err){
      setMessage(err.message || "Something went wrong");
    }finally{
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setResendLoading(true);
    try{
      const result = await resendCode({ email });
      if(result.success){
        setMessage("Code resent to your email");
        setTimeLeft(300); // reset countdown
        setIsCounting(true);
      } else {
        setMessage(result.message || "Failed to resend code");
      }
    }catch(err){
      setMessage(err.message || "Something went wrong");
    }finally{
      setResendLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a2e1d]">
      <div className="w-full max-w-md p-8 rounded-xl shadow-2xl bg-[#0a2e1d] text-white">
        <h2 className="text-2xl font-bold mb-4 text-[#C19F56]">Verify Your Email</h2>
        <p className="mb-2">
          We sent a 6-digit verification code to <strong>{email}</strong>
        </p>
        {isCounting && <p className="mb-4 text-yellow-400">Time left: {formatTime(timeLeft)}</p>}
        {!isCounting && <p className="mb-4 text-red-400">Code expired. Please resend code.</p>}

        <input
          type="text"
          value={code}
          onChange={e=>setCode(e.target.value)}
          maxLength={6}
          className="w-full p-3 rounded-lg bg-[#1a4b33] text-white mb-3"
          placeholder="Enter verification code"
        />

        <button
          onClick={handleVerify}
          disabled={loading}
          className="w-full py-3 mb-2 bg-[#c19f56] text-[#0a2e1d] font-medium rounded-lg hover:bg-[#a88847] transition duration-200"
        >
          {loading ? "Verifying..." : "Verify"}
        </button>

        <button
          onClick={handleResend}
          disabled={resendLoading || isCounting}
          className={`w-full py-3 ${isCounting ? "bg-gray-600" : "bg-[#0a2e1d] border border-[#c19f56] text-[#c19f56]"} font-medium rounded-lg hover:bg-[#1a4b33] transition duration-200`}
        >
          {resendLoading ? "Resending..." : "Resend Code"}
        </button>

        {message && <p className="mt-3 text-center text-red-400">{message}</p>}
      </div>
    </div>
  );
}
