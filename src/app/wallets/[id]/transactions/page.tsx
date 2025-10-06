'use client';

import { DataTable } from '@/modules/shared/components/data-table/DataTable';
import { Pagination } from '@/modules/shared/components/pagination/Pagination';
import {
	MOCK_TRANSACTIONS,
	TRANSACTIONS_COLUMNS,
} from '@/modules/wallets/components/columns/transaction.column';
import { Filters } from '@/modules/wallets/components/Filters/Filters';

const TransactionsPage = () => {
	return (
		<section className='w-full bg-[#1E1E1E] p-4 rounded-lg space-y-6'>
			<Filters />

			<div className='space-y-4'>
				<DataTable
					data={MOCK_TRANSACTIONS}
					columns={TRANSACTIONS_COLUMNS}
				/>

				<Pagination
					onPageChange={() => {}}
					params={{}}
					totalElements={0}
					totalPages={0}
				/>
			</div>
		</section>
	);
};

export default TransactionsPage;
