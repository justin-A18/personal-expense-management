import { useEffect, useState } from "react";
import type { CategoryFilters } from "../store/useCategoryFiltersStore";

interface UseCategoryFiltersDraftParams extends CategoryFilters {
	onClearFilters: () => void;
	onSearch: (filters: CategoryFilters) => void;
}

export const useCategoryFiltersDraft = ({
	name,
	onClearFilters,
	onSearch,
	type,
}: UseCategoryFiltersDraftParams) => {
	const [draftFilters, setDraftFilters] = useState<CategoryFilters>({
		name,
		type,
	});

	useEffect(() => {
		setDraftFilters({ name, type });
	}, [name, type]);

	const handleNameChange = (nextName: string) => {
		setDraftFilters((current) => ({
			...current,
			name: nextName,
		}));
	};

	const handleTypeChange = (nextType: CategoryFilters["type"]) => {
		setDraftFilters((current) => ({
			...current,
			type: nextType,
		}));
	};

	const handleSearch = () => {
		onSearch(draftFilters);
	};

	const handleClearFilters = () => {
		setDraftFilters({ name: null, type: null });
		onClearFilters();
	};

	return {
		draftFilters,
		handleClearFilters,
		handleNameChange,
		handleSearch,
		handleTypeChange,
	};
};
