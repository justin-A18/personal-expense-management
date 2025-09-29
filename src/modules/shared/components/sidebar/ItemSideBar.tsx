'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from 'react';
import { cn } from '../../utils/cn';

interface Props extends PropsWithChildren {
	href?: string;
	onClick?: () => void;
}

export const ItemSideBar = ({ children, href }: Props) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	const commonClasses = `p-[10px] rounded-lg ${
		isActive ? 'border-2 border-[#474646]' : 'border-2 border-transparent'
	} hover:border-2 hover:border-[#474646] transition-colors`;

	if (href) {
		return (
			<Link
				href={href}
				className={commonClasses}>
				{children}
			</Link>
		);
	}

	return (
		<button
			type='button'
			className={cn(commonClasses, 'cursor-pointer')}>
			{children}
		</button>
	);
};
