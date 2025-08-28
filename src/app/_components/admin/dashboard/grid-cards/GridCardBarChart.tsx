import { Bar, BarChart, XAxis } from 'recharts';
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '../../../ui/chart';

export const barChartData = [
	{ month: 'Enero', desktop: 186, mobile: 80 },
	{ month: 'Febrero', desktop: 305, mobile: 200 },
	{ month: 'Marzo', desktop: 237, mobile: 120 },
	{ month: 'Abril', desktop: 73, mobile: 190 },
	{ month: 'Mayo', desktop: 209, mobile: 130 },
	{ month: 'Junio', desktop: 214, mobile: 140 },
];

export const barChartConfig = {
	desktop: {
		label: 'Desktop',
		color: '#C78CFF',
	},
	mobile: {
		label: 'Mobile',
		color: '#C78CFF',
	},
} satisfies ChartConfig;

export const GridCardBarChart = () => {
	return (
		<div className='p-6 bg-[#1E1E1E] rounded-lg'>
			<ChartContainer
				config={barChartConfig}
				className='min-h-[200px] w-full'>
				<BarChart
					accessibilityLayer
					data={barChartData}>
					<XAxis
						dataKey='month'
						tickLine={false}
						tickMargin={10}
						axisLine={false}
						tickFormatter={(value) => value.slice(0, 3)}
					/>
					<ChartTooltip content={<ChartTooltipContent />} />
					<Bar
						dataKey='desktop'
						fill='var(--color-desktop)'
						radius={4}
						style={{
							background: '#000000',
						}}
					/>
					<Bar
						dataKey='mobile'
						fill='var(--color-mobile)'
						radius={4}
					/>
				</BarChart>
			</ChartContainer>
		</div>
	);
};
