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
