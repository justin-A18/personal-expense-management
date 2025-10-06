import { useGetAllTransaction } from "@/modules/wallets/hooks/useGetAllTransaction";
import { useGetWalletById } from "@/modules/wallets/hooks/useGetWalletById";
import { useTransactionFiltersStore } from "@/modules/wallets/store/useTransactionFiltersStore";
import { useEffect } from "react";
import { FILTERS_DEFAULT_ACTIVITY, PARAMS_DEFAULT_ACTIVITY } from "../const";

export const useMainActivity = () => {
	const { isFetchingWallet, walletData } = useGetWalletById();
	const setFilters = useTransactionFiltersStore((state) => state.setFilters);
	const setParams = useTransactionFiltersStore((state) => state.setParams);
	const { transactionsData, isFetchingTransactions, params, totalElements, totalPages } = useGetAllTransaction();

	useEffect(() => {
		setFilters({
			...FILTERS_DEFAULT_ACTIVITY,
			walletId: walletData?.id,
		});

		setParams(PARAMS_DEFAULT_ACTIVITY);
	}, [walletData]);

	return {
		walletData,
		isFetchingWallet,
		isFetchingTransactions,
		transactionsData,
		params,
		setParams,
		totalElements,
		totalPages
	};
};
