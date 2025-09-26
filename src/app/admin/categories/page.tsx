'use client';

import {
	CATEGORIES_COLUMNS,
	MOCK_CATEGORIES,
} from '@/modules/admin/modules/categories/components/columns/categories.column';
import { CustomSelect } from '@/modules/shared/components/custom-select/CustomSelect';
import { DataTable } from '@/modules/shared/components/data-table/DataTable';

import { PlusIcon } from 'lucide-react';

const CategoriesPage = () => {
	return (
		<section className='w-full  bg-[#1E1E1E] p-4 rounded-lg'>
			<header className='w-full flex items-center justify-between'>
				<CustomSelect
					label='Categoria'
					className='w-fit max-w-full md:px-8 py-6 rounded-xl'
					defaultValue='income'
					placeholder='Seleciona el tipo de categoria'
					items={[
						{ label: 'Categorias Ingresos', value: 'income' },
						{ label: 'Categorias Gastos', value: 'expense' },
					]}
				/>

				<button className='bg-[#C78CFF] size-12 rounded-full flex items-center justify-center text-black cursor-pointer hover:brightness-90 transition'>
					<PlusIcon className='size-5' />
				</button>
			</header>

			<div className='mt-8 space-y-5'>
				<DataTable
					data={MOCK_CATEGORIES}
					columns={CATEGORIES_COLUMNS}
				/>

				<div className='flex items-center justify-end space-x-2 py-4'>
					<div className='text-muted-foreground flex-1 text-sm'></div>
					<div className='space-x-2'>
						<button>Previous</button>
						<button>Next</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CategoriesPage;
