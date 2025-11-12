import { create } from "zustand";

let storedUser = null;

try {
  const userData = localStorage.getItem("user");
  storedUser = userData ? JSON.parse(userData) : null;
} catch (error) {
  console.error("Error parsing user from localStorage:", error);
  storedUser = null;
}

const useUserStore = create((set) => ({
  user: storedUser,

  setUser: (userData) => {
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
      set({ user: userData });
    } else {
      localStorage.removeItem("user");
      set({ user: null });
    }
  },

  logout: () => {
    localStorage.removeItem("user");
    set({ user: null });
  },
}));

export default useUserStore;
