import type { CategoryIconKey } from "../../modules/categories/const/category-icons";

export type CategoryType = "Ingreso" | "Gasto";

export interface CategoryEntity {
	id: string;
	color?: string;
	description: string;
	icon: CategoryIconKey;
	name: string;
	type: CategoryType;
}

export interface CategoryBody {
	description: string;
	icon: CategoryIconKey;
	name: string;
	type: CategoryType;
	walletId: string;
}

export interface GetAllCategoriesRequest {
	name?: string | null;
	type?: CategoryType | string | null;
	walletId: string;
}

export interface GetAllCategoriesResponse {
	content: CategoryEntity[];
	totalElements: number;
	totalPages: number;
}
