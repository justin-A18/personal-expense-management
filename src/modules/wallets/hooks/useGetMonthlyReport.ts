import { useQuery } from "@tanstack/react-query";
import { mappedMonthlyReportData } from "../mappers/month.mapper";
import { getReportMonthly } from "../services/transactions.service";
import { useWalletStore } from "../store/useWalletStore";

export const useGetMonthlyReport = () => {
	const currentWallet = useWalletStore((state) => state.wallet);

	const { data: reportMonthly, isFetching: isFetchingMonthlyReport } = useQuery({
		queryKey: ['monthly-report', { walletId: currentWallet?.id }],
		queryFn: async () => {
			const { data } = await getReportMonthly({
				from: '2025-07-01',
				to: '2025-12-31',
				walletId: currentWallet?.id ?? ''
			});
			return mappedMonthlyReportData(data);
		},
		initialData: [],
	});

	return {
		reportMonthly,
		isFetchingMonthlyReport
	};
};
