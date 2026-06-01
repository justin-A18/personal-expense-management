import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTransactionFiltersStore } from "../../../store/useTransactionFiltersStore";
import {
	type AdvancedFiltersSchema,
	advancedFiltersSchema,
} from "../schema/transaction.schema";

export const useAdvancedFilters = () => {
	const filters = useTransactionFiltersStore((state) => state.filters);
	const setFilters = useTransactionFiltersStore((state) => state.setFilters);

	const form = useForm<AdvancedFiltersSchema>({
		resolver: zodResolver(advancedFiltersSchema),
		defaultValues: filters,
	});
	const { reset } = form;

	useEffect(() => {
		reset(filters);
	}, [filters, reset]);

	const watchFromDate = form.watch("from");

	const onSubmit = (data: AdvancedFiltersSchema) => {
		setFilters(data);
	};

	return {
		form,
		handleSubmit: form.handleSubmit(onSubmit),
		watchFromDate,
	};
};
