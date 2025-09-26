import { cn } from '../../utils/cn';

interface SpinnerProps {
	className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => {
	return (
		<div
			className={`${cn(
				'size-10 border-4 border-gray-300 rounded-full animate-spin',
				className,
			)}`}></div>
	);
};
