import { useQuery } from "@tanstack/react-query";
import { getReportWeekly } from "../services/transactions.service";
import { TRANSACTION_TYPE } from "../modules/dashboard/enums";
import { useWalletStore } from "../store/useWalletStore";
import { mappedWeeklyReportData } from "../mappers/day.mapper";
import { getCurrentWeekRange } from "@/modules/shared/helpers/getCurrentWeekRange";

export const useGetWeeklyReport = () => {
	const currentWallet = useWalletStore((state) => state.wallet);

	const { data: reportWeekly, isFetching: isFetchingWeeklyReport } = useQuery({
		queryKey: ['weekly-report', { walletId: currentWallet?.id }],
		queryFn: async () => {
			const { data } = await getReportWeekly({
				from: getCurrentWeekRange().from,
				to: getCurrentWeekRange().to,
				type: TRANSACTION_TYPE.INCOME,
				walletId: currentWallet?.id ?? ''
			});
			return mappedWeeklyReportData(data);
		},
		initialData: [],
	});

	return {
		reportWeekly,
		isFetchingWeeklyReport
	};
};
