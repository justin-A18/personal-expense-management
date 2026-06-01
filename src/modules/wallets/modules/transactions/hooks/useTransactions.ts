import { useGetAllTransaction } from "@/modules/wallets/hooks/useGetAllTransaction";
import { useTransactionFiltersStore } from "../../../store/useTransactionFiltersStore";

export const useTransactions = () => {
	const {
		isFetchingTransactions,
		params,
		totalElements,
		totalPages,
		transactionsData,
	} = useGetAllTransaction();

	const setParams = useTransactionFiltersStore((state) => state.setParams);

	return {
		isFetchingTransactions,
		params,
		totalElements,
		totalPages,
		transactionsData,
		setParams,
	};
};
