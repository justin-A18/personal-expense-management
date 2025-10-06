import { ChartConfig } from '@/modules/shared/ui/chart';
import { CustomBarChart } from '@/modules/shared/components/charts/custom-bar-chart/CustomBarChart';
import { mappedMonthlyReportData } from '@/modules/wallets/mappers/month.mapper';
import z from 'zod';

export const barChartConfig = {
	income: {
		label: 'Ingresos:',
		color: '#C78CFF',
	},
	expense: {
		label: 'Gastos:',
		color: '#C78CFF',
	},
} satisfies ChartConfig;

interface BarChartProps {
	data: z.infer<typeof mappedMonthlyReportData>[];
}

export const GridCardBarChart = ({ data }: BarChartProps) => {
	return (
		<CustomBarChart
			data={data}
			dataKeyX='month'
			firstBarKey='income'
			secondBarKey='expense'
			subtitle={`Julio - Diciembre ${new Date().getFullYear()}`}
			title='Comparativa Mensual de ingresos y gastos'
			config={barChartConfig}
		/>
	);
};
