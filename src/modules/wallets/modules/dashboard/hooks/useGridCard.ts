import { useGetMonthlyReport } from "@/modules/wallets/hooks/useGetMonthlyReport";
import { useGetWeeklyReport } from "@/modules/wallets/hooks/useGetWeeklyReport";

export const useGridCard = () => {
	const { reportWeekly, isFetchingWeeklyReport } = useGetWeeklyReport();
	const { isFetchingMonthlyReport, reportMonthly } = useGetMonthlyReport();

	return {
		reportWeekly,
		isFetchingWeeklyReport,
		reportMonthly,
		isFetchingMonthlyReport
	};
};
