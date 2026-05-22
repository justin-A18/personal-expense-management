import { useEffect } from "react";
import { useGetAllTransaction } from "@/modules/wallets/hooks/useGetAllTransaction";
import { useGetWalletById } from "@/modules/wallets/hooks/useGetWalletById";
import { useTransactionFiltersStore } from "@/modules/wallets/store/useTransactionFiltersStore";
import { FILTERS_DEFAULT_ACTIVITY, PARAMS_DEFAULT_ACTIVITY } from "../const";

export const useMainActivity = () => {
	const { isFetchingWallet, walletData } = useGetWalletById();
	const setFilters = useTransactionFiltersStore((state) => state.setFilters);
	const resetFilters = useTransactionFiltersStore(
		(state) => state.clearFilters,
	);
	const setParams = useTransactionFiltersStore((state) => state.setParams);
	const {
		transactionsData,
		isFetchingTransactions,
		params,
		totalElements,
		totalPages,
	} = useGetAllTransaction();

	useEffect(() => {
		setFilters(FILTERS_DEFAULT_ACTIVITY);
		setParams(PARAMS_DEFAULT_ACTIVITY);

		return () => {
			resetFilters();
		};
	}, [walletData]);

	return {
		walletData,
		isFetchingWallet,
		isFetchingTransactions,
		transactionsData,
		params,
		setParams,
		totalElements,
		totalPages,
	};
};
