import type { ReactNode } from 'react';

interface ReportsInsightCardProps {
	description: string;
	icon: ReactNode;
	label: string;
	value: string;
}

export const ReportsInsightCard = ({
	description,
	icon,
	label,
	value,
}: ReportsInsightCardProps) => {
	return (
		<div className='rounded-2xl border border-white/10 bg-white/[0.03] p-4'>
			<div className='flex items-start gap-3'>
				<div className='flex size-10 shrink-0 items-center justify-center rounded-xl bg-purple-400/10 text-purple-200'>
					{icon}
				</div>
				<div>
					<p className='text-xs font-medium text-[#aaaaaa]'>{label}</p>
					<p className='mt-1 text-lg font-semibold text-white'>{value}</p>
					<p className='mt-2 text-sm leading-5 text-[#aaaaaa]'>{description}</p>
				</div>
			</div>
		</div>
	);
};
