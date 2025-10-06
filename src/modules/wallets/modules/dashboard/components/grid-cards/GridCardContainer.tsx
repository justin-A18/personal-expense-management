import { GridCardsLineChart } from './GridCardLineChart';
import { GridCardBarChart } from './GridCardBarChart';
import { useGridCard } from '../../hooks/useGridCard';

export const GridCardContainer = () => {
	const { reportWeekly, reportMonthly } = useGridCard();

	return (
		<div className='2xl:row-span-4 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-1 2xl:grid-rows-2 gap-4'>
			<GridCardsLineChart data={reportWeekly} />
			<GridCardBarChart data={reportMonthly} />
		</div>
	);
};
