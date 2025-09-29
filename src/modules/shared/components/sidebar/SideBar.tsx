'use client';

import { usePathname } from 'next/navigation';
import { ItemSideBar } from './ItemSideBar';
import { SIDEBAR_ITEMS, SIDEBAR_ITEMS_BOTTOM } from './sidebar.config';

export const SideBar = () => {
	const basePath = usePathname().split('/').slice(0, 3).join('/');

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
				{SIDEBAR_ITEMS_BOTTOM.map((item, i) => (
					<ItemSideBar key={i}>{item.icon}</ItemSideBar>
				))}
			</div>
		</aside>
	);
};
