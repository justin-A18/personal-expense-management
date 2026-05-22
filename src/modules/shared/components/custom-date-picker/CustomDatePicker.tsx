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
								className={`h-11 justify-between border border-[#707070] bg-[#1e1e1e] px-3 py-2 text-white shadow-inner shadow-black/20 hover:border-purple-300/60 hover:bg-[#262626] hover:text-white focus-visible:ring-2 focus-visible:ring-purple-400/50 ${
									!field.value ? 'text-white' : ''
								}`}>
								{valueAsDate ? (
									formatDate(valueAsDate)
								) : (
									<span className='text-[#aaaaaa]'>{placeholder}</span>
								)}
								<CalendarIcon className='size-4 text-purple-200 opacity-90' />
							</Button>

							<div className='bg-[#1e1e1e] p-3'>
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
									className='rounded-xl border border-white/10 bg-[#1e1e1e] text-white shadow-inner shadow-white/5'
									classNames={{
										caption_label: 'text-sm font-semibold text-white',
										nav: 'absolute inset-x-0 top-0 flex w-full items-center justify-between',
										button_previous:
											'inline-flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] p-0 text-[#aaaaaa] hover:bg-purple-400/10 hover:text-purple-100',
										button_next:
											'inline-flex size-8 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] p-0 text-[#aaaaaa] hover:bg-purple-400/10 hover:text-purple-100',
										weekday:
											'flex-1 rounded-md text-[0.72rem] font-medium uppercase text-[#aaaaaa]',
										week: 'mt-1 flex w-full',
										today:
											'rounded-lg bg-purple-400/10 text-purple-100 data-[selected=true]:bg-purple-500',
										outside: 'text-[#707070] opacity-60',
										disabled: 'pointer-events-none text-[#555555] opacity-40',
									}}
								/>
							</div>
						</CustomPopover>
					);
				}}
			/>
		</div>
	);
};
