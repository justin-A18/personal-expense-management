"use client";

import { PlusIcon, SearchIcon, Trash2Icon } from "lucide-react";
import { CustomControllerSelect } from "@/modules/shared/components/custom-controller-select/CustomControllerSelect";
import { CustomInput } from "@/modules/shared/components/custom-input/CustomInput";
import { Form } from "@/modules/shared/ui/form";
import { useCategoryFiltersDraft } from "../../hooks/useCategoryFiltersDraft";
import type { CategoryFilters } from "../../store/useCategoryFiltersStore";

interface CategoriesFiltersProps extends CategoryFilters {
	onClearFilters: () => void;
	onOpenCreateDrawer: () => void;
	onSearch: (filters: CategoryFilters) => void;
}

export const CategoriesFilters = ({
	name,
	onClearFilters,
	onOpenCreateDrawer,
	onSearch,
	type,
}: CategoriesFiltersProps) => {
	const { form, handleClearFilters, handleSubmit } = useCategoryFiltersDraft({
		name,
		onClearFilters,
		onSearch,
		type,
	});

	return (
		<Form {...form}>
			<form
				className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between"
				onSubmit={handleSubmit}
			>
				<div className="grid items-start gap-3 sm:grid-cols-[minmax(0,260px)_minmax(0,220px)]">
					<CustomInput
						control={form.control}
						name="name"
						label="Nombre"
						placeholder="Buscar categoria"
						className="border-[#707070] bg-[#1e1e1e] text-white placeholder:text-[#aaaaaa] h-[44px] rounded-lg"
					/>

					<CustomControllerSelect
						control={form.control}
						name="type"
						label="Tipo de categoria"
						className="w-full max-w-full bg-[#1e1e1e]"
						placeholder="Selecciona el tipo"
						items={[
							{ label: "Todas", value: "all" },
							{ label: "Ingreso", value: "Ingreso" },
							{ label: "Gasto", value: "Gasto" },
						]}
					/>
				</div>

				<div className="flex flex-wrap items-center gap-2 font-medium">
					<button type="submit" className="btn-white-primary-with-icon">
						<SearchIcon className="size-4" />
						Buscar
					</button>

					<button
						type="button"
						className="btn-purple-secondary-with-icon"
						onClick={handleClearFilters}
					>
						<Trash2Icon className="size-4" />
						Limpiar
					</button>

					<button
						type="button"
						className="btn-purple-secondary-with-icon"
						onClick={onOpenCreateDrawer}
					>
						<PlusIcon className="size-4" />
						Nueva categoria
					</button>
				</div>
			</form>
		</Form>
	);
};
