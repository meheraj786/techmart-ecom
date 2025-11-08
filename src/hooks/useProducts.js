import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const baseUrl=import.meta.env

const fetchProducts = async () => {
  const res = await axios.get(`/api/users`);
  return res.data;
};

export const useUsers = () => {
  return useQuery(['products'], fetchProducts);
};
