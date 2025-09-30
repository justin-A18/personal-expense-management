import * as SelectPrimitive from '@radix-ui/react-select';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/modules/shared/ui/select';
import { cn } from '@/modules/shared/utils/cn';
import { ISelectOption } from '../../interfaces/select-options.interface';
import { Label } from '../../ui/label';

export interface CustomSelectProps
	extends React.ComponentProps<typeof SelectPrimitive.Root> {
	items?: ISelectOption[];
	defaultValue?: string;
	label?: string;
	placeholder?: string;
	className?: string;
}

export const CustomSelect = ({
	items,
	defaultValue,
	label,
	placeholder,
	className,
	...props
}: CustomSelectProps) => {
	return (
		<div className='space-y-2'>
			<Label className='text-[#aaaaaa]'>{label}</Label>
			<Select
				defaultValue={defaultValue}
				{...props}>
				<SelectTrigger
					className={cn(
						'w-full max-w-[150px] border border-[#707070] text-white font-medium py-5',
						className,
					)}>
					<SelectValue placeholder={placeholder} />
				</SelectTrigger>
				<SelectContent className='bg-[#1E1E1E] border-2 border-[#4D4D4D] text-white'>
					<SelectGroup>
						<SelectLabel>{label}</SelectLabel>
						{items?.map((item) => (
							<SelectItem
								key={item.value}
								value={item.value}>
								{item.label}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
};
