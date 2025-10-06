import { MonthlyTransactionReportResponse } from "../interfaces/reports/get-report-weekly-response.interface";

const monthMapper: Record<string, string> = {
	January: 'Enero',
	February: 'Febrero',
	March: 'Marzo',
	April: 'Abril',
	May: 'Mayo',
	June: 'Junio',
	July: 'Julio',
	August: 'Agosto',
	September: 'Septiembre',
	October: 'Octubre',
	November: 'Noviembre',
	December: 'Diciembre',
};

export const mappedMonthlyReportData = (data: MonthlyTransactionReportResponse[]) => {
	return data.map((item) => ({
		month: monthMapper[item.month] || item.month,
		income: item.total_income,
		expense: item.total_expense,
	}));
};