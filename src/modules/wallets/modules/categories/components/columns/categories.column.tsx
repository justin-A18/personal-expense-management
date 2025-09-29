import { ColumnDef } from '@tanstack/react-table';

export type Category = {
	name: string;
	type: string;
	color: string;
};

export const CATEGORIES_COLUMNS: ColumnDef<Category>[] = [
	{
		accessorKey: 'name',
		header: 'Nombre',
	},
	{
		accessorKey: 'type',
		header: 'Tipo',
		cell: ({ row }) => {
			const type = row.original.type;
			return (
				<div
					className={
						'flex items-center gap-2 bg-[#434343] px-4 py-1 w-fit rounded-3xl'
					}>
					<span
						className={`${
							type === 'ingreso' ? 'bg-green-300' : 'bg-red-400'
						} size-2 rounded-full block`}></span>
					{type.charAt(0).toUpperCase() + type.slice(1)}
				</div>
			);
		},
	},
	{
		accessorKey: 'color',
		header: 'Color',
		cell: ({ row }) => {
			const color = row.original.color;
			return (
				<div
					className={`w-6 h-6 rounded-full`}
					style={{ backgroundColor: color }}></div>
			);
		},
	},
];

export const MOCK_CATEGORIES: Category[] = [
	{
		name: 'Salario mensual',
		type: 'ingreso',
		color: '#34D399',
	},
	{
		name: 'Venta de productos',
		type: 'ingreso',
		color: '#3B82F6',
	},
	{
		name: 'Pago de servicios',
		type: 'gasto',
		color: '#EF4444',
	},
	{
		name: 'Compra de insumos',
		type: 'gasto',
		color: '#F59E0B',
	},
	{
		name: 'Ingresos por inversiones',
		type: 'ingreso',
		color: '#8B5CF6',
	},
];
