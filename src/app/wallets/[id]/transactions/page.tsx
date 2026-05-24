"use client";

import { CircleDollarSignIcon, ReceiptTextIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { ConfirmationModal } from "@/modules/shared/components/confirmation-modal/ConfirmationModal";
import type { TransactionEntity } from "@/modules/shared/interfaces/entities/transaction.entity";
import { DataTable } from "@/modules/shared/components/data-table/DataTable";
import { Pagination } from "@/modules/shared/components/pagination/Pagination";
import { Skeleton } from "@/modules/shared/ui/skeleton";
import { createTransactionsColumns } from "@/modules/wallets/components/columns/transaction.column";
import { TemplateResults } from "@/modules/wallets/components/TemplateResults/TemplateResults";
import { WalletPageHeader } from "@/modules/wallets/components/WalletPageHeader/WalletPageHeader";
import { WalletPanel } from "@/modules/wallets/components/WalletPanel/WalletPanel";
import { WalletSection } from "@/modules/wallets/components/WalletSection/WalletSection";
import { WalletSummaryCard } from "@/modules/wallets/components/WalletSummaryCard/WalletSummaryCard";
import { WalletTableFooter } from "@/modules/wallets/components/WalletTableFooter/WalletTableFooter";
import { CreateTransactionDrawer } from "@/modules/wallets/modules/transactions/Filters/CreateTransactionDrawer";
import { Filters } from "@/modules/wallets/modules/transactions/Filters/Filters";
import { useTransactionMutations } from "@/modules/wallets/modules/transactions/hooks/useTransactionMutations";
import { useTransactions } from "@/modules/wallets/modules/transactions/hooks/useTransactions";

const TransactionsPage = () => {
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
	const { deleteTransaction, isDeleting } = useTransactionMutations(() =>
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

	return (
		<>
		<WalletSection>
			<WalletPageHeader
				eyebrow="Movimientos"
				title="Transacciones"
				description="Consulta, filtra y registra los movimientos de tu billetera."
				icon={<ReceiptTextIcon className="size-6" />}
			/>

			<div className="mt-5 grid gap-3 md:grid-cols-2">
				<WalletSummaryCard
					icon={<ReceiptTextIcon className="size-5" />}
					label="Registros"
					value={`${totalElements} transacciones`}
				/>

				<WalletSummaryCard
					icon={<CircleDollarSignIcon className="size-5" />}
					label="Vista actual"
					value={`${transactionsData.length} visibles`}
				/>
			</div>

			<WalletPanel className="mt-5">
				<Filters onOpenCreateDrawer={handleOpenCreateDrawer} />
			</WalletPanel>

			<div className="mt-5 space-y-4 w-full">
				{isFetchingTransactions && transactionsData.length === 0 ? (
					<Skeleton className="w-full min-h-[calc(100vh-300px)] rounded-2xl bg-white/[0.04]" />
				) : (
					<>
						<DataTable
							data={transactionsData}
							columns={columns}
							noDataComponent={
								<TemplateResults
									title="Sin actividad reciente"
									description="Aún no hay movimientos registrados. Aquí aparecerán tus transacciones más recientes una vez empieces a operar."
								/>
							}
						/>

						<WalletTableFooter
							label={`${totalElements} registros encontrados`}>
							<Pagination
								onPageChange={setParams}
								params={params}
								totalElements={totalElements}
								totalPages={totalPages}
							/>
						</WalletTableFooter>
					</>
				)}
			</div>
		</WalletSection>

		<CreateTransactionDrawer
			isDrawerOpen={isDrawerOpen}
			initialTransaction={selectedTransaction}
			closeDrawer={handleCloseDrawer}
		/>

		<ConfirmationModal
			isOpen={Boolean(transactionToDelete)}
			isLoading={isDeleting}
			title="Eliminar transacción"
			description={`Esta acción eliminará "${transactionToDelete?.description ?? ""}" y revertirá su efecto sobre el balance.`}
			confirmLabel="Eliminar"
			onClose={() => setTransactionToDelete(null)}
			onConfirm={() => {
				void handleConfirmDelete();
			}}
		/>
		</>
	);
};

export default TransactionsPage;
