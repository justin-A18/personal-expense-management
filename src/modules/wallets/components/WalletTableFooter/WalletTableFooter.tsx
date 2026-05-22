import { cn } from '@/modules/shared/utils/cn';
import { ArrowDownUpIcon } from 'lucide-react';

interface WalletTableFooterProps {
	children: React.ReactNode;
	className?: string;
	icon?: React.ReactNode;
	label: string;
}

export const WalletTableFooter = ({
	children,
	className,
	icon = <ArrowDownUpIcon className='size-4 text-purple-200' />,
	label,
}: WalletTableFooterProps) => {
	return (
		<div
			className={cn(
				'rounded-2xl border border-white/10 bg-white/[0.03] p-3',
				className,
			)}>
			<div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
				<div className='flex items-center gap-2 text-sm text-[#aaaaaa]'>
					{icon}
					<span>{label}</span>
				</div>

				{children}
			</div>
		</div>
	);
};
