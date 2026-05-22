interface WalletSummaryCardProps {
	icon: React.ReactNode;
	label: string;
	value: string;
}

export const WalletSummaryCard = ({
	icon,
	label,
	value,
}: WalletSummaryCardProps) => {
	return (
		<div className='rounded-2xl border border-white/10 bg-white/[0.03] p-4'>
			<div className='flex items-center gap-3'>
				<div className='flex size-10 items-center justify-center rounded-xl bg-purple-400/10 text-purple-200'>
					{icon}
				</div>
				<div>
					<p className='text-xs font-medium text-[#aaaaaa]'>{label}</p>
					<p className='text-lg font-semibold text-white'>{value}</p>
				</div>
			</div>
		</div>
	);
};
