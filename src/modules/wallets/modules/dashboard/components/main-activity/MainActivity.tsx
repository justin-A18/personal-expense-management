import { TemplateResults } from '@/modules/wallets/components/TemplateResults/TemplateResults';
import { useMainActivity } from '../../hooks/useMainActivity';
import { HeaderMainActivity } from './HeaderMainActivity';
import { DataTable } from '@/modules/shared/components/data-table/DataTable';
import { Pagination } from '@/modules/shared/components/pagination/Pagination';
import { Skeleton } from '@/modules/shared/ui/skeleton';
import { TRANSACTIONS_COLUMNS } from '@/modules/wallets/components/columns/transaction.column';

export const MainActivity = () => {
	const {
		isFetchingWallet,
		walletData,
		transactionsData,
		params,
		setParams,
		totalElements,
		totalPages,
	} = useMainActivity();

	return (
		<div className='2xl:col-span-2 p-6 2xl:row-span-4 rounded-lg bg-radial-[at_0%_0%] from-[#41334E] to-[#1E1E1E] to-30% space-y-4'>
			{!isFetchingWallet && walletData && (
				<HeaderMainActivity wallet={walletData} />
			)}

			<div className='mt-8 space-y-4'>
				<h2 className='text-2xl'>Actividad Reciente</h2>
				{isFetchingWallet && !transactionsData ? (
					<Skeleton />
				) : (
					<>
						<DataTable
							hideHeader
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
		</div>
	);
};
