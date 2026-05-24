import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { TransactionEntity } from "@/modules/shared/interfaces/entities/transaction.entity";
import { deleteTransaction } from "@/modules/wallets/services/transactions.service";

export const useTransactionMutations = (onSuccess?: () => void) => {
	const queryClient = useQueryClient();

	const deleteMutation = useMutation({
		mutationFn: (transaction: TransactionEntity) =>
			deleteTransaction(transaction.id),
		onError: (error) => toast.error(error.message),
		onSuccess: (data) => {
			toast.success(data.message);
			queryClient.invalidateQueries({ queryKey: ["transactions"] });
			queryClient.invalidateQueries({ queryKey: ["reports"] });
			onSuccess?.();
		},
	});

	return {
		deleteTransaction: deleteMutation.mutateAsync,
		isDeleting: deleteMutation.isPending,
	};
};
