import { TransactionEntity } from '@/modules/shared/interfaces/entities/transaction.entity';
import { ColumnDef } from '@tanstack/react-table';
import { TRANSACTION_TYPE } from '../../enums';
import { formatCurrency } from '@/modules/shared/utils/formatCurrency.utils';

export const ACTIVITY_COLUMNS: ColumnDef<TransactionEntity>[] = [
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
