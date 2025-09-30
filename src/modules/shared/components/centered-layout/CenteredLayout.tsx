'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CenteredLayoutProps {
	children: React.ReactNode;
	isBackButton?: boolean;
}

export const CenteredLayout = ({
	children,
	isBackButton,
}: CenteredLayoutProps) => {
	const router = useRouter();

	return (
		<div className='w-full min-h-dvh flex flex-col items-center justify-center rounded-lg bg-[#101010]'>
			<div className='max-w-md w-full p-5 sm:p-8 rounded-lg flex flex-col items-center gap-6 relative'>
				{isBackButton && (
					<button
						className='py-4 inline-flex items-center gap-2 text-sm self-start text-[#aaaaaa] hover:text-white transition-colors cursor-pointer'
						onClick={() => router.back()}>
						<ArrowLeft />
						Regresar
					</button>
				)}

				{children}
			</div>
		</div>
	);
};
