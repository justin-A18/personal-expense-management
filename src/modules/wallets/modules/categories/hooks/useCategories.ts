import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { emptyStringsToNull } from "@/modules/shared/helpers/emptyStringsToNull";
import type { GetAllCategoriesRequest } from "@/modules/wallets/interfaces/categories/category.interface";
import { getAllCategories } from "@/modules/wallets/services/categories.service";
import { useCategoryFiltersStore } from "../store/useCategoryFiltersStore";

export const useCategories = () => {
	const filters = useCategoryFiltersStore((state) => state.filters);
	const params = useCategoryFiltersStore((state) => state.params);
	const setFilters = useCategoryFiltersStore((state) => state.setFilters);
	const setParams = useCategoryFiltersStore((state) => state.setParams);
	const clearFilters = useCategoryFiltersStore((state) => state.clearFilters);
	const [totalElements, setTotalElements] = useState(0);
	const [totalPages, setTotalPages] = useState(0);

	const normalizedFilters = useMemo<GetAllCategoriesRequest>(() => {
		const nextFilters = emptyStringsToNull(filters);
		return {
			name: nextFilters.name || null,
			type: nextFilters.type || null,
		};
	}, [filters]);

	const { data: categories = [], isFetching } = useQuery({
		initialData: [],
		queryKey: ["categories", { filters: normalizedFilters, params }],
		queryFn: async () => {
			const { data } = await getAllCategories(normalizedFilters, params);
			setTotalElements(data.totalElements);
			setTotalPages(data.totalPages);
			return data.content;
		},
	});

	return {
		categories,
		clearFilters,
		filters,
		isFetching,
		params,
		setFilters,
		setParams,
		totalElements,
		totalPages,
	};
};
