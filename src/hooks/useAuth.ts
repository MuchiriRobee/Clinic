// src/hooks/useAuth.ts
import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  isAuthenticated: localStorage.getItem("adminAuth") === "true",
  login: () => {
    localStorage.setItem("adminAuth", "true");
    set({ isAuthenticated: true });
  },
  logout: () => {
    localStorage.removeItem("adminAuth");
    set({ isAuthenticated: false });
  },
}));