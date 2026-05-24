import { useQuery } from "@tanstack/react-query";
import { CircleDollarSignIcon, PlusIcon, ReceiptTextIcon } from "lucide-react";
import { CustomControllerSelect } from "@/modules/shared/components/custom-controller-select/CustomControllerSelect";
import { CustomDatePicker } from "@/modules/shared/components/custom-date-picker/CustomDatePicker";
import { CustomDrawer } from "@/modules/shared/components/custom-drawer/CustomDrawer";
import { CustomInput } from "@/modules/shared/components/custom-input/CustomInput";
import type { TransactionEntity } from "@/modules/shared/interfaces/entities/transaction.entity";
import { Form } from "@/modules/shared/ui/form";
import { getAllCategories } from "@/modules/wallets/services/categories.service";
import { useCreateTransaction } from "../hooks/useCreateTransaction";
import { SelectItemCategory } from "./SelectItemCategory";

interface CreateTransactionDrawerProps {
	closeDrawer: () => void;
	initialTransaction?: TransactionEntity | null;
	isDrawerOpen: boolean;
}

export const CreateTransactionDrawer = ({
	closeDrawer,
	initialTransaction,
	isDrawerOpen,
}: CreateTransactionDrawerProps) => {
	const { form, handleSubmit, isPending, mode } = useCreateTransaction(
		closeDrawer,
		initialTransaction,
		isDrawerOpen,
	);
	const { data: categories = [] } = useQuery({
		initialData: [],
		queryKey: ["categories", "transaction-drawer"],
		queryFn: async () => {
			const { data } = await getAllCategories(
				{ name: null, type: null },
				{ limit: 100, offset: 0 },
			);

			return data.content;
		},
	});

	return (
		<CustomDrawer isOpen={isDrawerOpen} onClose={closeDrawer}>
			<Form {...form}>
				<form className="flex flex-1 flex-col gap-5" onSubmit={handleSubmit}>
					<header className="border-b border-white/10 pb-4">
						<div className="flex items-center gap-3">
							<div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-lg shadow-purple-950/30">
								<ReceiptTextIcon className="size-5" />
							</div>
							<div>
								<p className="text-sm font-medium text-purple-200">
									{mode === "edit" ? "Editar movimiento" : "Nuevo movimiento"}
								</p>
								<h2 className="text-2xl font-semibold text-white">
									{mode === "edit"
										? "Actualizar transacción"
										: "Registrar transacción"}
								</h2>
							</div>
						</div>
					</header>

					<div className="grid gap-4">
						<CustomControllerSelect
							control={form.control}
							name="type"
							label="Tipo"
							labelContent="Tipo de transacción"
							placeholder="Selecciona un tipo"
							className="w-full max-w-full bg-[#1e1e1e]"
							items={[
								{ label: "Gasto", value: "Gasto" },
								{ label: "Ingreso", value: "Ingreso" },
							]}
						/>

						<CustomControllerSelect
							control={form.control}
							name="categoryId"
							label="Categoría"
							labelContent="Categoría"
							placeholder="Selecciona una categoría"
							className="w-full max-w-full bg-[#1e1e1e]"
							items={SelectItemCategory({ categories })}
						/>

						<CustomInput
							control={form.control}
							name="description"
							label="Descripción"
							type="text"
							placeholder="Compra de supermercado"
						/>

						<CustomInput
							control={form.control}
							name="amount"
							label="Monto"
							type="number"
							inputMode="decimal"
							min="0"
							step="0.01"
							placeholder="85.50"
						/>

						<CustomDatePicker
							control={form.control}
							name="date"
							label="Fecha"
							placeholder="DD/MM/AAAA"
						/>
					</div>

					<button
						type="submit"
						className="btn-purple-secondary-with-icon mt-auto min-h-12 w-full justify-center text-base"
						disabled={isPending}
					>
						{isPending ? (
							<CircleDollarSignIcon className="size-4 animate-pulse" />
						) : (
							<PlusIcon className="size-4" />
						)}
						{mode === "edit"
							? "Actualizar transacción"
							: "Registrar transacción"}
					</button>
				</form>
			</Form>
		</CustomDrawer>
	);
};
