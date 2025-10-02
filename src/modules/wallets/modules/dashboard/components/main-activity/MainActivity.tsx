import { useMainActivity } from '../../hooks/useMainActivity';
import { ACTIVITY_COLUMNS, MOCK_ACTIVITY } from '../columns/activity.column';
import { HeaderMainActivity } from './HeaderMainActivity';
import { DataTable } from '@/modules/shared/components/data-table/DataTable';

export const MainActivity = () => {
	const { isFetchingWallet, walletData } = useMainActivity();

	return (
		<div className='2xl:col-span-2 p-6 2xl:row-span-4 rounded-lg bg-radial-[at_0%_0%] from-[#41334E] to-[#1E1E1E] to-30% space-y-4'>
			{!isFetchingWallet && walletData && (
				<HeaderMainActivity wallet={walletData} />
			)}

			<div className='mt-8 space-y-5'>
				<h2 className='text-2xl'>Actividad Reciente</h2>

				<DataTable
					hideHeader
					data={MOCK_ACTIVITY}
					columns={ACTIVITY_COLUMNS}
				/>
			</div>
		</div>
	);
};
