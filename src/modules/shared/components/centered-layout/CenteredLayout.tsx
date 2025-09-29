interface CenteredLayoutProps {
	children: React.ReactNode;
}

export const CenteredLayout = ({ children }: CenteredLayoutProps) => {
	return (
		<div className='w-full min-h-dvh flex flex-col items-center justify-center rounded-lg bg-[#101010]'>
			<div className='max-w-md w-full p-5 sm:p-8 rounded-lg flex flex-col items-center gap-6'>
				{children}
			</div>
		</div>
	);
};
