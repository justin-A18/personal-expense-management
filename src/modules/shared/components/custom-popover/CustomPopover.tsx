import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/modules/shared/ui/popover';

interface Props {
	children: [React.ReactNode, React.ReactNode];
}

export const CustomPopover = ({ children }: Props) => {
	const [trigger, content] = children;

	return (
		<Popover>
			<PopoverTrigger asChild>{trigger}</PopoverTrigger>
			<PopoverContent
				align='start'
				sideOffset={8}
				className='z-[60] overflow-hidden'>
				{content}
			</PopoverContent>
		</Popover>
	);
};
