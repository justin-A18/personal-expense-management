import { useState } from "react";
import { useTransactionFiltersStore } from "@/modules/wallets/store/useTransactionFiltersStore";

export const useFilters = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const resetFilters = useTransactionFiltersStore(
		(state) => state.clearFilters,
	);

	const openDrawer = () => setIsDrawerOpen(true);
	const closeDrawer = () => setIsDrawerOpen(false);

	return {
		isDrawerOpen,
		openDrawer,
		closeDrawer,
		resetFilters,
	};
};
