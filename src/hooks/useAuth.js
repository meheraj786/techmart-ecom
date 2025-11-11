import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const login = async (credentials) => {
  const res = await axios.post(`${baseUrl}auth/login`, credentials);
  return res.data.data;
};
const register = async (credentials) => {
  const res = await axios.post(`${baseUrl}auth/register`, credentials);
  return res.data.data;
};
const verifyOtp = async (credentials) => {
  const res = await axios.post(`${baseUrl}auth/verify-email`, credentials);
  return res.data.data;
};
const resendOtp = async (credentials) => {
  const res = await axios.post(`${baseUrl}auth/resend-otp`, credentials);
  return res.data.data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
  });
};
export const useRegister = () => {
  return useMutation({
    mutationFn: register,
  });
};
export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: verifyOtp,
  });
};
export const useResendOtp = () => {
  return useMutation({
    mutationFn: resendOtp,
  });
};
