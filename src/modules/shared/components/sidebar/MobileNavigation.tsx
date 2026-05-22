'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogOutIcon } from 'lucide-react';
import { SIDEBAR_ITEMS } from './sidebar.config';
import { cn } from '../../utils/cn';
import { useAuthStore } from '../../store/useAuthStore';

export const MobileNavigation = () => {
	const pathname = usePathname();
	const basePath = pathname.split('/').slice(0, 3).join('/');
	const logout = useAuthStore((state) => state.clearAuth);

	return (
		<nav className='fixed inset-x-3 bottom-3 z-50 md:hidden'>
			<button
				type='button'
				aria-label='Cerrar sesión'
				onClick={logout}
				className='absolute -top-14 right-0 flex size-11 items-center justify-center rounded-2xl border border-red-300/20 bg-[#1e1e1e]/95 text-[#aaaaaa] shadow-2xl shadow-black/40 backdrop-blur transition-colors hover:bg-red-400/10 hover:text-red-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400/40 active:scale-[0.98]'>
				<LogOutIcon className='size-5' />
			</button>

			<div className='grid grid-cols-5 gap-1 rounded-2xl border border-white/10 bg-[#1e1e1e]/95 p-1.5 shadow-2xl shadow-black/40 backdrop-blur'>
				{SIDEBAR_ITEMS.map((item) => {
					const href = basePath + item.href;
					const isActive = pathname === href;

					return (
						<Link
							key={item.href}
							href={href}
							aria-label={item.label}
							aria-current={isActive ? 'page' : undefined}
							className={cn(
								'flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl px-1 py-2 text-[#aaaaaa] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/50',
								'active:scale-[0.98]',
								isActive
									? 'bg-purple-500/15 text-purple-100 shadow-inner shadow-purple-950/20'
									: 'hover:bg-white/[0.04] hover:text-white',
							)}>
							<span
								className={cn(
									'flex size-8 items-center justify-center rounded-lg transition-colors [&_svg]:size-4',
									isActive ? 'bg-purple-400/15' : 'bg-transparent',
								)}>
								{item.icon}
							</span>
							<span className='w-full truncate text-center text-[0.68rem] font-medium leading-none'>
								{item.label}
							</span>
						</Link>
					);
				})}
			</div>
		</nav>
	);
};
