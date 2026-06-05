import { useMemo, useState } from "react";
import type {
	CategoryBody,
	CategoryEntity,
} from "@/modules/wallets/interfaces/categories/category.interface";
import { useGetAllCategories } from "@/modules/wallets/hooks/useGetAllCategories";
import { createCategoriesColumns } from "../components/columns/categories.column";
import { useCategoryMutations } from "./useCategoryMutations";

export const useCategoriesPage = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [selectedCategory, setSelectedCategory] =
		useState<CategoryEntity | null>(null);
	const [categoryToDelete, setCategoryToDelete] =
		useState<CategoryEntity | null>(null);
	const categoriesQuery = useGetAllCategories();
	const {
		createCategory,
		deleteCategory,
		isCreating,
		isDeleting,
		isUpdating,
		updateCategory,
	} = useCategoryMutations(() => setCategoryToDelete(null));

	const columns = useMemo(
		() =>
			createCategoriesColumns({
				onDelete: setCategoryToDelete,
				onEdit: (category) => {
					setSelectedCategory(category);
					setIsDrawerOpen(true);
				},
			}),
		[],
	);

	const handleOpenCreateDrawer = () => {
		setSelectedCategory(null);
		setIsDrawerOpen(true);
	};

	const handleCloseDrawer = () => {
		setIsDrawerOpen(false);
		setSelectedCategory(null);
	};

	const handleSubmitCategory = async (values: CategoryBody) => {
		if (selectedCategory) {
			await updateCategory({ body: values, id: selectedCategory.id });
			return;
		}

		await createCategory(values);
	};

	const handleConfirmDelete = async () => {
		if (!categoryToDelete) return;
		await deleteCategory(categoryToDelete);
	};

	return {
		...categoriesQuery,
		categoryToDelete,
		columns,
		handleCloseDrawer,
		handleConfirmDelete,
		handleOpenCreateDrawer,
		handleSubmitCategory,
		isDeleting,
		isDrawerOpen,
		isMutating: isCreating || isUpdating,
		selectedCategory,
		setCategoryToDelete,
	};
};
