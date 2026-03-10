// ==========================================
// apiActions.js
// ==========================================
import axios from "axios";

const API_BASE = "http://localhost:4000/api/auth"; // เปลี่ยนเป็น backend URL ของคุณ

// Register
export const registerUser = async (formData) => {
  try {
    const { data } = await axios.post(`${API_BASE}/register`, formData);
    return data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Register failed");
  }
};

// Verify Email
export const verifyEmailCode = async ({ email, code }) => {
  try {
    const { data } = await axios.post(`${API_BASE}/verify`, { email, code });
    return data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Verification failed");
  }
};

// Resend Code
export const resendVerificationCode = async (email) => {
  try {
    const { data } = await axios.post(`${API_BASE}/resend-code`, { email });
    return data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Resend code failed");
  }
};

// Forgot Password
export const forgotPasswordRequest = async (email) => {
  try {
    const { data } = await axios.post(`${API_BASE}/forgot-password`, { email });
    return data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Forgot password failed");
  }
};

// Change Password
export const changePasswordRequest = async ({ email, code, newPassword }) => {
  try {
    const { data } = await axios.post(`${API_BASE}/change-password`, { email, code, newPassword });
    return data;
  } catch (err) {
    throw new Error(err.response?.data?.message || "Change password failed");
  }
};
