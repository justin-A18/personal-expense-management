import Image from 'next/image';

interface TemplateResultsProps {
	title: string;
	description: string;
}

export const TemplateResults = ({
	description,
	title,
}: TemplateResultsProps) => {
	return (
		<div className='flex flex-col items-center justify-center gap-6 py-8 px-4 rounded-2xl shadow-lg w-full'>
			<Image
				src='/undraw_online-banking_l9sn.svg'
				width={360}
				height={360}
				alt='undraw_online-banking_l9sn'
				className='opacity-90'
			/>
			<h2 className='text-[#FFFFFF] text-xl font-semibold tracking-wide'>
				{title}
			</h2>
			<p className='text-[#919191] text-sm max-w-md w-full text-center leading-relaxed text-wrap'>
				{description}
			</p>
			<div className='mt-4 h-1 w-16 rounded-full bg-[#C78CFF]/60' />
		</div>
	);
};
