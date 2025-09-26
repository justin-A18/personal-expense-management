import { GridCardsLineChart } from './GridCardLineChart';
import { GridCardBarChart } from './GridCardBarChart';

export const GridCardContainer = () => {
	return (
		<div className='2xl:row-span-4 grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-1 2xl:grid-rows-2 gap-4'>
			<GridCardsLineChart />
			<GridCardBarChart />
		</div>
	);
};
