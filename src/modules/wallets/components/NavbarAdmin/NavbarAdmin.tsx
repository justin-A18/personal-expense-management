'use client';

import { BoltIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React from 'react';

export const NavbarAdmin = () => {
	const pathname = usePathname().split('/')[3] || 'Home';

	return (
		<header className='w-full flex items-center justify-between p-6 border-b-2 border-[#2C2C2C]'>
			<p className='font-medium text-sm'>
				<span className='text-[#626262]'>Cuenta Personal /</span>{' '}
				{pathname.charAt(0).toUpperCase() + pathname.slice(1)}
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
