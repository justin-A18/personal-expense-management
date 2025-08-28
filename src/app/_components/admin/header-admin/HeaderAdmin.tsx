'use client';

import { BoltIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React from 'react';

export const HeaderAdmin = () => {
	const pathname = usePathname().split('/')[2] || 'Inicio';

	return (
		<header className='w-full flex items-center justify-between p-6 border-b-2 border-[#2C2C2C]'>
			<p className='font-medium text-sm'>
				<span className='text-[#626262]'>Cuenta Personal /</span> {pathname}
			</p>

			<div className='flex items-center gap-4'>
				<BoltIcon />

				<img
					src='/profile.webp'
					alt='logo'
					className='size-7 rounded-full object-cover'
				/>
			</div>
		</header>
	);
};
