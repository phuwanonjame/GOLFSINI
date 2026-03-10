// ==========================================
// apiActions.js
// ==========================================
import axios from "axios";

const API_BASE = "http://localhost:4000/api/auth"; // เปลี่ยนเป็น backend URL ของคุณ

// Register

export const registerUser = async (data) => {
  const res = await axios.post(`${API_BASE}/register`, data);
  return res.data;
};

export const verifyEmail = async ({ email, code }) => {
  const res = await axios.post(`${API_BASE}/verify`, { email, code });
  return res.data;
};

export const resendCode = async ({ email }) => {
  const res = await axios.post(`${API_BASE}/resend-code`, { email });
  return res.data;
};
