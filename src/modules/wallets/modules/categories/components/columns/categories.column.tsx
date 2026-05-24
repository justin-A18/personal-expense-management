import type { ColumnDef } from "@tanstack/react-table";
import { PencilIcon, Trash2Icon } from "lucide-react";
import type { CategoryEntity } from "@/modules/wallets/interfaces/categories/category.interface";
import { getCategoryIcon } from "../../const/category-icons";

interface CreateCategoriesColumnsParams {
	onDelete: (category: CategoryEntity) => void;
	onEdit: (category: CategoryEntity) => void;
}

export const createCategoriesColumns = ({
	onDelete,
	onEdit,
}: CreateCategoriesColumnsParams): ColumnDef<CategoryEntity>[] => [
	{
		accessorKey: "name",
		header: "Nombre",
		cell: ({ row }) => {
			const Icon = getCategoryIcon(row.original.icon);

			return (
				<div className="flex items-center gap-3">
					<div className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-purple-100">
						<Icon className="size-4" />
					</div>
					<span className="font-medium text-white">{row.original.name}</span>
				</div>
			);
		},
	},
	{
		accessorKey: "description",
		header: "Descripcion",
		cell: ({ row }) => (
			<span className="line-clamp-2 text-sm text-[#aaaaaa]">
				{row.original.description}
			</span>
		),
	},
	{
		accessorKey: "type",
		header: "Tipo",
		cell: ({ row }) => {
			const type = row.original.type;

			return (
				<div className="flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white">
					<span
						className={`${
							type === "Ingreso" ? "bg-emerald-300" : "bg-red-400"
						} block size-2 rounded-full shadow-sm`}
					/>
					{type}
				</div>
			);
		},
	},
	{
		id: "actions",
		header: "Acciones",
		cell: ({ row }) => (
			<div className="flex items-center gap-2">
				<button
					type="button"
					aria-label="Editar categoria"
					className="inline-flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#d6d6d6] transition-colors hover:bg-purple-400/10 hover:text-white"
					onClick={() => onEdit(row.original)}
				>
					<PencilIcon className="size-4" />
				</button>
				<button
					type="button"
					aria-label="Eliminar categoria"
					className="inline-flex size-9 items-center justify-center rounded-xl border border-red-300/20 bg-red-500/10 text-red-100 transition-colors hover:bg-red-500/20"
					onClick={() => onDelete(row.original)}
				>
					<Trash2Icon className="size-4" />
				</button>
			</div>
		),
	},
];
