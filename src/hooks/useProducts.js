import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;

const fetchProducts = async () => {
  const res = await axios.get(`${baseUrl}product/all-product`);
  return res.data.data;
};

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
