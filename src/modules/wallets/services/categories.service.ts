import type { BaseResponse } from "@/modules/shared/interfaces/base-response.interface";
import httpClient from "@/modules/shared/providers/http/http.provider";
import type {
	CategoryBody,
	CategoryEntity,
	GetAllCategoriesRequest,
	GetAllCategoriesResponse,
} from "../interfaces/categories/category.interface";

const buildCategoriesQuery = (
	params?: Record<string, number>,
	body?: GetAllCategoriesRequest,
) => {
	const searchParams =
		Object.entries(params ?? {}).length > 1
			? new URLSearchParams({
					limit: String(params?.limit),
					offset: String(params?.offset),
				})
			: new URLSearchParams();

	if (body?.type) searchParams.set("type", body.type);
	if (body?.name) searchParams.set("name", body.name);

	searchParams.set("walletId", body?.walletId ?? "");

	return searchParams.toString();
};

export const getAllCategories = async (
	filters?: GetAllCategoriesRequest,
	params?: Record<string, number>,
): Promise<BaseResponse<GetAllCategoriesResponse>> => {
	return httpClient(`categories?${buildCategoriesQuery(params, filters)}`, {
		method: "get",
	});
};

export const createCategory = async (
	body: CategoryBody,
): Promise<BaseResponse<CategoryEntity>> => {
	return httpClient("categories", {
		body,
		method: "post",
	});
};

export const updateCategory = async (
	id: string,
	body: CategoryBody,
): Promise<BaseResponse<CategoryEntity>> => {
	return httpClient(`categories/${id}`, {
		body,
		method: "patch",
	});
};

export const deleteCategory = async (id: string): Promise<BaseResponse> => {
	return httpClient(`categories/${id}`, {
		method: "delete",
	});
};
