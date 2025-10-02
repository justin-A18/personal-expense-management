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
		<>
			<header className='w-full flex items-center justify-between'>
				<p className='font-medium'>Balance Total</p>

				<div className='flex items-center justify-between px-2 sm:px-4 py-2 bg-[#666666]/40 text-white rounded-lg shadow-md border border-[#666666] space-x-2'>
					<p className='flex items-center gap-2 font-semibold text-sm'>
						<CircleDollarSign className='w-5 h-5 text-green-400' /> Moneda:
					</p>
					<span className='font-medium text-sm text-gray-200'>
						{wallet?.currency}
					</span>
				</div>
			</header>
			<div className='space-y-5'>
				<p className='text-4xl sm:text-6xl font-medium'>
					{formatCurrency(wallet.balance, wallet.currency)}
				</p>

				<div className='flex flex-col sm:flex-row items-center gap-4'>
					<Link
						href={`/wallets/${wallet.id}/transactions`}
						className='w-full sm:w-fit inline-flex items-center px-4 py-3 gap-4 bg-[#C78CFF] text-black rounded-lg font-medium'>
						<ArrowUpRightIcon />
						<span>Nuevo Ingreso / Gasto</span>
					</Link>
					<Link
						href={`/wallets/${wallet.id}/transactions`}
						className='w-full sm:w-fit inline-flex items-center px-4 py-3 gap-4 rounded-lg font-medium border-2 bg-[#FFFFFF]/30'>
						<ArrowUpLeftIcon />
						<span>Ver Historial</span>
					</Link>
				</div>
			</div>
		</>
	);
};
