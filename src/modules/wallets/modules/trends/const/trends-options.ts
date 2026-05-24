import type { TrendsComparisonMode } from "@/modules/wallets/interfaces/trends/get-trends-report.interface";

export const TRENDS_COMPARISON_OPTIONS: {
	label: string;
	value: TrendsComparisonMode;
}[] = [
	{ label: "Periodo anterior", value: "previous_period" },
	{ label: "Ultimos 3 meses", value: "last_3_months" },
	{ label: "Ultimos 6 meses", value: "last_6_months" },
];

export const TRENDS_COMPARISON_LABELS: Record<TrendsComparisonMode, string> = {
	last_3_months: "promedio ultimos 3 meses",
	last_6_months: "promedio ultimos 6 meses",
	previous_period: "periodo anterior",
};
