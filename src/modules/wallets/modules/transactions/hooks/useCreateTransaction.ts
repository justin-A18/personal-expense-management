import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { TransactionEntity } from "@/modules/shared/interfaces/entities/transaction.entity";
import { CREATE_TRANSACTION_INITIAL_VALUES } from "@/modules/wallets/constants/defaults-values.const";
import { useWalletStore } from "@/modules/wallets/store/useWalletStore";
import {
	type CreateTransactionSchema,
	createTransactionSchema,
} from "../schema/transaction.schema";
import { useTransactionCreateOrUpdate } from "./useTransactionCreateOrUpdate";

export const useCreateTransaction = (
	onSuccess?: () => void,
	initialTransaction?: TransactionEntity | null,
	isDrawerOpen = false,
) => {
	const wallet = useWalletStore((state) => state.wallet);
	const mode = initialTransaction ? "edit" : "create";

	const form = useForm<CreateTransactionSchema>({
		mode: "onChange",
		resolver: zodResolver(createTransactionSchema),
		defaultValues: CREATE_TRANSACTION_INITIAL_VALUES,
	});

	const { createOrUpdateTransaction, isFetchingCreatingOrUpdating } =
		useTransactionCreateOrUpdate({
			initialTransaction,
			wallet,
			callback: () => {
				form.reset(CREATE_TRANSACTION_INITIAL_VALUES);
				onSuccess?.();
			},
		});

	useEffect(() => {
		if (!isDrawerOpen) return;

		if (initialTransaction) {
			form.reset({
				amount: initialTransaction.amount,
				categoryId: initialTransaction.categoryId ?? "",
				date: initialTransaction.date,
				description: initialTransaction.description,
				type: initialTransaction.type,
			});
			return;
		}

		form.reset(CREATE_TRANSACTION_INITIAL_VALUES);
	}, [form, initialTransaction, isDrawerOpen]);

	const onSubmit = async (values: CreateTransactionSchema) => {
		await createOrUpdateTransaction(values);
	};

	return {
		form,
		handleSubmit: form.handleSubmit(onSubmit),
		isPending: isFetchingCreatingOrUpdating,
		mode,
	};
};
