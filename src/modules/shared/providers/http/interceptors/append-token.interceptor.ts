import { InternalAxiosRequestConfig } from "axios";

export const appendToken = async (
	config: InternalAxiosRequestConfig
): Promise<InternalAxiosRequestConfig> => {
	// const token = await getTokenFromCookie();

	// if (token) {
	//   config.headers.Authorization = `Bearer ${token}`;
	// }

	return config;
};

