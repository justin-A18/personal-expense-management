import { ColumnDef } from '@tanstack/react-table';

export type Activity = {
	date: string;
	amount: number;
	description: string;
	type: string;
	balance: number;
};

export const ACTIVITY_COLUMNS: ColumnDef<Activity>[] = [
	{
		accessorKey: 'date',
		header: 'Fecha',
	},
	{
		accessorKey: 'description',
		header: 'Descripción',
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
		accessorKey: 'amount',
		header: 'Monto',
		cell: ({ row }) => {
			const amount = row.original.amount;
			const type = row.original.type;
			return (
				<span
					className={`${
						type === 'ingreso' ? 'text-green-300' : 'text-red-400'
					}`}>
					{type === 'ingreso' ? '+' : '-'} ${amount}
				</span>
			);
		},
	},
	{
		accessorKey: 'balance',
		header: 'Balance',
		cell: ({ row }) => {
			const balance = row.original.balance;
			return <span>${balance}</span>;
		},
	},
];

export const MOCK_ACTIVITY: Activity[] = [
	{
		date: '2025-08-01',
		description: 'Sueldo mensual',
		type: 'ingreso',
		amount: 2500,
		balance: 2500,
	},
	{
		date: '2025-08-02',
		description: 'Compra supermercado',
		type: 'gasto',
		amount: 300,
		balance: 2200,
	},
	{
		date: '2025-08-03',
		description: 'Pago de internet',
		type: 'gasto',
		amount: 100,
		balance: 2100,
	},
	{
		date: '2025-08-04',
		description: 'Venta de artículos usados',
		type: 'ingreso',
		amount: 150,
		balance: 2250,
	},
	{
		date: '2025-08-05',
		description: 'Cine con amigos',
		type: 'gasto',
		amount: 80,
		balance: 2170,
	},
	{
		date: '2025-08-05',
		description: 'Cine con amigos',
		type: 'gasto',
		amount: 80,
		balance: 2170,
	},
	{
		date: '2025-08-05',
		description: 'Cine con amigos',
		type: 'gasto',
		amount: 80,
		balance: 2170,
	},
	{
		date: '2025-08-05',
		description: 'Cine con amigos',
		type: 'gasto',
		amount: 80,
		balance: 2170,
	},
];
