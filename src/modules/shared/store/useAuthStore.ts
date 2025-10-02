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

const initialValues = {
	token: null,
	user: null,
};

export const useAuthStore = create<AuthState>()(
	persist(
		(set, get) => ({
			...get(),
			...initialValues,
			setAuth: (newData: Partial<LoginUserResponse>) => {
				set(() => ({ ...get(), ...newData }));
			},
			clearAuth: () => {
				useAuthStore.persist.clearStorage();
				set(initialValues);
			},
		}),
		{
			name: "auth-storage",
			storage: createJSONStorage(() => sessionStorage),
		}
	)
);