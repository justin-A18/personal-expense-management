import { WalletEntity } from '@/modules/shared/interfaces/entities/wallet.entity';
import { formatCurrency } from '@/modules/shared/utils/formatCurrency.utils';
import {
	ArrowUpLeftIcon,
	ArrowUpRightIcon,
	CircleDollarSign,
} from 'lucide-react';
import Link from 'next/link';

interface HeaderMainActivityProps {
	wallet: WalletEntity;
}

export const HeaderMainActivity = ({ wallet }: HeaderMainActivityProps) => {
	return (
		<section className='w-full space-y-6'>
			<header className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3'>
				<h2 className='text-lg font-semibold text-gray-200'>Balance Total</h2>

				<div className='flex items-center gap-2 px-3 py-2 bg-purple-300/10 border border-[#7a7a7a] text-white rounded-lg shadow-sm backdrop-blur-sm'>
					<CircleDollarSign className='w-5 h-5 text-purple-300 shrink-0' />
					<span className='text-sm font-medium text-gray-200'>Moneda:</span>
					<span className='text-sm font-semibold text-white'>
						{wallet?.currency}
					</span>
				</div>
			</header>

			<p className='text-5xl sm:text-6xl font-semibold text-white tracking-tight'>
				{formatCurrency(wallet.balance, wallet.currency)}
			</p>

			<div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4'>
				<Link
					href={`/wallets/${wallet.id}/transactions`}
					className='w-full sm:w-auto inline-flex items-center justify-center gap-3 px-4 py-3 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-xl font-medium shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200'>
					<ArrowUpRightIcon className='w-5 h-5' />
					Nuevo Ingreso / Gasto
				</Link>

				<Link
					href={`/wallets/${wallet.id}/transactions`}
					className='w-full sm:w-auto inline-flex items-center justify-center gap-3 px-4 py-3 border border-purple-300/40 bg-purple-200/20 text-purple-100 rounded-xl font-medium shadow-sm hover:bg-purple-300/30 hover:text-white hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200'>
					<ArrowUpLeftIcon className='w-5 h-5' />
					Ver Historial
				</Link>
			</div>
		</section>
	);
};
