import { useQuery } from "@tanstack/react-query";
import { mappedMonthlyReportData } from "../mappers/month.mapper";
import { getReportMonthly } from "../services/transactions.service";
import { useWalletStore } from "../store/useWalletStore";
import { getLastSixMonthsRange } from "@/modules/shared/helpers/getCurrentMonthRange";

export const useGetMonthlyReport = () => {
	const currentWallet = useWalletStore((state) => state.wallet);

	const { data: reportMonthly, isFetching: isFetchingMonthlyReport } = useQuery({
		queryKey: ['monthly-report', { walletId: currentWallet?.id }],
		queryFn: async () => {
			const { data } = await getReportMonthly({
				from: getLastSixMonthsRange().from,
				to: getLastSixMonthsRange().to,
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
