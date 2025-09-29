
import { CustomSelect } from '@/modules/shared/components/custom-select/CustomSelect';
import { ArrowUpLeftIcon, ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';

export const HeaderMainActivity = () => {
	return (
		<>
			<header className='w-full flex items-center justify-between'>
				<p className='font-medium'>Balance Total</p>
				<CustomSelect
					label='Moneda'
					defaultValue='dollar'
					placeholder='Seleciona una moneda'
					items={[
						{ label: '🇺🇸 USD Dolar', value: 'dollar' },
						{ label: '🇵🇪 PE SOL', value: 'sol' },
					]}
				/>
			</header>
			<div className='space-y-5'>
				<p className='text-4xl sm:text-6xl font-medium'>$25.632.00</p>

				<div className='flex flex-col sm:flex-row items-center gap-4'>
					<Link
						href='/'
						className='w-full sm:w-fit inline-flex items-center px-4 py-3 gap-4 bg-[#C78CFF] text-black rounded-lg font-medium'>
						<ArrowUpRightIcon />
						<span>Nuevo Ingreso / Gasto</span>
					</Link>
					<Link
						href='/'
						className='w-full sm:w-fit inline-flex items-center px-4 py-3 gap-4 rounded-lg font-medium border-2 bg-[#FFFFFF]/30'>
						<ArrowUpLeftIcon />
						<span>Ver Historial</span>
					</Link>
				</div>
			</div>
		</>
	);
};
