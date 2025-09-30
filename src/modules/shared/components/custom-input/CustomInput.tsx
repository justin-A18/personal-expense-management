import React, { InputHTMLAttributes, useState } from 'react';
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/modules/shared/ui/form';
import { Input } from '@/modules/shared/ui/input';
import { Control, FieldValues, Path } from 'react-hook-form';
import { EyeOffIcon, EyeIcon } from 'lucide-react';
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
	const [showPassword, setShowPassword] = useState(false);

	const togglePasswordVisibility = () => {
		setShowPassword((prev) => !prev);
	};

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel className='text-[#aaaaaa]'>{label}</FormLabel>
					<FormControl>
						<div className='flex items-center relative w-full'>
							<Input
								className='py-5 border-[#707070]'
								{...field}
								{...inputProps}
								type={
									inputProps.type === 'password'
										? showPassword
											? 'text'
											: 'password'
										: inputProps.type
								}
							/>
							{inputProps.type === 'password' && (
								<button
									type='button'
									onClick={togglePasswordVisibility}
									className='absolute right-3 top-1/2 -translate-y-1/2 text-[#aaaaaa] cursor-pointer'>
									{(() => {
										const Icon = showPassword ? EyeOffIcon : EyeIcon;
										return <Icon className='size-5' />;
									})()}
								</button>
							)}
						</div>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
