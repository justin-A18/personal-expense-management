export interface WeeklyTransactionReportResponse {
	day: string;
	total: number;
}

export interface MonthlyTransactionReportResponse{
	month: string;
	total_income: number;
	total_expense: number;
}