"use client";

import {
	ArrowDownIcon,
	ArrowUpIcon,
	RefreshCcwIcon,
	ScaleIcon,
	TrendingUpIcon,
} from "lucide-react";
import { CustomBarChart } from "@/modules/shared/components/charts/custom-bar-chart/CustomBarChart";
import { CustomPieChart } from "@/modules/shared/components/charts/custom-pie-chart/CustomPieChart";
import { Button } from "@/modules/shared/ui/button";
import type { ChartConfig } from "@/modules/shared/ui/chart";
import { Skeleton } from "@/modules/shared/ui/skeleton";
import { WalletPageHeader } from "@/modules/wallets/components/WalletPageHeader/WalletPageHeader";
import { WalletPanel } from "@/modules/wallets/components/WalletPanel/WalletPanel";
import { WalletSection } from "@/modules/wallets/components/WalletSection/WalletSection";
import { useTrends } from "../../hooks/useTrends";
import { hasTrendData } from "../../utils/trends-formatters";
import { TrendsCategoryList } from "../TrendsCategoryList";
import { TrendsComparisonFilter } from "../TrendsComparisonFilter";
import { TrendsInsights } from "../TrendsInsights";
import { TrendsMetricCard } from "../TrendsMetricCard";

const temporalChartConfig = {
	expense: {
		color: "#F87171",
		label: "Gastos",
	},
	income: {
		color: "#C78CFF",
		label: "Ingresos",
	},
} satisfies ChartConfig;

const distributionColors = [
	"#C78CFF",
	"#60A5FA",
	"#34D399",
	"#F59E0B",
	"#F87171",
	"#A78BFA",
];

export const TrendsView = () => {
	const {
		comparisonMode,
		currencyFormatter,
		dateRange,
		handleDateRangeChange,
		isError,
		isFetching,
		refetch,
		setComparisonMode,
		trends,
	} = useTrends();

	const formatCurrency = (value: number) => currencyFormatter.format(value);
	const summary = trends?.summary;
	const hasSummary =
		summary &&
		hasTrendData([summary.income, summary.expense, summary.balance]);
	const spendingDistributionChartData =
		trends?.spendingDistribution.map((item) => ({
			...item,
			chartKey: item.categoryId.replace(/[^a-zA-Z0-9_-]/g, "_"),
		})) ?? [];
	const spendingDistributionChartConfig =
		spendingDistributionChartData.reduce((acc, item, index) => {
			acc[item.chartKey] = {
				color: distributionColors[index % distributionColors.length],
				label: item.categoryName,
			};
			return acc;
		}, {} as ChartConfig);

	return (
		<WalletSection>
			<WalletPageHeader
				eyebrow="Analisis"
				title="Tendencias"
				description="Compara tu periodo actual contra una referencia y detecta cambios relevantes."
				icon={<TrendingUpIcon className="size-6" />}
			/>

			<WalletPanel className="mt-5">
				<TrendsComparisonFilter
					comparisonMode={comparisonMode}
					from={dateRange.from}
					to={dateRange.to}
					onComparisonModeChange={setComparisonMode}
					onDateRangeChange={handleDateRangeChange}
				/>
			</WalletPanel>

			{isError && (
				<WalletPanel className="mt-5">
					<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<p className="text-sm font-semibold text-white">
								No se pudieron cargar las tendencias
							</p>
							<p className="mt-1 text-sm text-[#aaaaaa]">
								Verifica que el endpoint de backend este disponible para esta
								wallet.
							</p>
						</div>
						<Button
							type="button"
							variant="outline"
							className="gap-2 border-white/10 bg-white/[0.04] text-white hover:bg-purple-400/10 hover:text-white"
							onClick={() => refetch()}
						>
							<RefreshCcwIcon className="size-4" />
							Reintentar
						</Button>
					</div>
				</WalletPanel>
			)}

			{isFetching ? (
				<div className="mt-5 grid gap-3 md:grid-cols-3">
					<Skeleton className="h-[150px] rounded-2xl bg-white/[0.04]" />
					<Skeleton className="h-[150px] rounded-2xl bg-white/[0.04]" />
					<Skeleton className="h-[150px] rounded-2xl bg-white/[0.04]" />
				</div>
			) : summary ? (
				<div className="mt-5 grid gap-3 md:grid-cols-3">
					<TrendsMetricCard
						comparisonMode={comparisonMode}
						formatCurrency={formatCurrency}
						icon={<ArrowUpIcon className="size-5" />}
						label="Ingresos"
						metric={summary.income}
					/>
					<TrendsMetricCard
						comparisonMode={comparisonMode}
						formatCurrency={formatCurrency}
						icon={<ArrowDownIcon className="size-5" />}
						invertTone
						label="Gastos"
						metric={summary.expense}
					/>
					<TrendsMetricCard
						comparisonMode={comparisonMode}
						formatCurrency={formatCurrency}
						icon={<ScaleIcon className="size-5" />}
						label="Balance"
						metric={summary.balance}
					/>
				</div>
			) : null}

			{!isFetching && trends && !hasSummary && (
				<WalletPanel className="mt-5">
					<p className="text-sm font-semibold text-white">
						Sin movimientos para este periodo
					</p>
					<p className="mt-1 text-sm text-[#aaaaaa]">
						Cambia el rango de fechas o registra nuevos ingresos y gastos para
						ver tendencias.
					</p>
				</WalletPanel>
			)}

			{isFetching ? (
				<div className="mt-5 grid gap-4 xl:grid-cols-2">
					<Skeleton className="h-[330px] rounded-2xl bg-white/[0.04]" />
					<Skeleton className="h-[330px] rounded-2xl bg-white/[0.04]" />
				</div>
			) : trends ? (
				<div className="mt-5 grid min-w-0 max-w-full gap-4 overflow-hidden xl:grid-cols-2">
					<TrendsCategoryList
						formatCurrency={formatCurrency}
						items={trends.topGrowingCategories}
						mode="growth"
						title="Categorias que mas subieron"
					/>
					<CustomPieChart
						data={spendingDistributionChartData}
						categoryKey="chartKey"
						valueKey="amount"
						title="Distribucion del gasto"
						subtitle="Peso de cada categoria dentro del gasto actual."
						config={spendingDistributionChartConfig}
					/>
				</div>
			) : null}

			{isFetching ? (
				<Skeleton className="mt-5 h-[360px] rounded-2xl bg-white/[0.04]" />
			) : trends ? (
				<div className="mt-5 grid gap-4 xl:grid-cols-[minmax(0,1.3fr)_minmax(0,0.9fr)]">
					<CustomBarChart
						data={trends.temporalPattern}
						dataKeyX="label"
						firstBarKey="income"
						secondBarKey="expense"
						title="Patron temporal"
						subtitle="Ingresos y gastos dentro del periodo actual."
						config={temporalChartConfig}
					/>
					<TrendsInsights insights={trends.insights} />
				</div>
			) : null}
		</WalletSection>
	);
};
