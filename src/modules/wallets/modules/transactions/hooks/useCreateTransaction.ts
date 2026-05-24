import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import type { TransactionEntity } from "@/modules/shared/interfaces/entities/transaction.entity";
import {
	createTransaction,
	updateTransaction,
} from "@/modules/wallets/services/transactions.service";
import { useWalletStore } from "@/modules/wallets/store/useWalletStore";
import {
	type CreateTransactionSchema,
	createTransactionSchema,
} from "../schema/transaction.schema";

const initialValues: CreateTransactionSchema = {
	type: "Gasto",
	description: "",
	amount: "",
	date: "",
	categoryId: "",
};

export const useCreateTransaction = (
	onSuccess?: () => void,
	initialTransaction?: TransactionEntity | null,
	isDrawerOpen = false,
) => {
	const queryClient = useQueryClient();
	const wallet = useWalletStore((state) => state.wallet);
	const mode = initialTransaction ? "edit" : "create";

	const form = useForm<CreateTransactionSchema>({
		mode: "onChange",
		resolver: zodResolver(createTransactionSchema),
		defaultValues: initialValues,
	});

	const { mutateAsync, isPending } = useMutation({
		mutationFn: (body: CreateTransactionSchema) => {
			const walletId = wallet?.id ?? initialTransaction?.wallet.id;
			if (!walletId) {
				throw new Error(
					"Selecciona una billetera antes de registrar la transacción",
				);
			}

			const requestBody = {
				...body,
				walletId,
			};

			if (initialTransaction) {
				return updateTransaction(initialTransaction.id, requestBody);
			}

			return createTransaction(requestBody);
		},
		onSuccess: (data) => {
			toast.success(data.message);
			form.reset(initialValues);
			queryClient.invalidateQueries({ queryKey: ["transactions"] });
			onSuccess?.();
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	const onSubmit = async (values: CreateTransactionSchema) => {
		await mutateAsync(values);
	};

	useEffect(() => {
		if (!isDrawerOpen) return;

		if (initialTransaction) {
			form.reset({
				amount: initialTransaction.amount,
				categoryId:
					initialTransaction.category?.id ?? initialTransaction.categoryId ?? "",
				date: initialTransaction.date,
				description: initialTransaction.description,
				type: initialTransaction.type,
			});
			return;
		}

		form.reset(initialValues);
	}, [form, initialTransaction, isDrawerOpen]);

	return {
		form,
		handleSubmit: form.handleSubmit(onSubmit),
		isPending,
		mode,
	};
};
