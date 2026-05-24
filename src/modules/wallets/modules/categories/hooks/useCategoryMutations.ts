import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type {
	CategoryBody,
	CategoryEntity,
} from "@/modules/wallets/interfaces/categories/category.interface";
import {
	createCategory,
	deleteCategory,
	updateCategory,
} from "@/modules/wallets/services/categories.service";

export const useCategoryMutations = (onSuccess?: () => void) => {
	const queryClient = useQueryClient();
	const invalidateCategories = () => {
		queryClient.invalidateQueries({ queryKey: ["categories"] });
	};

	const createMutation = useMutation({
		mutationFn: createCategory,
		onError: (error) => toast.error(error.message),
		onSuccess: (data) => {
			toast.success(data.message);
			invalidateCategories();
			onSuccess?.();
		},
	});

	const updateMutation = useMutation({
		mutationFn: ({ body, id }: { body: CategoryBody; id: string }) =>
			updateCategory(id, body),
		onError: (error) => toast.error(error.message),
		onSuccess: (data) => {
			toast.success(data.message);
			invalidateCategories();
			onSuccess?.();
		},
	});

	const deleteMutation = useMutation({
		mutationFn: (category: CategoryEntity) => deleteCategory(category.id),
		onError: (error) => toast.error(error.message),
		onSuccess: (data) => {
			toast.success(data.message);
			invalidateCategories();
			onSuccess?.();
		},
	});

	return {
		createCategory: createMutation.mutateAsync,
		deleteCategory: deleteMutation.mutateAsync,
		isCreating: createMutation.isPending,
		isDeleting: deleteMutation.isPending,
		isUpdating: updateMutation.isPending,
		updateCategory: updateMutation.mutateAsync,
	};
};
