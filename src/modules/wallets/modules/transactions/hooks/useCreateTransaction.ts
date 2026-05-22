import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { createTransaction } from "@/modules/wallets/services/transactions.service";
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
};

export const useCreateTransaction = (onSuccess?: () => void) => {
	const queryClient = useQueryClient();
	const wallet = useWalletStore((state) => state.wallet);

	const form = useForm<CreateTransactionSchema>({
		mode: "onChange",
		resolver: zodResolver(createTransactionSchema),
		defaultValues: initialValues,
	});

	const { mutateAsync, isPending } = useMutation({
		mutationFn: (body: CreateTransactionSchema) => {
			if (!wallet?.id) {
				throw new Error(
					"Selecciona una billetera antes de registrar la transacción",
				);
			}

			return createTransaction({
				...body,
				walletId: wallet.id,
			});
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

	return {
		form,
		handleSubmit: form.handleSubmit(onSubmit),
		isPending,
	};
};
