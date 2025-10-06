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
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { CategoricalChartProps } from 'recharts/types/chart/generateCategoricalChart';

interface Props {
	data: CategoricalChartProps['data'];
	config: ChartConfig;
	title: string;
	subtitle: string;
	dataKeyX: string;
	firstBarKey: string;
	secondBarKey: string;
}

export function CustomBarChart({
	data,
	config,
	subtitle,
	title,
	dataKeyX,
	firstBarKey,
	secondBarKey,
}: Props) {
	return (
		<Card className='bg-[#1E1E1E]'>
			<CardHeader className='text-white'>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{subtitle}</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer
					config={config}
					className='min-h-[200px] w-full'>
					<BarChart
						accessibilityLayer
						data={data}>
						<XAxis
							dataKey={dataKeyX}
							tickMargin={10}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							content={
								<ChartTooltipContent className='text-white [&>*]:space-x-1' />
							}
						/>
						<Bar
							dataKey={firstBarKey}
							fill={`var(--color-${firstBarKey})`}
							radius={4}
							style={{
								background: '#000000',
							}}
						/>
						<Bar
							dataKey={secondBarKey}
							fill={`var(--color-${secondBarKey})`}
							radius={4}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
