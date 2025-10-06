import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/modules/shared/ui/card';
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/modules/shared/ui/chart';
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';

interface Props {
	data: CategoricalChartProps['data'];
	config: ChartConfig;
	title: string;
	subtitle: string;
	dataKeyX: string;
	dataKeyY: string;
}

export function CustomLineChart({
	data,
	config,
	subtitle,
	title,
	dataKeyX,
	dataKeyY,
}: Props) {
	return (
		<Card className='bg-[#1E1E1E]'>
			<CardHeader className='text-white'>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{subtitle}</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={config}>
					<LineChart
						accessibilityLayer
						data={data}
						margin={{
							left: 12,
							right: 12,
						}}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey={dataKeyX}
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={
								<ChartTooltipContent
									hideLabel
									className='text-white [&>*]:space-x-1'
								/>
							}
						/>
						<Line
							dataKey={dataKeyY}
							type='monotone'
							stroke={`var(--color-${dataKeyY})`}
							strokeWidth={2}
							dot={false}
						/>
					</LineChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
