'use client';

import { DataTable } from '@/modules/shared/components/data-table/DataTable';
import { Pagination } from '@/modules/shared/components/pagination/Pagination';
import { Skeleton } from '@/modules/shared/ui/skeleton';
import { TRANSACTIONS_COLUMNS } from '@/modules/wallets/components/columns/transaction.column';
import { TemplateResults } from '@/modules/wallets/components/TemplateResults/TemplateResults';

import { Filters } from '@/modules/wallets/modules/transactions/Filters/Filters';
import { useTransactions } from '@/modules/wallets/modules/transactions/hooks/useTransactions';

const TransactionsPage = () => {
	const {
		params,
		totalElements,
		totalPages,
		transactionsData,
		setParams,
		isFetchingTransactions,
	} = useTransactions();

	return (
		<section className='w-full bg-[#1E1E1E] p-4 rounded-lg space-y-6'>
			<Filters />

			<div className='space-y-4'>
				{isFetchingTransactions && transactionsData.length === 0 ? (
					<Skeleton className='w-full min-h-[calc(100vh-300px)]' />
				) : (
					<>
						<DataTable
							data={transactionsData}
							columns={TRANSACTIONS_COLUMNS}
							noDataComponent={
								<TemplateResults
									title='Sin actividad reciente'
									description='Aún no hay movimientos registrados. Aquí aparecerán tus transacciones más recientes una vez empieces a operar.'
								/>
							}
						/>

						<Pagination
							onPageChange={setParams}
							params={params}
							totalElements={totalElements}
							totalPages={totalPages}
						/>
					</>
				)}
			</div>
		</section>
	);
};

export default TransactionsPage;
