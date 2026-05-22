"use client";

import {
	ChartColumnDecreasingIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	FolderOpenIcon,
	PlusIcon,
	TagsIcon,
} from "lucide-react";
import { CustomSelect } from "@/modules/shared/components/custom-select/CustomSelect";
import { DataTable } from "@/modules/shared/components/data-table/DataTable";
import { WalletPageHeader } from "@/modules/wallets/components/WalletPageHeader/WalletPageHeader";
import { WalletPanel } from "@/modules/wallets/components/WalletPanel/WalletPanel";
import { WalletSection } from "@/modules/wallets/components/WalletSection/WalletSection";
import { WalletSummaryCard } from "@/modules/wallets/components/WalletSummaryCard/WalletSummaryCard";
import { WalletTableFooter } from "@/modules/wallets/components/WalletTableFooter/WalletTableFooter";
import {
	CATEGORIES_COLUMNS,
	MOCK_CATEGORIES,
} from "@/modules/wallets/modules/categories/components/columns/categories.column";

const CategoriesPage = () => {
	return (
		<WalletSection>
			<WalletPageHeader
				eyebrow="Organización"
				title="Categorías"
				description="Clasifica tus ingresos y gastos para revisar mejor tus movimientos."
				icon={<TagsIcon className="size-6" />}
				action={
					<button className="btn-purple-secondary-with-icon min-h-11 justify-center">
						<PlusIcon className="size-4" />
						Nueva categoría
					</button>
				}
			/>

			<div className="mt-5 grid gap-3 sm:grid-cols-2">
				<WalletSummaryCard
					icon={<FolderOpenIcon className="size-5" />}
					label="Total"
					value={`${MOCK_CATEGORIES.length} categorías`}
				/>

				<WalletSummaryCard
					icon={<ChartColumnDecreasingIcon className="size-5" />}
					label="Vista actual"
					value="Ingresos y gastos"
				/>
			</div>

			<WalletPanel className="mt-5">
				<div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
					<CustomSelect
						label="Tipo de categoría"
						className="w-full max-w-full sm:w-[280px]"
						defaultValue="income"
						placeholder="Selecciona el tipo"
						items={[
							{ label: "Categorías ingresos", value: "income" },
							{ label: "Categorías gastos", value: "expense" },
						]}
					/>

					<p className="text-sm text-[#aaaaaa]">
						Mostrando categorías configuradas para esta billetera.
					</p>
				</div>
			</WalletPanel>

			<div className="mt-5 space-y-4">
				<DataTable data={MOCK_CATEGORIES} columns={CATEGORIES_COLUMNS} />

				<WalletTableFooter
					label={`${MOCK_CATEGORIES.length} registros encontrados`}
				>
					<div className="flex items-center gap-2">
						<button className="inline-flex items-center gap-2 rounded-md border border-gray-700/60 px-3 py-2 text-sm text-gray-300 transition-all duration-200 hover:border-gray-500 hover:bg-[#C78CFF]/10 hover:text-white active:scale-[0.97]">
							<ChevronLeftIcon className="size-5 sm:size-4" />
							<span className="hidden sm:block">Anterior</span>
						</button>
						<button className="inline-flex items-center gap-2 rounded-md border border-gray-700/60 px-3 py-2 text-sm text-gray-300 transition-all duration-200 hover:border-gray-500 hover:bg-[#C78CFF]/10 hover:text-white active:scale-[0.97]">
							<span className="hidden sm:block">Siguiente</span>
							<ChevronRightIcon className="size-5 sm:size-4" />
						</button>
					</div>
				</WalletTableFooter>
			</div>
		</WalletSection>
	);
};

export default CategoriesPage;
