import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '../../../ui/chart';

import { type ChartConfig } from '@/app/_components/ui/chart';

export const multipleBarsChartData = [
	{ browser: 'comida', visitors: 275, fill: '#C78CFF' },
	{ browser: 'salud', visitors: 200, fill: '#C78CFF' },
	{ browser: 'uni', visitors: 173, fill: '#C78CFF' },
	{ browser: 'ocio', visitors: 187, fill: '#C78CFF' },
	{ browser: 'otros', visitors: 90, fill: '#C78CFF' },
];

export const multipleBarsChartConfig = {
	visitors: {
		label: 'Gastos',
	},
	comida: {
		label: 'Comida',
		color: '#C78CFF',
	},
	salud: {
		label: 'Salud',
		color: '#C78CFF',
	},
	estudios: {
		label: 'Uni',
		color: '#C78CFF',
	},
	ocio: {
		label: 'ocio',
		color: '#C78CFF',
	},
	otros: {
		label: 'Otros',
		color: '#C78CFF',
	},
} satisfies ChartConfig;

export const GridCardMultipleBarsChart = () => {
	return (
		<div className='p-6 bg-[#1E1E1E] rounded-lg'>
			<ChartContainer config={multipleBarsChartConfig}>
				<BarChart
					accessibilityLayer
					data={multipleBarsChartData}
					layout='vertical'
					margin={{
						left: 0,
					}}>
					<YAxis
						dataKey='browser'
						type='category'
						tickLine={false}
						tickMargin={10}
						axisLine={false}
					/>
					<XAxis
						dataKey='visitors'
						type='number'
						hide
					/>
					<ChartTooltip
						cursor={false}
						content={<ChartTooltipContent hideLabel />}
					/>
					<Bar
						dataKey='visitors'
						layout='vertical'
						radius={5}
					/>
				</BarChart>
			</ChartContainer>
		</div>
	);
};
