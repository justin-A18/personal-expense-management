"use client";

import { ChartColumnDecreasingIcon, FolderOpenIcon, TagsIcon } from "lucide-react";
import { useMemo, useState } from "react";
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
import type { CategoryEntity } from "@/modules/wallets/interfaces/categories/category.interface";
import { createCategoriesColumns } from "@/modules/wallets/modules/categories/components/columns/categories.column";
import { CreateCategoryDrawer } from "@/modules/wallets/modules/categories/components/create-category/CreateCategoryDrawer";
import { CategoriesFilters } from "@/modules/wallets/modules/categories/components/filters/CategoriesFilters";
import { useCategories } from "@/modules/wallets/modules/categories/hooks/useCategories";
import { useCategoryMutations } from "@/modules/wallets/modules/categories/hooks/useCategoryMutations";
import type { CreateCategorySchema } from "@/modules/wallets/modules/categories/schema/category.schema";

const CategoriesPage = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [selectedCategory, setSelectedCategory] =
		useState<CategoryEntity | null>(null);
	const [categoryToDelete, setCategoryToDelete] =
		useState<CategoryEntity | null>(null);
	const {
		categories,
		clearFilters,
		filters,
		isFetching,
		params,
		setFilters,
		setParams,
		totalElements,
		totalPages,
	} = useCategories();
	const {
		createCategory,
		deleteCategory,
		isCreating,
		isDeleting,
		isUpdating,
		updateCategory,
	} = useCategoryMutations(() => setCategoryToDelete(null));
	const columns = useMemo(
		() =>
			createCategoriesColumns({
				onDelete: setCategoryToDelete,
				onEdit: (category) => {
					setSelectedCategory(category);
					setIsDrawerOpen(true);
				},
			}),
		[],
	);
	const isMutating = isCreating || isUpdating;

	const handleOpenCreateDrawer = () => {
		setSelectedCategory(null);
		setIsDrawerOpen(true);
	};

	const handleSubmitCategory = async (values: CreateCategorySchema) => {
		if (selectedCategory) {
			await updateCategory({ body: values, id: selectedCategory.id });
			return;
		}

		await createCategory(values);
	};

	const handleCloseDrawer = () => {
		setIsDrawerOpen(false);
		setSelectedCategory(null);
	};

	const handleConfirmDelete = async () => {
		if (!categoryToDelete) return;
		await deleteCategory(categoryToDelete);
	};

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
						name={filters.name}
						type={filters.type}
						onClearFilters={clearFilters}
						onOpenCreateDrawer={handleOpenCreateDrawer}
						onSearch={setFilters}
					/>
				</WalletPanel>

				<div className="mt-5 space-y-4">
					{isFetching && categories.length === 0 ? (
						<Skeleton className="min-h-[calc(100vh-300px)] w-full rounded-2xl bg-white/[0.04]" />
					) : (
						<>
							<DataTable
								data={categories}
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

export default CategoriesPage;
