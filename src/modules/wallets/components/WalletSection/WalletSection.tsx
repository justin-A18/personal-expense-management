import { cn } from '@/modules/shared/utils/cn';

interface WalletSectionProps {
	children: React.ReactNode;
	className?: string;
}

export const WalletSection = ({ children, className }: WalletSectionProps) => {
	return (
		<section
			className={cn(
				'w-full rounded-2xl border border-white/10 bg-[#1E1E1E] p-4 shadow-2xl shadow-black/20 sm:p-5',
				className,
			)}>
			{children}
		</section>
	);
};
