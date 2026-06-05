import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type {
	CategoryBody,
	CategoryEntity,
} from "@/modules/wallets/interfaces/categories/category.interface";
import { useWalletStore } from "@/modules/wallets/store/useWalletStore";
import {
	type CreateCategorySchema,
	createCategorySchema,
} from "../schema/category.schema";

interface UseCategoryDrawerFormParams {
	closeDrawer: () => void;
	initialCategory?: CategoryEntity | null;
	isDrawerOpen: boolean;
	onSubmitCategory: (values: CategoryBody) => Promise<void> | void;
}

const initialValues: CreateCategorySchema = {
	description: "",
	icon: "tags",
	name: "",
	type: "Gasto",
};

export const useCategoryDrawerForm = ({
	closeDrawer,
	initialCategory,
	isDrawerOpen,
	onSubmitCategory,
}: UseCategoryDrawerFormParams) => {
	const [isIconPickerOpen, setIsIconPickerOpen] = useState(false);
	const wallet = useWalletStore((state) => state.wallet);
	const form = useForm<CreateCategorySchema>({
		defaultValues: initialValues,
		mode: "onChange",
		resolver: zodResolver(createCategorySchema),
	});
	const mode = initialCategory ? "edit" : "create";
	const selectedIcon = form.watch("icon");

	const handleSubmit = form.handleSubmit(async (values) => {
		if (!wallet?.id) {
			toast.error("Selecciona una billetera antes de guardar la categoria");
			return;
		}

		await onSubmitCategory({
			...values,
			walletId: wallet.id,
		});
		form.reset(initialValues);
		closeDrawer();
	});

	useEffect(() => {
		if (!isDrawerOpen) return;

		if (initialCategory) {
			form.reset({
				description: initialCategory.description,
				icon: initialCategory.icon,
				name: initialCategory.name,
				type: initialCategory.type,
			});
			return;
		}

		form.reset(initialValues);
	}, [form, initialCategory, isDrawerOpen]);

	const handleIconSelect = (icon: CreateCategorySchema["icon"]) => {
		form.setValue("icon", icon, { shouldDirty: true });
	};

	return {
		form,
		handleIconSelect,
		handleSubmit,
		isIconPickerOpen,
		mode,
		selectedIcon,
		setIsIconPickerOpen,
	};
};
