import { useForm } from "react-hook-form";
import { useTransactionFiltersStore } from "../../../store/useTransactionFiltersStore";
import { advancedFiltersSchema, AdvancedFiltersSchema } from "../schema/transaction.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

export const useAdvancedFilters = () => {
	const filters = useTransactionFiltersStore((state) => state.filters);

	const form = useForm<AdvancedFiltersSchema>({
		resolver: zodResolver(advancedFiltersSchema),
		defaultValues: filters
	});

	useEffect(() => {
		form.reset(filters);
	}, [filters]);

	const watchFromDate = form.watch("from");

	const setFilters = useTransactionFiltersStore((state) => state.setFilters);

	const onSubmit = (data: AdvancedFiltersSchema) => {
		setFilters(data);
	};

	return {
		form,
		handleSubmit: form.handleSubmit(onSubmit),
		watchFromDate
	};
};
