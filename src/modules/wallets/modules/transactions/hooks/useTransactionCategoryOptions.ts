import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import type { TransactionEntity } from "@/modules/shared/interfaces/entities/transaction.entity";
import type { CategoryEntity } from "@/modules/wallets/interfaces/categories/category.interface";
import { getAllCategories } from "@/modules/wallets/services/categories.service";
import { useWalletStore } from "@/modules/wallets/store/useWalletStore";
import { SelectItemCategory } from "../Filters/SelectItemCategory";

const CATEGORY_SEARCH_LIMIT = 10;

const useDebouncedValue = (value: string, delay = 350) => {
	const [debouncedValue, setDebouncedValue] = useState(value);

	useEffect(() => {
		const timeoutId = window.setTimeout(() => {
			setDebouncedValue(value);
		}, delay);

		return () => window.clearTimeout(timeoutId);
	}, [delay, value]);

	return debouncedValue;
};

export const useTransactionCategoryOptions = (
	initialTransaction?: TransactionEntity | null,
) => {
	const wallet = useWalletStore((state) => state.wallet);
	const [categorySearch, setCategorySearch] = useState("");
	const debouncedCategorySearch = useDebouncedValue(categorySearch);

	const { data: categories = [], isFetching: isFetchingCategories } = useQuery({
		enabled: Boolean(wallet?.id),
		initialData: [],
		queryKey: [
			"categories",
			"transaction-category-search",
			{
				name: debouncedCategorySearch.trim(),
				walletId: wallet?.id,
			},
		],
		queryFn: async () => {
			const { data } = await getAllCategories(
				{
					name: debouncedCategorySearch.trim() || null,
					type: null,
					walletId: wallet?.id || "",
				},
				{
					limit: CATEGORY_SEARCH_LIMIT,
					offset: 0,
				},
			);

			return data.content;
		},
	});

	const availableCategories = useMemo(() => {
		const selectedCategory = initialTransaction?.category;
		if (!selectedCategory) return categories;

		const selectedCategoryExists = categories.some(
			(category) => category.id === selectedCategory.id,
		);

		if (selectedCategoryExists) return categories;

		return [
			{
				icon: selectedCategory.icon ?? "tags",
				id: selectedCategory.id,
				name: selectedCategory.name,
			},
			...categories,
		] satisfies Pick<CategoryEntity, "icon" | "id" | "name">[];
	}, [categories, initialTransaction?.category]);

	return {
		categoryOptions: SelectItemCategory({ categories: availableCategories }),
		categorySearch,
		isFetchingCategories,
		setCategorySearch,
	};
};
