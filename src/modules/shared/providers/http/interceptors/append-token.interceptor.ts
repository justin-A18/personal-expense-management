import { useAuthStore } from "@/modules/shared/store/useAuthStore";
import { InternalAxiosRequestConfig } from "axios";

export const appendToken = async (
	config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
	const token = useAuthStore.getState().token;

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
};

