import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { CategoryType } from "@/modules/wallets/interfaces/categories/category.interface";
import type { CategoryFilters } from "../store/useCategoryFiltersStore";

interface UseCategoryFiltersDraftParams extends CategoryFilters {
	onClearFilters: () => void;
	onSearch: (filters: CategoryFilters) => void;
}

export interface CategoryFiltersFormValues {
	name: string;
	type: CategoryType | "all";
}

const getDefaultValues = ({
	name,
	type,
}: CategoryFilters): CategoryFiltersFormValues => ({
	name: name ?? "",
	type: type ?? "all",
});

export const useCategoryFiltersDraft = ({
	name,
	onClearFilters,
	onSearch,
	type,
}: UseCategoryFiltersDraftParams) => {
	const form = useForm<CategoryFiltersFormValues>({
		defaultValues: getDefaultValues({ name, type }),
	});

	useEffect(() => {
		form.reset(getDefaultValues({ name, type }));
	}, [form, name, type]);

	const handleSearch = (values: CategoryFiltersFormValues) => {
		onSearch({
			name: values.name.trim() || null,
			type: values.type === "all" ? null : values.type,
		});
	};

	const handleClearFilters = () => {
		form.reset(getDefaultValues({ name: null, type: null }));
		onClearFilters();
	};

	return {
		form,
		handleClearFilters,
		handleSubmit: form.handleSubmit(handleSearch),
	};
};
