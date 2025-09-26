interface ContainerAuthProps {
	children: React.ReactNode;
}

export const ContainerAuth = ({ children }: ContainerAuthProps) => {
	return (
		<div className='w-full min-h-dvh flex flex-col items-center justify-center rounded-lg bg-[#101010]'>
			<div className='max-w-md w-full p-5 sm:p-8 rounded-lg flex flex-col items-center gap-6'>
				{children}
			</div>
		</div>
	);
};
