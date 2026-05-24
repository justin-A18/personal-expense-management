import type {
	TrendsComparisonMode,
	TrendsReportResponse,
} from "@/modules/wallets/interfaces/trends/get-trends-report.interface";

const baselineMultiplier: Record<TrendsComparisonMode, number> = {
	last_3_months: 0.88,
	last_6_months: 0.82,
	previous_period: 0.93,
};

const comparisonPeriodByMode: Record<
	TrendsComparisonMode,
	TrendsReportResponse["comparisonPeriod"]
> = {
	last_3_months: {
		from: "2026-02-01",
		to: "2026-04-30",
	},
	last_6_months: {
		from: "2025-11-01",
		to: "2026-04-30",
	},
	previous_period: {
		from: "2026-04-01",
		to: "2026-04-30",
	},
};

export const buildMockTrendsReport = ({
	comparisonMode,
	from,
	to,
}: {
	comparisonMode: TrendsComparisonMode;
	from: string;
	to: string;
}): TrendsReportResponse => {
	const multiplier = baselineMultiplier[comparisonMode];
	const expenseBaseline = Math.round(2140 * multiplier);
	const incomeBaseline = Math.round(
		3850 * (comparisonMode === "previous_period" ? 1.04 : 0.96),
	);
	const balanceBaseline = incomeBaseline - expenseBaseline;

	return {
		comparisonMode,
		comparisonPeriod: comparisonPeriodByMode[comparisonMode],
		currentPeriod: {
			from,
			to,
		},
		insights: [
			{
				description:
					"Los gastos crecieron por encima de la referencia seleccionada. Revisa las categorias con mayor movimiento.",
				title: "Gasto acelerado",
				type: "warning",
			},
			{
				description:
					"Comida concentra la mayor parte del aumento y representa casi un tercio del gasto del periodo.",
				title: "Categoria sensible",
				type: "danger",
			},
			{
				description:
					"Los ingresos se mantienen estables frente a la base de comparacion.",
				title: "Ingresos controlados",
				type: "success",
			},
		],
		spendingDistribution: [
			{
				amount: 740,
				categoryId: "food",
				categoryName: "Comida",
				percentage: 34.6,
			},
			{
				amount: 430,
				categoryId: "transport",
				categoryName: "Transporte",
				percentage: 20.1,
			},
			{
				amount: 360,
				categoryId: "services",
				categoryName: "Servicios",
				percentage: 16.8,
			},
			{
				amount: 280,
				categoryId: "entertainment",
				categoryName: "Entretenimiento",
				percentage: 13.1,
			},
			{
				amount: 330,
				categoryId: "other",
				categoryName: "Otros",
				percentage: 15.4,
			},
		],
		summary: {
			balance: {
				baseline: balanceBaseline,
				changePercent: Number(
					(((1710 - balanceBaseline) / balanceBaseline) * 100).toFixed(1),
				),
				current: 1710,
			},
			expense: {
				baseline: expenseBaseline,
				changePercent: Number(
					(((2140 - expenseBaseline) / expenseBaseline) * 100).toFixed(1),
				),
				current: 2140,
			},
			income: {
				baseline: incomeBaseline,
				changePercent: Number(
					(((3850 - incomeBaseline) / incomeBaseline) * 100).toFixed(1),
				),
				current: 3850,
			},
		},
		temporalPattern: [
			{ expense: 190, income: 0, label: "Lun" },
			{ expense: 280, income: 1250, label: "Mar" },
			{ expense: 240, income: 0, label: "Mie" },
			{ expense: 410, income: 0, label: "Jue" },
			{ expense: 520, income: 2100, label: "Vie" },
			{ expense: 330, income: 0, label: "Sab" },
			{ expense: 170, income: 500, label: "Dom" },
		],
		topGrowingCategories: [
			{
				baselineAmount: 520,
				categoryId: "food",
				categoryName: "Comida",
				changePercent: 42.3,
				currentAmount: 740,
				type: "Gasto",
			},
			{
				baselineAmount: 290,
				categoryId: "transport",
				categoryName: "Transporte",
				changePercent: 48.3,
				currentAmount: 430,
				type: "Gasto",
			},
			{
				baselineAmount: 250,
				categoryId: "entertainment",
				categoryName: "Entretenimiento",
				changePercent: 12,
				currentAmount: 280,
				type: "Gasto",
			},
		],
	};
};
