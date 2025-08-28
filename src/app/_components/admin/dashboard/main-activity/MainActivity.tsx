import {
	ACTIVITY_COLUMNS,
	MOCK_ACTIVITY,
} from '@/app/_components/admin/dashboard/columns/activity.column';
import { DataTable } from '@/app/_components/shared/data-table/DataTable';
import { HeaderMainActivity } from './HeaderMainActivity';

export const MainActivity = () => {
	return (
		<div className='2xl:col-span-2 p-6 2xl:row-span-4 rounded-lg bg-radial-[at_0%_0%] from-[#41334E] to-[#1E1E1E] to-30% space-y-4'>
			<HeaderMainActivity />

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
