import { WeeklyTransactionReportResponse } from "../interfaces/reports/get-report-weekly-response.interface";

const dayMapper: Record<string, string> = {
	Monday: 'Lunes',
	Tuesday: 'Martes',
	Wednesday: 'Miércoles',
	Thursday: 'Jueves',
	Friday: 'Viernes',
	Saturday: 'Sábado',
	Sunday: 'Domingo',
};

export const mappedWeeklyReportData = (data: WeeklyTransactionReportResponse[]) => {
	return data.map((item) => ({
		day: dayMapper[item.day] || item.day,
		total: item.total,
	}));
};