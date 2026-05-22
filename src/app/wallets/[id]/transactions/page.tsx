"use client";

import { CircleDollarSignIcon, ReceiptTextIcon } from "lucide-react";
import { DataTable } from "@/modules/shared/components/data-table/DataTable";
import { Pagination } from "@/modules/shared/components/pagination/Pagination";
import { Skeleton } from "@/modules/shared/ui/skeleton";
import { TRANSACTIONS_COLUMNS } from "@/modules/wallets/components/columns/transaction.column";
import { TemplateResults } from "@/modules/wallets/components/TemplateResults/TemplateResults";
import { WalletPageHeader } from "@/modules/wallets/components/WalletPageHeader/WalletPageHeader";
import { WalletPanel } from "@/modules/wallets/components/WalletPanel/WalletPanel";
import { WalletSection } from "@/modules/wallets/components/WalletSection/WalletSection";
import { WalletSummaryCard } from "@/modules/wallets/components/WalletSummaryCard/WalletSummaryCard";
import { WalletTableFooter } from "@/modules/wallets/components/WalletTableFooter/WalletTableFooter";
import { Filters } from "@/modules/wallets/modules/transactions/Filters/Filters";
import { useTransactions } from "@/modules/wallets/modules/transactions/hooks/useTransactions";

const TransactionsPage = () => {
	const {
		params,
		totalElements,
		totalPages,
		transactionsData,
		setParams,
		isFetchingTransactions,
	} = useTransactions();

	return (
		<WalletSection>
			<WalletPageHeader
				eyebrow="Movimientos"
				title="Transacciones"
				description="Consulta, filtra y registra los movimientos de tu billetera."
				icon={<ReceiptTextIcon className="size-6" />}
			/>

			<div className="mt-5 grid gap-3 sm:grid-cols-2">
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
				<Filters />
			</WalletPanel>

			<div className="mt-5 space-y-4">
				{isFetchingTransactions && transactionsData.length === 0 ? (
					<Skeleton className="w-full min-h-[calc(100vh-300px)] rounded-2xl bg-white/[0.04]" />
				) : (
					<>
						<DataTable
							data={transactionsData}
							columns={TRANSACTIONS_COLUMNS}
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
	);
};

export default TransactionsPage;
