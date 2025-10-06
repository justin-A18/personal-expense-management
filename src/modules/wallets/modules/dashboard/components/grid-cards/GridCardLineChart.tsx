import { CustomLineChart } from '@/modules/shared/components/charts/custom-line-chart/CustomLineChart';
import { ChartConfig } from '@/modules/shared/ui/chart';
import { WeeklyTransactionReportResponse } from '@/modules/wallets/interfaces/reports/get-report-weekly-response.interface';

export const lineChartConfig = {
	total: {
		label: 'Ingresos',
		color: '#C78CFF',
	},
} satisfies ChartConfig;

interface GridCardLineChartProps {
	data: WeeklyTransactionReportResponse[];
}

export const GridCardsLineChart = ({ data }: GridCardLineChartProps) => {
	return (
		<CustomLineChart
			data={data}
			config={lineChartConfig}
			dataKeyX='day'
			dataKeyY='total'
			subtitle={`Lunes - Domingo ${new Date().getFullYear()}`}
			title='Seguimiento Diario de ingresos'
		/>
	);
};
