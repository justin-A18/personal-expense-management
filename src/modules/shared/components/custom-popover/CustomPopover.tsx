import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@radix-ui/react-popover';

interface Props {
	children: React.ReactNode[];
}

export const CustomPopover = ({ children }: Props) => {
	const [trigger, content] = children;

	return (
		<Popover>
			<PopoverTrigger asChild>{trigger}</PopoverTrigger>
			<PopoverContent className='z-10 mt-2'>{content}</PopoverContent>
		</Popover>
	);
};
