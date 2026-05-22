import { cn } from '@/modules/shared/utils/cn';

interface WalletPanelProps {
	children: React.ReactNode;
	className?: string;
}

export const WalletPanel = ({ children, className }: WalletPanelProps) => {
	return (
		<div
			className={cn(
				'rounded-2xl border border-white/10 bg-white/[0.03] p-4',
				className,
			)}>
			{children}
		</div>
	);
};
