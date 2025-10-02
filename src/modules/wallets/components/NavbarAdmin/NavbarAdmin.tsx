'use client';

import { BoltIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useWalletStore } from '../../store/useWalletStore';

export const NavbarAdmin = () => {
	const pathname = usePathname().split('/')[3];
	const wallet = useWalletStore((state) => state.wallet);

	return (
		<header className='w-full flex items-center justify-between p-6 border-b-2 border-[#2C2C2C]'>
			<p className='font-medium text-sm'>
				<span className='text-[#626262]'>{wallet?.name} /</span>{' '}
				{pathname.charAt(0).toUpperCase() + pathname.slice(1)}
			</p>

			<div className='flex items-center gap-4'>
				<BoltIcon />

				<img
					src={wallet?.avatar}
					alt={wallet?.name}
					className='size-7 rounded-full object-cover'
				/>
			</div>
		</header>
	);
};
