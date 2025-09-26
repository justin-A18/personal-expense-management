'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
	href: string;
}

export const ItemSideBar = ({ children, href }: Props) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={` ${
				isActive ? 'border-2 border-[#474646]' : 'border-2 border-transparent'
			} p-[10px] rounded-lg hover:border-2 hover:border-[#474646] transition-colors`}>
			{children}
		</Link>
	);
};
