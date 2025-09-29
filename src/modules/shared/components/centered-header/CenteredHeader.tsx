interface CenteredHeaderProps {
	title?: string;
	subtitle?: string;
}

export const CenteredHeader = ({ subtitle, title }: CenteredHeaderProps) => {
	return (
		<header className='flex flex-col items-center gap-4'>
			<img
				src='/logo.svg'
				alt='logo'
			/>
			<div className='text-center space-y-4'>
				<h2 className='text-3xl font-bold'>{title}</h2>
				<p className='text-[#aaaaaa] text-sm sm:text-base'>{subtitle}</p>
			</div>
		</header>
	);
};
