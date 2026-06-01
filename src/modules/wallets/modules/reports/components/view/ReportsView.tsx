"use client";

import {
	ArrowDownIcon,
	ArrowUpIcon,
	ChartPieIcon,
	LineChartIcon,
	TargetIcon,
	TrendingUpIcon,
} from "lucide-react";
import { CustomBarChart } from "@/modules/shared/components/charts/custom-bar-chart/CustomBarChart";
import { CustomLineChart } from "@/modules/shared/components/charts/custom-line-chart/CustomLineChart";
import type { ChartConfig } from "@/modules/shared/ui/chart";
import { Skeleton } from "@/modules/shared/ui/skeleton";
import { WalletPageHeader } from "@/modules/wallets/components/WalletPageHeader/WalletPageHeader";
import { WalletPanel } from "@/modules/wallets/components/WalletPanel/WalletPanel";
import { WalletSection } from "@/modules/wallets/components/WalletSection/WalletSection";
import { WalletSummaryCard } from "@/modules/wallets/components/WalletSummaryCard/WalletSummaryCard";
import { useReports } from "../../hooks/useReports";
import { ReportsInsightCard } from "../ReportsInsightCard";
import { ReportsMonthFilter } from "../ReportsMonthFilter";

const chartConfig = {
	expense: {
		color: "#F87171",
		label: "Gastos",
	},
	income: {
		color: "#C78CFF",
		label: "Ingresos",
	},
} satisfies ChartConfig;

export const ReportsView = () => {
	const {
		currencyFormatter,
		handleMonthFilterChange,
		isFetchingReports,
		monthFilter,
		monthlyReport,
		totals,
		weeklyReport,
	} = useReports();

	return (
		<WalletSection>
			<WalletPageHeader
				eyebrow="Análisis"
				title="Reportes"
				description="Entiende cómo se comportan tus ingresos y gastos por semana y por mes."
				icon={<ChartPieIcon className="size-6" />}
			/>

			<div className="mt-5 grid gap-3 md:grid-cols-3">
				<WalletSummaryCard
					icon={<ArrowUpIcon className="size-5" />}
					label="Ingresos del periodo"
					value={currencyFormatter.format(totals.income)}
				/>
				<WalletSummaryCard
					icon={<ArrowDownIcon className="size-5" />}
					label="Gastos del periodo"
					value={currencyFormatter.format(totals.expense)}
				/>
				<WalletSummaryCard
					icon={<TrendingUpIcon className="size-5" />}
					label="Balance estimado"
					value={currencyFormatter.format(totals.balance)}
				/>
			</div>

			<WalletPanel className="mt-5">
				<ReportsMonthFilter
					from={monthFilter.from}
					to={monthFilter.to}
					onChange={handleMonthFilterChange}
				/>
			</WalletPanel>

			<div className="mt-5 grid w-full min-w-0 max-w-full grid-cols-1 gap-4 overflow-hidden xl:grid-cols-[minmax(0,1.35fr)_minmax(0,0.95fr)]">
				{isFetchingReports ? (
					<Skeleton className="min-h-[300px] rounded-2xl bg-white/[0.04] sm:min-h-[360px]" />
				) : (
					<CustomBarChart
						data={monthlyReport}
						dataKeyX="month"
						firstBarKey="income"
						secondBarKey="expense"
						title="Comparativo mensual"
						subtitle="Ingresos y gastos acumulados por mes."
						config={chartConfig}
					/>
				)}

				{isFetchingReports ? (
					<Skeleton className="min-h-[300px] rounded-2xl bg-white/[0.04] sm:min-h-[360px]" />
				) : (
					<CustomLineChart
						data={weeklyReport}
						dataKeyX="day"
						dataKeyY="income"
						secondDataKeyY="expense"
						title="Ritmo semanal"
						subtitle="Movimiento diario de ingresos y gastos de la semana actual."
						config={chartConfig}
					/>
				)}
			</div>

			<div className="mt-5 grid gap-3 md:grid-cols-3">
				<ReportsInsightCard
					icon={<TargetIcon className="size-5" />}
					label="Tasa de balance"
					value={`${totals.savingsRate}%`}
					description="Porcentaje que queda después de comparar ingresos contra gastos."
				/>
				<ReportsInsightCard
					icon={<LineChartIcon className="size-5" />}
					label="Mes con más gasto"
					value={totals.highestExpenseMonth.month}
					description={`${currencyFormatter.format(totals.highestExpenseMonth.expense)} registrados en gastos.`}
				/>
				<ReportsInsightCard
					icon={<ChartPieIcon className="size-5" />}
					label="Lectura rápida"
					value={totals.balance >= 0 ? "Balance positivo" : "Balance negativo"}
					description="Indicador simple para detectar si el periodo necesita revisión."
				/>
			</div>
		</WalletSection>
	);
};
