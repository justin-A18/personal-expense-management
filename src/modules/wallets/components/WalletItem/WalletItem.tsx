import { WalletEntity } from '@/modules/shared/interfaces/entities/wallet.entity';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface WalletItemProps {
	wallet: WalletEntity;
}

export const WalletItem = ({ wallet }: WalletItemProps) => {
	return (
		<Link
			href={`/wallets/${wallet.id}/dashboard`}
			className='bg-[#262626] hover:bg-[#414141] transition-all duartion-300 cursor-pointer px-4 py-5 rounded-lg gap-4 flex items-center relative group hover:scale-105'>
			<img
				src={wallet?.avatar}
				alt={wallet.name}
			/>
			<p className='text-white font-medium'>{wallet.name}</p>

			<ArrowRightIcon className='absolute right-4 group-hover:visible invisible opacity-0 group-hover:opacity-100 transition-all duration-300' />
		</Link>
	);
};
