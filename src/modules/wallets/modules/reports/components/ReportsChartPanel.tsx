import type { ReactNode } from 'react';

interface ReportsChartPanelProps {
	children: ReactNode;
	description: string;
	title: string;
}

export const ReportsChartPanel = ({
	children,
	description,
	title,
}: ReportsChartPanelProps) => {
	return (
		<div className='min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-4'>
			<div className='mb-4 min-w-0'>
				<h2 className='text-base font-semibold text-white'>{title}</h2>
				<p className='mt-1 text-sm text-[#aaaaaa]'>{description}</p>
			</div>
			<div className='min-w-0 overflow-hidden'>{children}</div>
		</div>
	);
};
