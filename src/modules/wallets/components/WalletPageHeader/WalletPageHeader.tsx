interface WalletPageHeaderProps {
	action?: React.ReactNode;
	description: string;
	eyebrow: string;
	icon: React.ReactNode;
	title: string;
}

export const WalletPageHeader = ({
	action,
	description,
	eyebrow,
	icon,
	title,
}: WalletPageHeaderProps) => {
	return (
		<header className='flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between'>
			<div className='flex items-start gap-4'>
				<div className='flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-lg shadow-purple-950/30'>
					{icon}
				</div>
				<div className='min-w-0'>
					<p className='text-sm font-medium text-purple-200'>{eyebrow}</p>
					<h1 className='text-2xl font-semibold text-white'>{title}</h1>
					<p className='mt-1 text-sm leading-6 text-[#aaaaaa]'>{description}</p>
				</div>
			</div>

			{action}
		</header>
	);
};
