'use client';

import { XIcon } from 'lucide-react';
import { createPortal } from 'react-dom';

interface DrawerContentProps {
	children: React.ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
}

export const CustomDrawer = ({
	children,
	isOpen,
	onClose,
}: DrawerContentProps) => {
	return createPortal(
		<div
			className={`fixed w-full bg-black/30 h-full z-[9] top-0 left-0 flex items-center justify-end transition-all duration-300 ${
				isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
			}`}>
			<div
				className={`max-w-md w-full h-full bg-[#1e1e1e] flex flex-col p-6 overflow-y-auto gap-6 transition-transform duration-300 ${
					isOpen ? 'translate-x-0' : 'translate-x-full'
				}`}>
				<button
					className='self-end cursor-pointer'
					onClick={onClose}>
					<XIcon className='size-6 text-white' />
				</button>
				{children}
			</div>
		</div>,
		document.body,
	);
};
