"use client";

import { PlusIcon, SearchIcon, Trash2Icon } from "lucide-react";
import { CustomSelect } from "@/modules/shared/components/custom-select/CustomSelect";
import { Input } from "@/modules/shared/ui/input";
import type { CategoryType } from "@/modules/wallets/interfaces/categories/category.interface";
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
	const {
		draftFilters,
		handleClearFilters,
		handleNameChange,
		handleSearch,
		handleTypeChange,
	} = useCategoryFiltersDraft({
		name,
		onClearFilters,
		onSearch,
		type,
	});

	return (
		<div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
			<div className="grid gap-3 sm:grid-cols-[minmax(0,260px)_minmax(0,220px)]">
				<label className="grid gap-2 text-sm font-medium text-[#d6d6d6]">
					Nombre
					<Input
						value={draftFilters.name ?? ""}
						onChange={(event) => handleNameChange(event.target.value)}
						onKeyDown={(event) => {
							if (event.key === "Enter") handleSearch();
						}}
						placeholder="Buscar categoria"
						className="min-h-11 rounded-xl border-white/10 bg-white/[0.04] text-white placeholder:text-[#707070]"
					/>
				</label>

				<CustomSelect
					label="Tipo de categoria"
					className="w-full max-w-full bg-[#1e1e1e]"
					value={draftFilters.type || "all"}
					placeholder="Selecciona el tipo"
					onValueChange={(value) =>
						handleTypeChange(value === "all" ? null : (value as CategoryType))
					}
					items={[
						{ label: "Todas", value: "all" },
						{ label: "Ingreso", value: "Ingreso" },
						{ label: "Gasto", value: "Gasto" },
					]}
				/>
			</div>

			<div className="flex flex-wrap items-center gap-2 font-medium">
				<button
					type="button"
					className="btn-white-primary-with-icon"
					onClick={handleSearch}
				>
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
		</div>
	);
};
