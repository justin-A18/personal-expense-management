import Link from 'next/link';

interface RedirectAuthProps {
	href: string;
	text: string;
}

export const RedirectAuth = ({ href, text }: RedirectAuthProps) => {
	return (
		<div className='w-full text-right'>
			<Link
				href={href}
				className='text-[#aaaaaa] text-sm'>
				{text}
			</Link>
		</div>
	);
};
