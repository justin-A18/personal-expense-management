import {
	CloudDownloadIcon,
	FunnelIcon,
	PlusIcon,
	Trash2Icon,
} from 'lucide-react';
import { useState } from 'react';
import { useFilters } from '../hooks/useFilters';
import { AdvancedFiltersDrawer } from './AdvancedFiltersDrawer';
import { CreateTransactionDrawer } from './CreateTransactionDrawer';

export const Filters = () => {
	const { closeDrawer, isDrawerOpen, openDrawer, resetFilters } = useFilters();
	const [isCreateDrawerOpen, setIsCreateDrawerOpen] = useState(false);

	return (
		<>
			<AdvancedFiltersDrawer
				isDrawerOpen={isDrawerOpen}
				closeDrawer={closeDrawer}
			/>

			<CreateTransactionDrawer
				isDrawerOpen={isCreateDrawerOpen}
				closeDrawer={() => setIsCreateDrawerOpen(false)}
			/>

			<div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
				<p className='text-sm text-[#aaaaaa]'>
					Filtra, exporta o registra nuevos movimientos.
				</p>

				<div className='flex flex-wrap items-center gap-2 font-medium'>
					<button
						type='button'
						className='btn-white-primary-with-icon'>
						<CloudDownloadIcon className='size-5' />
						Exportar
					</button>

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

					<button
						type='button'
						className='btn-purple-secondary-with-icon'
						onClick={() => setIsCreateDrawerOpen(true)}>
						<PlusIcon className='size-4' />
						Registrar transacción
					</button>
				</div>
			</div>
		</>
	);
};
