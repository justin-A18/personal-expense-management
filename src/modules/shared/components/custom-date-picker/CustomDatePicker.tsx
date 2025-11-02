import { Controller, Control, FieldValues, Path } from 'react-hook-form';
import { Label } from '../../ui/label';
import { Button } from '../../ui/button';
import { CustomPopover } from '../custom-popover/CustomPopover';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '../../ui/calendar';

export const formatDate = (date?: Date | null): string => {
	if (!date || isNaN(date.getTime())) return '';
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	return `${year}-${month}-${day}`;
};

const parseDate = (value?: string): Date | undefined => {
	if (!value) return undefined;
	const [year, month, day] = value.split('-').map(Number);
	if (!year || !month || !day) return undefined;
	return new Date(year, month - 1, day);
};

function isDate(value: unknown): value is Date {
	return value instanceof Date;
}


interface CustomDatePickerProps<T extends FieldValues> {
	control: Control<T>;
	name: Path<T>;
	label?: string;
	minDate?: string;
	placeholder?: string;
}

export const CustomDatePicker = <T extends FieldValues>({
	control,
	name,
	label,
	minDate,
	placeholder,
}: CustomDatePickerProps<T>) => {
	return (
		<div className='flex flex-col gap-2 w-full'>
			{label && <Label className='text-[#aaaaaa]'>{label}</Label>}

			<Controller
				name={name}
				control={control}
				render={({ field }) => {
					const valueAsDate =
						typeof field.value === 'string'
							? parseDate(field.value)
							: isDate(field.value)
							? field.value
							: undefined;


					return (
						<CustomPopover>
							<Button
								type='button'
								variant='outline'
								className={`justify-between bg-[#1e1e1e] border border-[#707070] hover:bg-[#1e1e1e] hover:text-white text-white rounded-lg px-3 py-2 w-full ${
									!field.value ? 'text-white' : ''
								}`}>
								{valueAsDate ? (
									formatDate(valueAsDate)
								) : (
									<span className='text-muted-foreground'>{placeholder}</span>
								)}
								<CalendarIcon className='size-4 opacity-70' />
							</Button>

							<div className='p-2'>
								<Calendar
									mode='single'
									selected={valueAsDate}
									onSelect={(date) => {
										if (date) field.onChange(formatDate(date));
										else field.onChange('');
									}}
									disabled={(date) => {
										const min = parseDate(minDate);
										return min ? date < min : false;
									}}
									className='rounded-md bg-[#1e1e1e] text-white'
								/>
							</div>
						</CustomPopover>
					);
				}}
			/>
		</div>
	);
};
