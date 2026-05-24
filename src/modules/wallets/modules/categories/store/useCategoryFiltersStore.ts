import { create } from "zustand";
import type { CategoryType } from "@/modules/wallets/interfaces/categories/category.interface";

interface CategoryFilters {
	name: string;
	type: "" | CategoryType;
}

interface CategoryFiltersStore {
	clearFilters: () => void;
	filters: CategoryFilters;
	params: Record<string, number>;
	setFilters: (filters: Partial<CategoryFilters>) => void;
	setParams: (params: Record<string, number>) => void;
}

const initialFilters: CategoryFilters = {
	name: "",
	type: "",
};

export const useCategoryFiltersStore = create<CategoryFiltersStore>((set) => ({
	clearFilters: () =>
		set({
			filters: initialFilters,
			params: { limit: 10, offset: 0 },
		}),
	filters: initialFilters,
	params: { limit: 10, offset: 0 },
	setFilters: (filters) =>
		set((state) => ({
			filters: { ...state.filters, ...filters },
			params: { ...state.params, offset: 0 },
		})),
	setParams: (params) =>
		set((state) => ({ params: { ...state.params, ...params } })),
}));
