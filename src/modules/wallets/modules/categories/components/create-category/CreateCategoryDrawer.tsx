"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleDollarSignIcon, PlusIcon, TagsIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { CustomControllerSelect } from "@/modules/shared/components/custom-controller-select/CustomControllerSelect";
import { CustomDrawer } from "@/modules/shared/components/custom-drawer/CustomDrawer";
import { CustomInput } from "@/modules/shared/components/custom-input/CustomInput";
import { Form } from "@/modules/shared/ui/form";
import type { CategoryEntity } from "@/modules/wallets/interfaces/categories/category.interface";
import {
	type CategoryIconKey,
	getCategoryIcon,
} from "../../const/category-icons";
import {
	type CreateCategorySchema,
	createCategorySchema,
} from "../../schema/category.schema";
import { CategoryIconPickerModal } from "../icon-picker/CategoryIconPickerModal";

interface CreateCategoryDrawerProps {
	closeDrawer: () => void;
	initialCategory?: CategoryEntity | null;
	isDrawerOpen: boolean;
	isPending?: boolean;
	onSubmitCategory: (values: CreateCategorySchema) => Promise<void> | void;
}

const initialValues: CreateCategorySchema = {
	description: "",
	icon: "tags",
	name: "",
	type: "Gasto",
};

export const CreateCategoryDrawer = ({
	closeDrawer,
	initialCategory,
	isDrawerOpen,
	isPending = false,
	onSubmitCategory,
}: CreateCategoryDrawerProps) => {
	const [isIconPickerOpen, setIsIconPickerOpen] = useState(false);
	const form = useForm<CreateCategorySchema>({
		defaultValues: initialValues,
		mode: "onChange",
		resolver: zodResolver(createCategorySchema),
	});
	const mode = initialCategory ? "edit" : "create";
	const selectedIcon = form.watch("icon");
	const SelectedIcon = getCategoryIcon(selectedIcon);

	const handleSubmit = form.handleSubmit(async (values) => {
		await onSubmitCategory(values);
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

	return (
		<>
			<CustomDrawer isOpen={isDrawerOpen} onClose={closeDrawer}>
				<Form {...form}>
					<form className="flex flex-1 flex-col gap-5" onSubmit={handleSubmit}>
						<header className="border-b border-white/10 pb-4">
							<div className="flex items-center gap-3">
								<div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-lg shadow-purple-950/30">
									<TagsIcon className="size-5" />
								</div>
								<div>
									<p className="text-sm font-medium text-purple-200">
										{mode === "edit" ? "Editar categoria" : "Nueva categoria"}
									</p>
									<h2 className="text-2xl font-semibold text-white">
										{mode === "edit" ? "Actualizar categoria" : "Crear categoria"}
									</h2>
								</div>
							</div>
						</header>

						<div className="grid gap-4">
							<div className="grid gap-2">
								<p className="text-sm font-medium text-[#aaaaaa]">Icono</p>
								<button
									type="button"
									className="flex min-h-14 w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3 text-left text-white transition-colors hover:border-purple-300/50 hover:bg-purple-400/10"
									onClick={() => setIsIconPickerOpen(true)}
								>
									<span className="flex items-center gap-3">
										<span className="flex size-10 items-center justify-center rounded-xl bg-purple-400/10 text-purple-100">
											<SelectedIcon className="size-5" />
										</span>
										<span>
											<span className="block text-sm font-medium">
												Seleccionar icono
											</span>
											<span className="block text-xs text-[#aaaaaa]">
												El icono se guardara como clave de categoria
											</span>
										</span>
									</span>
								</button>
							</div>

							<CustomControllerSelect
								control={form.control}
								name="type"
								label="Tipo"
								labelContent="Tipo de categoria"
								placeholder="Selecciona un tipo"
								className="w-full max-w-full bg-[#1e1e1e]"
								items={[
									{ label: "Gasto", value: "Gasto" },
									{ label: "Ingreso", value: "Ingreso" },
								]}
							/>

							<CustomInput
								control={form.control}
								name="name"
								label="Nombre"
								type="text"
								placeholder="Comida"
							/>

							<CustomInput
								control={form.control}
								name="description"
								label="Descripcion"
								type="text"
								placeholder="Compras de comida, supermercado y restaurantes"
							/>
						</div>

						<button
							type="submit"
							className="btn-purple-secondary-with-icon mt-auto min-h-12 w-full justify-center text-base"
							disabled={isPending}
						>
							{isPending ? (
								<CircleDollarSignIcon className="size-4 animate-pulse" />
							) : (
								<PlusIcon className="size-4" />
							)}
							{mode === "edit" ? "Actualizar categoria" : "Crear categoria"}
						</button>
					</form>
				</Form>
			</CustomDrawer>

			<CategoryIconPickerModal
				isOpen={isIconPickerOpen}
				selectedIcon={selectedIcon as CategoryIconKey}
				onClose={() => setIsIconPickerOpen(false)}
				onSelect={(icon) => form.setValue("icon", icon, { shouldDirty: true })}
			/>
		</>
	);
};
