import { useQuery } from "@tanstack/react-query";
import { getAllTransaction } from "../services/transactions.service";
import { useTransactionFiltersStore } from "../store/useTransactionFiltersStore";
import { useState } from "react";
import { useWalletStore } from "../store/useWalletStore";
import { emptyStringsToNull } from "@/modules/shared/helpers/emptyStringsToNull";

export const useGetAllTransaction = () => {
	const filters = useTransactionFiltersStore((state) => state.filters);
	const wallet = useWalletStore((state) => state.wallet);
	const params = useTransactionFiltersStore((state) => state.params);
	const [totalElements, setTotalElements] = useState(0);
	const [totalPages, setTotalPages] = useState(0);

	const { data: transactionsData, isFetching: isFetchingTransactions } = useQuery({
		queryKey: ['transactions', { filters, params, walletId: wallet?.id }],
		queryFn: async () => {
			const newFilters = emptyStringsToNull(filters);
			const filtersBody = {
				...newFilters,
				walletId: wallet!.id
			};

			const { data } = await getAllTransaction(filtersBody, params);
			setTotalElements(data.totalElements);
			setTotalPages(data.totalPages);
			return data.content;
		},
		initialData: [],
		enabled: !!wallet?.id && !!params,
	});

	return {
		transactionsData,
		isFetchingTransactions,
		params,
		totalElements,
		totalPages
	};
};
