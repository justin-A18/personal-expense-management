import {
	CloudDownloadIcon,
	FunnelIcon,
	ListFilterIcon,
	PlusIcon,
	SearchIcon,
} from 'lucide-react';

export const Filters = () => {
	return (
		<header className='flex flex-col gap-4'>
			<div className='flex flex-wrap items-center justify-between gap-3'>
				<h2 className='text-2xl font-semibold'>Transacciones</h2>

				<div className='flex flex-wrap items-center gap-2'>
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

			<div className='flex flex-wrap items-center sm:justify-end gap-2 font-medium'>
				<button
					type='button'
					className='btn-purple-secondary-with-icon'>
					<SearchIcon className='size-4' />
					Buscar
				</button>

				<button
					type='button'
					className='btn-white-primary-with-icon'>
					<FunnelIcon className='size-4' />
					Filtros
				</button>

				<button
					type='button'
					className='btn-white-primary-with-icon'>
					<ListFilterIcon className='size-4' />
					Orden
				</button>
			</div>
		</header>
	);
};
