import React from 'react';
import { useTransactionFiltersStore } from '../../../store/useTransactionFiltersStore';
import { useGetAllTransaction } from '@/modules/wallets/hooks/useGetAllTransaction';

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
