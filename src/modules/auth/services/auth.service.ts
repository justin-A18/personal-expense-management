import httpClient from "@/modules/shared/providers/http/http.provider";
import { LoginUserBody, ChangePasswordBody, RegisterUserBody } from "../interfaces/request";


export const loginUser = async (body: LoginUserBody) => {
	return httpClient("auth/login", {
		method: "post",
		body
	});
};

export const registerUser = async (body: RegisterUserBody) => {
	return httpClient("auth/register", {
		method: "post",
		body
	});
};


export const resetPassword = async (email: string) => {
	return httpClient("auth/reset-password", {
		method: "post",
		body: { email }
	});
};

export const changePassword = async (body: ChangePasswordBody) => {
	const { token, password } = body;

	return httpClient(`auth/change-password/${token}`, {
		method: "post",
		body: { password }
	});
};

export const verifyEmail = async (token: string) => {
	return httpClient(`auth/validate-email/${token}`, {
		method: "get",
	});
};