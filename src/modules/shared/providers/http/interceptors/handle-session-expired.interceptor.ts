import { AxiosError } from "axios";

export const handleSessionExpired = async (error: AxiosError) => {

	return Promise.reject(error);
};