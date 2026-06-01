import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { emptyStringsToNull } from "@/modules/shared/helpers/emptyStringsToNull";
import {
	type CategoryFilters,
	useCategoryFiltersStore,
} from "../modules/categories/store/useCategoryFiltersStore";
import { getAllCategories } from "../services/categories.service";
import { useWalletStore } from "../store/useWalletStore";

export const useGetAllCategories = () => {
	const filters = useCategoryFiltersStore((state) => state.filters);
	const params = useCategoryFiltersStore((state) => state.params);
	const wallet = useWalletStore((state) => state.wallet);

	const setFilters = useCategoryFiltersStore((state) => state.setFilters);
	const setParams = useCategoryFiltersStore((state) => state.setParams);
	const clearFilters = useCategoryFiltersStore((state) => state.clearFilters);

	const [totalPages, setTotalPages] = useState(0);
	const [totalElements, setTotalElements] = useState(0);

	const normalizedFilters = useMemo<CategoryFilters>(() => {
		const nextFilters = emptyStringsToNull(filters);
		return {
			name: nextFilters.name || null,
			type: nextFilters.type || null,
		};
	}, [filters]);

	const { data: categoriesData, isFetching: isFetchingCategories } = useQuery({
		initialData: [],
		queryKey: ["categories", { filters: normalizedFilters, params, walletId: wallet?.id }],
		queryFn: async () => {
			const body = {
				...normalizedFilters,
				walletId: wallet?.id || "",
			};

			const { data } = await getAllCategories(body, params);
			setTotalPages(data.totalPages);
			setTotalElements(data.totalElements);
			return data.content;
		},
	});

	return {
		categoriesData,
		isFetchingCategories,
		totalPages,
		totalElements,
		setFilters,
		setParams,
		clearFilters,
		params,
		filters,
	};
};
