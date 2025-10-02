'use client';

import { usePathname, useRouter } from 'next/navigation';
import { ItemSideBar } from './ItemSideBar';
import { SIDEBAR_ITEMS } from './sidebar.config';
import { LogOutIcon } from 'lucide-react';
import { useAuthStore } from '../../store/useAuthStore';

export const SideBar = () => {
	const basePath = usePathname().split('/').slice(0, 3).join('/');
	const logout = useAuthStore((state) => state.clearAuth);

	return (
		<aside className='md:flex flex-col items-center p-4 gap-8 hidden'>
			<img
				src='/logo.svg'
				alt='logo'
			/>

			<hr className='border-2 border-[#2C2C2C] w-4/5' />

			<div className='flex flex-col gap-5'>
				{SIDEBAR_ITEMS.map((item) => (
					<ItemSideBar
						key={item.href}
						href={basePath + item.href}>
						{item.icon}
					</ItemSideBar>
				))}
			</div>

			<hr className='border-2 border-[#2C2C2C] w-4/5' />

			<div className='flex flex-col gap-5'>
				<ItemSideBar onClick={logout}>
					<LogOutIcon />
				</ItemSideBar>
			</div>
		</aside>
	);
};
