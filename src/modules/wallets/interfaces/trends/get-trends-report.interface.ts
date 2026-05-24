export type TrendsComparisonMode =
	| "previous_period"
	| "last_3_months"
	| "last_6_months";

export interface GetTrendsReportRequest {
	comparisonMode: TrendsComparisonMode;
	from: string;
	to: string;
	walletId: string;
}

export interface TrendMetric {
	baseline: number;
	changePercent: number | null;
	current: number;
}

export interface TrendCategoryGrowth {
	baselineAmount: number;
	categoryId: string;
	categoryName: string;
	changePercent: number | null;
	currentAmount: number;
	type: "Gasto" | "Ingreso";
}

export interface TrendCategoryDistribution {
	amount: number;
	categoryId: string;
	categoryName: string;
	percentage: number;
}

export interface TrendTemporalPoint {
	expense: number;
	income: number;
	label: string;
}

export interface TrendInsight {
	description: string;
	title: string;
	type: "success" | "warning" | "danger" | "info";
}

export interface TrendsReportResponse {
	comparisonMode: TrendsComparisonMode;
	comparisonPeriod: {
		from: string;
		to: string;
	};
	currentPeriod: {
		from: string;
		to: string;
	};
	insights: TrendInsight[];
	spendingDistribution: TrendCategoryDistribution[];
	summary: {
		balance: TrendMetric;
		expense: TrendMetric;
		income: TrendMetric;
	};
	temporalPattern: TrendTemporalPoint[];
	topGrowingCategories: TrendCategoryGrowth[];
}
