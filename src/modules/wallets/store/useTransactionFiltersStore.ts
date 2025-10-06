import { create } from "zustand";
import { GetAllTransactionsRequest } from "../interfaces/transactions/get-all-transactions-request.interface";

const initialValues: GetAllTransactionsRequest = {
	walletId: "",
	category: null,
	type: null,
	from: null,
	to: null,
	orderBy: null,
};

export interface TransactionFiltersStore {
	filters: GetAllTransactionsRequest;
	params: Record<string, number>;
	setFilters: (filters: Partial<GetAllTransactionsRequest>) => void;
	setParams: (params: Record<string, number>) => void;
	clearFilters: () => void;
}

export const useTransactionFiltersStore = create<TransactionFiltersStore>((set) => ({
	filters: initialValues,
	params: { offset: 0, limit: 10 },
	setParams: (params) => set((state) => ({ params: { ...state.params, ...params } })),
	setFilters: (filters) =>
		set((state) => ({
			filters: { ...state.filters, ...filters },
		})),
	clearFilters: () => set({ filters: initialValues }),
}));
