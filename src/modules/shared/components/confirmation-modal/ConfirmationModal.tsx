'use client';

import { AlertTriangleIcon, XIcon } from 'lucide-react';
import { createPortal } from 'react-dom';

interface ConfirmationModalProps {
	cancelLabel?: string;
	confirmLabel?: string;
	description: string;
	isLoading?: boolean;
	isOpen: boolean;
	onClose: () => void;
	onConfirm: () => void;
	title: string;
}

export const ConfirmationModal = ({
	cancelLabel = 'Cancelar',
	confirmLabel = 'Confirmar',
	description,
	isLoading,
	isOpen,
	onClose,
	onConfirm,
	title,
}: ConfirmationModalProps) => {
	if (!isOpen) return null;

	return createPortal(
		<div
			className='fixed inset-0 z-[90] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200'
			onClick={onClose}>
			<section
				className='w-full max-w-sm rounded-3xl border border-white/10 bg-[#1e1e1e] p-5 text-white shadow-2xl shadow-black/50 animate-in fade-in zoom-in-95 slide-in-from-bottom-3 duration-200'
				onClick={(event) => event.stopPropagation()}>
				<header className='flex items-start justify-between gap-4'>
					<div className='flex items-start gap-3'>
						<div className='flex size-11 shrink-0 items-center justify-center rounded-2xl border border-red-300/20 bg-red-400/10 text-red-100'>
							<AlertTriangleIcon className='size-5' />
						</div>
						<div className='min-w-0'>
							<h2 className='text-lg font-semibold text-white'>{title}</h2>
							<p className='mt-1 text-sm leading-6 text-[#aaaaaa]'>
								{description}
							</p>
						</div>
					</div>

					<button
						type='button'
						aria-label='Cerrar confirmación'
						onClick={onClose}
						disabled={isLoading}
						className='flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#aaaaaa] transition-colors hover:bg-white/[0.06] hover:text-white disabled:cursor-not-allowed disabled:opacity-50'>
						<XIcon className='size-4' />
					</button>
				</header>

				<div className='mt-5 grid grid-cols-2 gap-3'>
					<button
						type='button'
						onClick={onClose}
						disabled={isLoading}
						className='inline-flex min-h-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm font-medium text-[#aaaaaa] transition-colors hover:bg-white/[0.06] hover:text-white disabled:cursor-not-allowed disabled:opacity-50'>
						{cancelLabel}
					</button>
					<button
						type='button'
						onClick={onConfirm}
						disabled={isLoading}
						className='inline-flex min-h-11 items-center justify-center rounded-xl border border-red-300/20 bg-red-500/15 px-4 text-sm font-semibold text-red-100 transition-colors hover:bg-red-500/25 disabled:cursor-not-allowed disabled:opacity-50'>
						{isLoading ? 'Eliminando...' : confirmLabel}
					</button>
				</div>
			</section>
		</div>,
		document.body,
	);
};
