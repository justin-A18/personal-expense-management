import React from 'react';
import { GridCardsLineChart } from './GridCardLineChart';
import { GridCardBarChart } from './GridCardBarChart';
import { GridCardMultipleBarsChart } from './GridCardMultipleBarsChart';

export const GridCardContainer = () => {
	return (
		<div className='2xl:row-span-5 grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] 2xl:grid-cols-1 2xl:grid-rows-3 gap-4'>
			<GridCardsLineChart />
			<GridCardBarChart />
			<GridCardMultipleBarsChart />
		</div>
	);
};
