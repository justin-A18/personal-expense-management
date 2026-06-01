"use client";

import {
	ChartColumnDecreasingIcon,
	FolderOpenIcon,
	TagsIcon,
} from "lucide-react";
import { ConfirmationModal } from "@/modules/shared/components/confirmation-modal/ConfirmationModal";
import { DataTable } from "@/modules/shared/components/data-table/DataTable";
import { Pagination } from "@/modules/shared/components/pagination/Pagination";
import { Skeleton } from "@/modules/shared/ui/skeleton";
import { TemplateResults } from "@/modules/wallets/components/TemplateResults/TemplateResults";
import { WalletPageHeader } from "@/modules/wallets/components/WalletPageHeader/WalletPageHeader";
import { WalletPanel } from "@/modules/wallets/components/WalletPanel/WalletPanel";
import { WalletSection } from "@/modules/wallets/components/WalletSection/WalletSection";
import { WalletSummaryCard } from "@/modules/wallets/components/WalletSummaryCard/WalletSummaryCard";
import { WalletTableFooter } from "@/modules/wallets/components/WalletTableFooter/WalletTableFooter";
import { useCategoriesPage } from "../../hooks/useCategoriesPage";
import { CreateCategoryDrawer } from "../create-category/CreateCategoryDrawer";
import { CategoriesFilters } from "../filters/CategoriesFilters";

export const CategoriesView = () => {
	const {
		categoriesData,
		categoryToDelete,
		clearFilters,
		columns,
		filters,
		handleCloseDrawer,
		handleConfirmDelete,
		handleOpenCreateDrawer,
		handleSubmitCategory,
		isDeleting,
		isDrawerOpen,
		isFetchingCategories,
		isMutating,
		params,
		selectedCategory,
		setCategoryToDelete,
		setFilters,
		setParams,
		totalElements,
		totalPages,
	} = useCategoriesPage();

	return (
		<>
			<WalletSection>
				<WalletPageHeader
					eyebrow="Organización"
					title="Categorías"
					description="Clasifica tus ingresos y gastos para revisar mejor tus movimientos."
					icon={<TagsIcon className="size-6" />}
				/>

				<div className="mt-5 grid gap-3 sm:grid-cols-2">
					<WalletSummaryCard
						icon={<FolderOpenIcon className="size-5" />}
						label="Total"
						value={`${totalElements} categorías`}
					/>
					<WalletSummaryCard
						icon={<ChartColumnDecreasingIcon className="size-5" />}
						label="Vista actual"
						value={filters.type || "Todas"}
					/>
				</div>

				<WalletPanel className="mt-5">
					<CategoriesFilters
						name={filters?.name}
						type={filters?.type}
						onClearFilters={clearFilters}
						onOpenCreateDrawer={handleOpenCreateDrawer}
						onSearch={setFilters}
					/>
				</WalletPanel>

				<div className="mt-5 space-y-4">
					{isFetchingCategories && categoriesData.length === 0 ? (
						<Skeleton className="min-h-[calc(100vh-300px)] w-full rounded-2xl bg-white/[0.04]" />
					) : (
						<>
							<DataTable
								data={categoriesData}
								columns={columns}
								noDataComponent={
									<TemplateResults
										title="No hay categorías configuradas"
										description="Ajusta los filtros o crea una nueva categoría para clasificar tus transacciones."
									/>
								}
							/>
							<WalletTableFooter
								label={`${totalElements} registros encontrados`}
							>
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

			<CreateCategoryDrawer
				isDrawerOpen={isDrawerOpen}
				initialCategory={selectedCategory}
				isPending={isMutating}
				closeDrawer={handleCloseDrawer}
				onSubmitCategory={handleSubmitCategory}
			/>

			<ConfirmationModal
				isOpen={Boolean(categoryToDelete)}
				isLoading={isDeleting}
				title="Eliminar categoria"
				description={`Esta accion eliminara "${categoryToDelete?.name ?? ""}" si no tiene restricciones asociadas.`}
				confirmLabel="Eliminar"
				onClose={() => setCategoryToDelete(null)}
				onConfirm={() => {
					void handleConfirmDelete();
				}}
			/>
		</>
	);
};
