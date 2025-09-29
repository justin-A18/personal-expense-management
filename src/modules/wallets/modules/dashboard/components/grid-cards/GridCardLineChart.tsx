import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/modules/shared/ui/chart';
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

export const lineChartData = [
	{ month: 'Lunes', desktop: 186 },
	{ month: 'Martes', desktop: 305 },
	{ month: 'Miercoles', desktop: 237 },
	{ month: 'Jueves', desktop: 73 },
	{ month: 'Viernes', desktop: 209 },
	{ month: 'Sabado', desktop: 214 },
	{ month: 'Domingo', desktop: 214 },
];

export const lineChartConfig = {
	desktop: {
		label: 'Balance',
		color: '#C78CFF',
	},
} satisfies ChartConfig;

export const GridCardsLineChart = () => {
	return (
		<div className='p-6 bg-[#1E1E1E] rounded-lg flex flex-col justify-center'>
			<ChartContainer config={lineChartConfig}>
				<LineChart
					accessibilityLayer
					data={lineChartData}
					margin={{
						left: 12,
						right: 12,
					}}>
					<CartesianGrid vertical={false} />
					<XAxis
						dataKey='month'
						tickLine={false}
						axisLine={false}
						tickMargin={8}
						tickFormatter={(value) => value.slice(0, 3)}
					/>
					<ChartTooltip
						cursor={false}
						content={<ChartTooltipContent hideLabel />}
					/>
					<Line
						dataKey='desktop'
						type='natural'
						stroke='var(--color-desktop)'
						strokeWidth={2}
						dot={false}
					/>
				</LineChart>
			</ChartContainer>
		</div>
	);
};
