interface WeeklyReportItem {
	day: string;
	total: number;
}

export const dayOrder = [
	'Lunes',
	'Martes',
	'Miércoles',
	'Jueves',
	'Viernes',
	'Sábado',
	'Domingo',
];

export const buildWeeklyReport = (
	weeklyIncomeReport: WeeklyReportItem[],
	weeklyExpenseReport: WeeklyReportItem[],
) => {
	const weeklyMap = dayOrder.reduce<
		Record<string, { day: string; income: number; expense: number }>
	>((acc, day) => {
		acc[day] = { day, expense: 0, income: 0 };
		return acc;
	}, {});

	weeklyIncomeReport.forEach((item) => {
		weeklyMap[item.day] = {
			...weeklyMap[item.day],
			income: item.total,
		};
	});

	weeklyExpenseReport.forEach((item) => {
		weeklyMap[item.day] = {
			...weeklyMap[item.day],
			expense: item.total,
		};
	});

	return dayOrder.map((day) => weeklyMap[day]);
};
