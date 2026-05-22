import type z from "zod";
import { CustomBarChart } from "@/modules/shared/components/charts/custom-bar-chart/CustomBarChart";
import type { ChartConfig } from "@/modules/shared/ui/chart";
import type { mappedMonthlyReportData } from "@/modules/wallets/mappers/month.mapper";

export const barChartConfig = {
	expense: {
		color: "#F87171",
		label: "Gastos",
	},
	income: {
		color: "#C78CFF",
		label: "Ingresos",
	},
} satisfies ChartConfig;

interface BarChartProps {
	data: z.infer<typeof mappedMonthlyReportData>[];
}

export const GridCardBarChart = ({ data }: BarChartProps) => {
	return (
		<CustomBarChart
			data={data}
			dataKeyX="month"
			firstBarKey="income"
			secondBarKey="expense"
			subtitle={`Julio - Diciembre ${new Date().getFullYear()}`}
			title="Comparativa Mensual de ingresos y gastos"
			config={barChartConfig}
		/>
	);
};
