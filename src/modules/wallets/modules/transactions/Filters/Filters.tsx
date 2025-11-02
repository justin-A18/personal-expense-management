import {
	CloudDownloadIcon,
	FunnelIcon,
	PlusIcon,
	Trash2Icon,
} from 'lucide-react';
import { AdvancedFiltersDrawer } from './AdvancedFiltersDrawer';
import { useFilters } from '../hooks/useFilters';

export const Filters = () => {
	const { closeDrawer, isDrawerOpen, openDrawer, resetFilters } = useFilters();

	return (
		<header className='flex flex-col gap-4'>
			<div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3'>
				<h2 className='text-2xl font-semibold'>Transacciones</h2>

				<div className='flex flex-wrap items-center  gap-2'>
					<button
						type='button'
						className='btn-white-primary-with-icon'>
						<CloudDownloadIcon className='size-5' />
						Exportar
					</button>

					<button
						type='button'
						className='btn-purple-secondary-with-icon'>
						<PlusIcon className='size-4' />
						Registrar Transacción
					</button>
				</div>
			</div>

			<AdvancedFiltersDrawer
				isDrawerOpen={isDrawerOpen}
				closeDrawer={closeDrawer}
			/>

			<div className='flex flex-wrap items-center sm:justify-end gap-2 font-medium'>
				<button
					type='button'
					className='btn-white-primary-with-icon'
					onClick={openDrawer}>
					<FunnelIcon className='size-4' />
					Filtros
				</button>

				<button
					type='button'
					className='btn-purple-secondary-with-icon'
					onClick={() => resetFilters()}>
					<Trash2Icon className='size-4' />
					Limpiar
				</button>
			</div>
		</header>
	);
};
