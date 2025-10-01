import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { LoginUserResponse } from "@/modules/auth/interfaces/response/login-user-response.interface";
import { UserEntity } from "../interfaces/entities/user.entity";

export interface AuthState {
	token: string | null;
	user: UserEntity | null;
	setAuth: (data: LoginUserResponse) => void;
	clearAuth: () => void;
};

export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			token: null,
			user: null,
			setAuth: (data) =>
				set({
					token: data.token,
					user: data.user,
				}),
			clearAuth: () => set({ token: null, user: null }),
		}),
		{
			name: "auth-storage",
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({ token: state.token, user: state.user }),
		}
	)
);