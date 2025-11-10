import { create } from "zustand";

const storedUser = JSON.parse(localStorage.getItem("user"));

const useUserStore = create((set) => ({
  user: storedUser || null,

  setUser: (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    set({ user: userData });
  },

  logout: () => {
    localStorage.removeItem("user");
    set({ user: null });
  },
}));

export default useUserStore