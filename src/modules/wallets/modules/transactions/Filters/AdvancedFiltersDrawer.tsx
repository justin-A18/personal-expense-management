import { ArrowDownUpIcon, CalendarDaysIcon, FunnelIcon } from "lucide-react";
import { CustomControllerSelect } from "@/modules/shared/components/custom-controller-select/CustomControllerSelect";
import { CustomDatePicker } from "@/modules/shared/components/custom-date-picker/CustomDatePicker";
import { CustomDrawer } from "@/modules/shared/components/custom-drawer/CustomDrawer";
import { Form } from "@/modules/shared/ui/form";
import { useAdvancedFilters } from "../hooks/useAdvancedFilters";
import { FilterSection } from "./FilterSection";

interface AdvancedFiltersDrawerProps {
	isDrawerOpen: boolean;
	closeDrawer: () => void;
}

export const AdvancedFiltersDrawer = ({
	closeDrawer,
	isDrawerOpen,
}: AdvancedFiltersDrawerProps) => {
	const { form, handleSubmit, watchFromDate } = useAdvancedFilters();

	return (
		<CustomDrawer isOpen={isDrawerOpen} onClose={closeDrawer}>
			<Form {...form}>
				<form className="flex flex-1 flex-col gap-4" onSubmit={handleSubmit}>
					<header className="border-b border-white/10 pb-4">
						<div className="flex items-center gap-3">
							<div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-lg shadow-purple-950/30">
								<FunnelIcon className="size-5" />
							</div>
							<div>
								<p className="text-sm font-medium text-purple-200">
									Búsqueda precisa
								</p>
								<h2 className="text-2xl font-semibold tracking-normal text-white">
									Filtros avanzados
								</h2>
							</div>
						</div>
					</header>

					<div className="flex flex-col gap-3">
						<FilterSection
							icon={<CalendarDaysIcon className="size-5" />}
							title="Rango de fechas"
						>
							<div className="grid w-full gap-3 sm:grid-cols-2">
								<CustomDatePicker
									control={form.control}
									name="from"
									placeholder="DD/MM/AAAA"
									label="Desde"
								/>

								<CustomDatePicker
									control={form.control}
									name="to"
									placeholder="DD/MM/AAAA"
									label="Hasta"
									minDate={watchFromDate || undefined}
								/>
							</div>
						</FilterSection>

						<FilterSection
							icon={<FunnelIcon className="size-5" />}
							title="Tipo de transacción"
						>
							<CustomControllerSelect
								control={form.control}
								name="type"
								label="Movimiento"
								labelContent="Tipo de transacción"
								placeholder="Selecciona un tipo"
								className="w-full max-w-full bg-[#1e1e1e]"
								items={[
									{ label: "Ingreso", value: "Ingreso" },
									{ label: "Gasto", value: "Gasto" },
								]}
							/>
						</FilterSection>

						<FilterSection
							icon={<ArrowDownUpIcon className="size-5" />}
							title="Orden"
						>
							<CustomControllerSelect
								control={form.control}
								name="orderBy"
								label="Ordenar por fecha"
								labelContent="Orden"
								placeholder="Selecciona el orden"
								className="w-full max-w-full bg-[#1e1e1e]"
								items={[
									{ label: "Ascendente", value: "ASC" },
									{ label: "Descendente", value: "DESC" },
								]}
							/>
						</FilterSection>
					</div>

					<button
						type="submit"
						className="btn-purple-secondary-with-icon min-h-11 w-full justify-center text-base"
					>
						<FunnelIcon className="size-4" />
						Aplicar filtros
					</button>
				</form>
			</Form>
		</CustomDrawer>
	);
};
