import {
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
	Select,
} from '@/app/_components/ui/select';
import { ArrowUpLeftIcon, ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';

export const HeaderMainActivity = () => {
	return (
		<>
			<header className='w-full flex items-center justify-between'>
				<p className='font-medium'>Balance Total</p>

				<Select defaultValue='dollar'>
					<SelectTrigger className='w-fit border-2 border-[#4D4D4D] text-white font-medium'>
						<SelectValue placeholder='Seleciona una moneda' />
					</SelectTrigger>
					<SelectContent className='bg-[#1E1E1E] border-2 border-[#4D4D4D] text-white'>
						<SelectGroup>
							<SelectLabel>Moneda</SelectLabel>
							<SelectItem value='dollar'>🇺🇸 USD Dolar</SelectItem>
							<SelectItem value='sol'>🇵🇪 PE SOL</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
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
