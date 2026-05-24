import type { BaseResponse } from "@/modules/shared/interfaces/base-response.interface";
import httpClient from "@/modules/shared/providers/http/http.provider";
import type {
	CategoryBody,
	CategoryEntity,
	GetAllCategoriesRequest,
	GetAllCategoriesResponse,
} from "../interfaces/categories/category.interface";

const buildCategoriesQuery = (
	params: Record<string, number>,
	filters: GetAllCategoriesRequest,
) => {
	const searchParams = new URLSearchParams({
		limit: String(params.limit),
		offset: String(params.offset),
	});

	if (filters.type) searchParams.set("type", filters.type);
	if (filters.name) searchParams.set("name", filters.name);

	return searchParams.toString();
};

export const getAllCategories = async (
	filters: GetAllCategoriesRequest,
	params: Record<string, number>,
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
