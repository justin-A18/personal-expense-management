import { Cell, Pie, PieChart } from "recharts";
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
	ChartTooltip,
	ChartTooltipContent,
} from "@/modules/shared/ui/chart";
import { cn } from "@/modules/shared/utils/cn";

interface CustomPieChartProps {
	categoryKey: string;
	chartClassName?: string;
	className?: string;
	config: ChartConfig;
	data: CategoricalChartProps["data"];
	subtitle: string;
	title: string;
	valueKey: string;
}

export function CustomPieChart({
	categoryKey,
	chartClassName,
	className,
	config,
	data,
	subtitle,
	title,
	valueKey,
}: CustomPieChartProps) {
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
				{data?.length ? (
					<div className="grid min-w-0 max-w-full gap-4 overflow-hidden lg:grid-cols-[minmax(0,1fr)_minmax(0,0.65fr)] lg:items-center">
						<ChartContainer
							config={config}
							className={cn(
								"h-[260px] min-h-0 w-full min-w-0 max-w-full overflow-hidden sm:h-[330px]",
								chartClassName,
							)}
						>
							<PieChart accessibilityLayer>
								<ChartTooltip
									cursor={false}
									content={<ChartTooltipContent className="text-white" />}
								/>
								<Pie
									data={data}
									dataKey={valueKey}
									nameKey={categoryKey}
									innerRadius={58}
									outerRadius={104}
									paddingAngle={3}
									stroke="rgba(255,255,255,0.12)"
									strokeWidth={1}
								>
									{data.map((item) => {
										const category = String(item[categoryKey]);
										return (
											<Cell key={category} fill={`var(--color-${category})`} />
										);
									})}
								</Pie>
							</PieChart>
						</ChartContainer>

						<div className="grid min-w-0 gap-2">
							{data.map((item) => {
								const category = String(item[categoryKey]);
								const label = config[category]?.label?.toString() ?? category;

								return (
									<div
										key={category}
										className="flex min-w-0 items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2"
									>
										<span className="flex min-w-0 items-center gap-2 text-sm text-white">
											<span
												className="size-2.5 shrink-0 rounded-full"
												style={{
													backgroundColor: `var(--color-${category})`,
												}}
											/>
											<span className="truncate">{label}</span>
										</span>
										<span className="shrink-0 text-xs font-semibold text-[#aaaaaa]">
											{Number(item[valueKey]).toLocaleString("es-PE")}
										</span>
									</div>
								);
							})}
						</div>
					</div>
				) : (
					<p className="rounded-xl border border-dashed border-white/10 p-4 text-sm text-[#aaaaaa]">
						Sin datos suficientes para esta seccion.
					</p>
				)}
			</CardContent>
		</Card>
	);
}
