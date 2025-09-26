import React, { InputHTMLAttributes } from 'react';
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/modules/shared/ui/form';
import { Input } from '@/modules/shared/ui/input';
import { Control, FieldValues, Path } from 'react-hook-form';

interface CustomInputProps<T extends FieldValues>
	extends InputHTMLAttributes<HTMLInputElement> {
	control: Control<T>;
	name: Path<T>;
	label: string;
}

export const CustomInput = <T extends FieldValues>({
	control,
	label,
	name,
	...inputProps
}: CustomInputProps<T>) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel className='text-[#aaaaaa]'>{label}</FormLabel>
					<FormControl>
						<Input
							className='py-5 border-[#707070]'
							{...field}
							{...inputProps}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
