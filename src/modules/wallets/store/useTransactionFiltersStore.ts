import { create } from "zustand";
import { AdvancedFiltersSchema } from "../modules/transactions/schema/transaction.schema";

const initialValues = {
	type: "",
	from: "",
	to: "",
	orderBy: ""
};

export interface TransactionFiltersStore {
	filters: AdvancedFiltersSchema;
	params: Record<string, number>;
	setFilters: (filters: Partial<AdvancedFiltersSchema>) => void;
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
	clearFilters: () => set({
		filters: initialValues,
		params: { offset: 0, limit: 10 }
	}),
}));
