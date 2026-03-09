import { create } from "zustand";

export interface AuthUser {
  name: string;
  username: string;
  avatar: string | null;
}

interface AuthStore {
  user: AuthUser | null;
  cartCount: number;
  login: (user: AuthUser) => void;
  logout: () => void;
  setCartCount: (count: number) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  // Default to logged-in with mock user for demo
  user: { name: "Anh Le", username: "anhlh", avatar: null },
  cartCount: 3,
  login: (user) => set({ user }),
  logout: () => set({ user: null, cartCount: 0 }),
  setCartCount: (cartCount) => set({ cartCount }),
}));
