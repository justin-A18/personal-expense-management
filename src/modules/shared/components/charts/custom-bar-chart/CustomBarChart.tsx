import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import type { CategoricalChartProps } from "recharts/types/chart/generateCategoricalChart";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/modules/shared/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartLegend,
	ChartLegendContent,
	ChartTooltip,
	ChartTooltipContent,
} from "@/modules/shared/ui/chart";
import { cn } from "@/modules/shared/utils/cn";

interface Props {
	data: CategoricalChartProps["data"];
	config: ChartConfig;
	title: string;
	subtitle: string;
	dataKeyX: string;
	firstBarKey: string;
	secondBarKey: string;
	chartClassName?: string;
	className?: string;
	showLegend?: boolean;
}

export function CustomBarChart({
	chartClassName,
	className,
	data,
	config,
	subtitle,
	title,
	dataKeyX,
	firstBarKey,
	secondBarKey,
	showLegend = true,
}: Props) {
	return (
		<Card
			className={cn(
				"min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#252525]/90 p-0 shadow-none",
				className,
			)}
		>
			<CardHeader className="space-y-1 p-3 pb-0 text-white sm:p-4 sm:pb-0">
				<CardTitle className="text-base font-semibold">{title}</CardTitle>
				<CardDescription className="text-sm text-[#aaaaaa]">
					{subtitle}
				</CardDescription>
			</CardHeader>
			<CardContent className="min-w-0 overflow-hidden p-3 sm:p-4">
				<ChartContainer
					config={config}
					className={cn(
						"h-[260px] min-h-0 w-full min-w-0 max-w-full overflow-hidden sm:h-[330px]",
						chartClassName,
					)}
				>
					<BarChart
						accessibilityLayer
						data={data}
						margin={{ bottom: 4, left: -18, right: 4, top: 8 }}
					>
						<CartesianGrid
							vertical={false}
							stroke="rgba(255,255,255,0.08)"
						/>
						<XAxis
							dataKey={dataKeyX}
							tickLine={false}
							axisLine={false}
							interval="preserveStartEnd"
							minTickGap={12}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<YAxis
							tickLine={false}
							axisLine={false}
							width={28}
							tickFormatter={(value) =>
								Number(value) >= 1000
									? `${Math.round(Number(value) / 1000)}k`
									: `${value}`
							}
						/>
						<ChartTooltip
							content={
								<ChartTooltipContent className="text-white" />
							}
						/>
						{showLegend && (
							<ChartLegend
								content={
									<ChartLegendContent className="flex-wrap gap-2 text-xs sm:gap-4 text-white" />
								}
							/>
						)}
						<Bar
							dataKey={firstBarKey}
							fill={`var(--color-${firstBarKey})`}
							radius={[6, 6, 2, 2]}
						/>
						<Bar
							dataKey={secondBarKey}
							fill={`var(--color-${secondBarKey})`}
							radius={[6, 6, 2, 2]}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
