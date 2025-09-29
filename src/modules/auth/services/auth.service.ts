import httpClient from "@/modules/shared/providers/http/http.provider";
import { LoginUserBody, ChangePasswordBody, RegisterUserBody } from "../interfaces/request";
import { BaseResponse } from "@/modules/shared/interfaces/base-response.interface";
import { LoginUserResponse } from "../interfaces/response/login-user-response.interface";

export const loginUser = async (body: LoginUserBody): Promise<BaseResponse<LoginUserResponse>> => {
	return httpClient("auth/login", {
		method: "post",
		body
	});
};

export const registerUser = async (body: RegisterUserBody): Promise<BaseResponse> => {
	return httpClient("auth/register", {
		method: "post",
		body
	});
};


export const resetPassword = async (email: string): Promise<BaseResponse> => {
	return httpClient("auth/reset-password", {
		method: "post",
		body: { email }
	});
};

export const changePassword = async (body: ChangePasswordBody): Promise<BaseResponse> => {
	const { token, password } = body;

	return httpClient(`auth/change-password/${token}`, {
		method: "post",
		body: { password }
	});
};

export const verifyEmail = async (token: string): Promise<BaseResponse> => {
	return httpClient(`auth/validate-email/${token}`, {
		method: "get",
	});
};