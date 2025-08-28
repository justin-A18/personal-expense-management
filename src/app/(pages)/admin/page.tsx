'use client';

import { GridCardContainer } from '@/app/_components/admin/dashboard/grid-cards/GridCardContainer';
import { MainActivity } from '@/app/_components/admin/dashboard/main-activity/MainActivity';
import React from 'react';

const page = () => {
	return (
		<section className='w-full min-h-[calc(100vh-150px)] grid grid-cols-1 2xl:grid-cols-3 2xl:grid-rows-5 gap-4'>
			<MainActivity />
			<GridCardContainer />

			<div className='p-6 bg-[#1E1E1E] 2xl:col-span-2 rounded-lg'></div>
		</section>
	);
};

export default page;
