import { useQuery } from "@tanstack/react-query";
import { getReportWeekly } from "../services/transactions.service";
import { TRANSACTION_TYPE } from "../modules/dashboard/enums";
import { useWalletStore } from "../store/useWalletStore";
import { mappedWeeklyReportData } from "../mappers/day.mapper";

export const useGetWeeklyReport = () => {
	const currentWallet = useWalletStore((state) => state.wallet);

	const { data: reportWeekly, isFetching: isFetchingReport } = useQuery({
		queryKey: ['weekly-report', { walletId: currentWallet?.id }],
		queryFn: async () => {
			const { data } = await getReportWeekly({
				from: '2025-10-06',
				to: '2025-10-12',
				type: TRANSACTION_TYPE.INCOME,
				walletId: currentWallet?.id ?? ''
			});
			return mappedWeeklyReportData(data);
		},
		initialData: [],
	});

	return {
		reportWeekly,
		isFetchingReport
	};
};
