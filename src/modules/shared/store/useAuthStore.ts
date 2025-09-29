import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface AuthState {
	token: string | null;
	user: any | null;
	setAuth: (data: Record<string, any>) => void;
	clearAuth: () => void;
};

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			token: null,
			user: null,
			setAuth: (data) => set(data),
			clearAuth: () => set({ token: null, user: null }),
		}),
		{
			name: "auth-storage",
		}
	)
);
