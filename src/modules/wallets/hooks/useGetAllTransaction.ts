import { useQuery } from "@tanstack/react-query";
import { getAllTransaction } from "../services/transactions.service";
import { useTransactionFiltersStore } from "../store/useTransactionFiltersStore";
import { useState } from "react";

export const useGetAllTransaction = () => {
	const filters = useTransactionFiltersStore((state) => state.filters);
	const params = useTransactionFiltersStore((state) => state.params);
	const [totalElements, setTotalElements] = useState(0);
	const [totalPages, setTotalPages] = useState(0);

	const { data: transactionsData, isFetching: isFetchingTransactions } = useQuery({
		queryKey: ['transactions', { filters, params }],
		queryFn: async () => {
			const { data } = await getAllTransaction(filters, params);
			setTotalElements(data.totalElements);
			setTotalPages(data.totalPages);
			return data.content;
		},
		initialData: [],
		enabled: !!filters.walletId
	});

	return {
		transactionsData,
		isFetchingTransactions,
		params,
		totalElements,
		totalPages
	};
};
