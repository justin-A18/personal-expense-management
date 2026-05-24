import { formatDate } from "@/modules/shared/helpers/date-format";
import type {
	TrendMetric,
	TrendsComparisonMode,
} from "@/modules/wallets/interfaces/trends/get-trends-report.interface";
import { TRENDS_COMPARISON_LABELS } from "../const/trends-options";

export const getCurrentMonthDateRange = () => {
	const now = new Date();
	const from = new Date(now.getFullYear(), now.getMonth(), 1);
	const to = new Date(now.getFullYear(), now.getMonth() + 1, 0);

	return {
		from: formatDate(from),
		to: formatDate(to),
	};
};

export const getComparisonCopy = (mode: TrendsComparisonMode) =>
	`vs ${TRENDS_COMPARISON_LABELS[mode]}`;

export const getTrendChangeLabel = (changePercent: number | null) => {
	if (changePercent === null) return "Sin comparacion";

	const sign = changePercent > 0 ? "+" : "";
	return `${sign}${changePercent.toFixed(1)}%`;
};

export const getTrendTone = (metric: TrendMetric, invert = false) => {
	if (metric.changePercent === null || metric.changePercent === 0) {
		return "neutral";
	}

	const isPositive = metric.changePercent > 0;
	if (invert) return isPositive ? "danger" : "success";
	return isPositive ? "success" : "danger";
};

export const hasTrendData = (metrics: TrendMetric[]) =>
	metrics.some((metric) => metric.current !== 0 || metric.baseline !== 0);
