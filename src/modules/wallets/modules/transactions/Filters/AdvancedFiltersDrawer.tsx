import { CustomControllerSelect } from '@/modules/shared/components/custom-controller-select/CustomControllerSelect';
import { CustomDatePicker } from '@/modules/shared/components/custom-date-picker/CustomDatePicker';
import { CustomDrawer } from '@/modules/shared/components/custom-drawer/CustomDrawer';
import { Form } from '@/modules/shared/ui/form';
import { FunnelIcon } from 'lucide-react';
import { useAdvancedFilters } from '../hooks/useAdvancedFilters';

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
		<CustomDrawer
			isOpen={isDrawerOpen}
			onClose={closeDrawer}>
			<Form {...form}>
				<form
					className='flex flex-col gap-6 flex-1'
					onSubmit={handleSubmit}>
					<h2 className='text-3xl font-semibold'>Filtros</h2>
					<div className='space-y-4'>
						<h3 className='text-xl font-semibold'>Rango de Fechas:</h3>
						<div className='w-full flex flex-col gap-4'>
							<CustomDatePicker
								control={form.control}
								name='from'
								placeholder='DD/MM/AAAA'
								label='Desde:'
							/>

							<CustomDatePicker
								control={form.control}
								name='to'
								placeholder='DD/MM/AAAA'
								label='Hasta:'
								minDate={watchFromDate || undefined}
							/>
						</div>
					</div>

					<div className='space-y-4'>
						<h3 className='text-xl font-semibold'>Tipo de Transacción:</h3>
						<CustomControllerSelect
							control={form.control}
							name='type'
							labelContent='Tipo de Transacción'
							placeholder='Selecciona un tipo'
							className='w-full max-w-full'
							items={[
								{ label: 'Ingreso', value: 'Ingreso' },
								{ label: 'Gasto', value: 'Gasto' },
							]}
						/>
					</div>

					<div className='space-y-4'>
						<h3 className='text-xl font-semibold'>Orden:</h3>
						<CustomControllerSelect
							control={form.control}
							name='orderBy'
							labelContent='Orden'
							placeholder='Selecciona el orden'
							className='w-full max-w-full'
							items={[
								{ label: 'Ascendente', value: 'ASC' },
								{ label: 'Descendente', value: 'DESC' },
							]}
						/>
					</div>

					<button
						type='submit'
						className='btn-purple-secondary-with-icon text-lg justify-center cursor-pointer'>
						<FunnelIcon className='size-4' /> Aplicar filtros
					</button>
				</form>
			</Form>
		</CustomDrawer>
	);
};
