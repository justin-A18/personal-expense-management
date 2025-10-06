import { TransactionEntity } from '@/modules/shared/interfaces/entities/transaction.entity';
import { ColumnDef } from '@tanstack/react-table';
import { TRANSACTION_TYPE } from '../../modules/dashboard/enums';
import { formatCurrency } from '@/modules/shared/utils/formatCurrency.utils';

export const MOCK_TRANSACTIONS: TransactionEntity[] = [
	{
		id: 't1',
		type: TRANSACTION_TYPE.INCOME,
		description: 'Venta de laptop usada',
		amount: '1200.00',
		date: '2025-10-03',
		wallet: {
			id: 'b112238b4-288f-4937-a0a5-0481380e4e0e',
			name: 'Cuenta Principal',
			balance: '2500.00',
			avatar: '💰',
			currency: 'USD',
			user: {
				id: 'u1',
				email: 'justin@example.com',
				username: 'justinhuertas',
			},
		},
		createdAt: '2025-10-03T14:00:00Z',
		updatedAt: '2025-10-03T14:00:00Z',
	},
	{
		id: 't2',
		type: TRANSACTION_TYPE.EXPENSE,
		description: 'Compra de teclado mecánico',
		amount: '150.00',
		date: '2025-09-28',
		wallet: {
			id: 'b112238b4-288f-4937-a0a5-0481380e4e0e',
			name: 'Cuenta Principal',
			balance: '2350.00',
			avatar: '💰',
			currency: 'USD',
			user: {
				id: 'u1',
				email: 'justin@example.com',
				username: 'justinhuertas',
			},
		},
		createdAt: '2025-09-28T12:00:00Z',
		updatedAt: '2025-09-28T12:00:00Z',
	},
];
export const TRANSACTIONS_COLUMNS: ColumnDef<TransactionEntity>[] = [
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
							type === TRANSACTION_TYPE.INCOME ? 'bg-green-300' : 'bg-red-400'
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
						type === TRANSACTION_TYPE.INCOME ? 'text-green-300' : 'text-red-400'
					}`}>
					{type === TRANSACTION_TYPE.INCOME ? '+' : '-'}{' '}
					{formatCurrency(amount, row.original.wallet.currency)}
				</span>
			);
		},
	},
];
