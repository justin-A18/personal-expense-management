import { BaseResponse } from "@/modules/shared/interfaces/base-response.interface";
import { WalletEntity } from "@/modules/shared/interfaces/entities/wallet.entity";
import httpClient from "@/modules/shared/providers/http/http.provider";
import { CreateWalletBody } from "../interfaces/create-wallet-request.interface";

export const getAllWallets = async (): Promise<BaseResponse<WalletEntity[]>> => {
	return httpClient("wallets", {
		method: "get",
	});
};

export const getWalletById = async (id: string): Promise<BaseResponse<WalletEntity>> => {
	return httpClient(`wallets/${id}`, {
		method: "get",
	});
};

export const createWallet = async (body: CreateWalletBody): Promise<BaseResponse> => {
	return httpClient("wallets", {
		method: "post",
		body,
	});
};

export const deleteWallet = async (id: string): Promise<BaseResponse> => {
	return httpClient(`wallets/${id}`, {
		method: "delete",
	});
};

export const updateWallet = async (id: string, body: CreateWalletBody): Promise<BaseResponse> => {
	return httpClient(`wallets/${id}`, {
		method: "put",
		body,
	});
};