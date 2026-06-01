import { useMemo, useState } from "react";
import type { TransactionEntity } from "@/modules/shared/interfaces/entities/transaction.entity";
import { createTransactionsColumns } from "@/modules/wallets/components/columns/transaction.column";
import { useTransactionDelete } from "./useTransactionDelete";
import { useTransactions } from "./useTransactions";

export const useTransactionTable = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [selectedTransaction, setSelectedTransaction] =
		useState<TransactionEntity | null>(null);
	const [transactionToDelete, setTransactionToDelete] =
		useState<TransactionEntity | null>(null);

	const {
		params,
		totalElements,
		totalPages,
		transactionsData,
		setParams,
		isFetchingTransactions,
	} = useTransactions();

	const { deleteTransaction, isDeleting } = useTransactionDelete(() =>
		setTransactionToDelete(null),
	);

	const columns = useMemo(
		() =>
			createTransactionsColumns({
				onDelete: setTransactionToDelete,
				onEdit: (transaction) => {
					setSelectedTransaction(transaction);
					setIsDrawerOpen(true);
				},
			}),
		[],
	);

	const handleOpenCreateDrawer = () => {
		setSelectedTransaction(null);
		setIsDrawerOpen(true);
	};

	const handleCloseDrawer = () => {
		setSelectedTransaction(null);
		setIsDrawerOpen(false);
	};

	const handleConfirmDelete = async () => {
		if (!transactionToDelete) return;
		await deleteTransaction(transactionToDelete);
	};

	return {
		isDrawerOpen,
		selectedTransaction,
		transactionToDelete,
		columns,
		handleOpenCreateDrawer,
		handleCloseDrawer,
		handleConfirmDelete,
		isDeleting,
		params,
		totalElements,
		totalPages,
		transactionsData,
		setParams,
		isFetchingTransactions,
		setTransactionToDelete,
	};
};
