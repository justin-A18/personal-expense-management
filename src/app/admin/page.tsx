'use client';

import { GridCardContainer } from '@/modules/admin/modules/dashboard/components/grid-cards/GridCardContainer';
import { MainActivity } from '@/modules/admin/modules/dashboard/components/main-activity/MainActivity';

const HomePage = () => {
	return (
		<section className='w-full grid grid-cols-1 2xl:grid-cols-3 2xl:grid-rows-4 gap-4'>
			<MainActivity />
			<GridCardContainer />
		</section>
	);
};

export default HomePage;
