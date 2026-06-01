import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { TransactionEntity } from "@/modules/shared/interfaces/entities/transaction.entity";
import type { WalletEntity } from "@/modules/shared/interfaces/entities/wallet.entity";
import {
	createTransaction,
	updateTransaction,
} from "@/modules/wallets/services/transactions.service";
import type { CreateTransactionSchema } from "../schema/transaction.schema";

interface Props {
	initialTransaction?: TransactionEntity | null;
	callback: () => void;
	wallet?: WalletEntity | null;
}

export const useTransactionCreateOrUpdate = ({
	initialTransaction,
	wallet,
	callback,
}: Props) => {
	const queryClient = useQueryClient();

	const {
		mutateAsync: createOrUpdateTransaction,
		isPending: isFetchingCreatingOrUpdating,
	} = useMutation({
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
			queryClient.invalidateQueries({ queryKey: ["transactions"] });
			callback();
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	return {
		createOrUpdateTransaction,
		isFetchingCreatingOrUpdating,
	};
};
