import { EyeIcon, EyeOffIcon } from "lucide-react";
import React, { type InputHTMLAttributes, useState } from "react";
import type { Control, FieldValues, Path } from "react-hook-form";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/modules/shared/ui/form";
import { Input } from "@/modules/shared/ui/input";
import { cn } from "../../utils/cn";

interface CustomInputProps<
	T extends FieldValues,
> extends InputHTMLAttributes<HTMLInputElement> {
	control: Control<T>;
	name: Path<T>;
	label?: string;
	labelClassName?: string;
}
export const CustomInput = <T extends FieldValues>({
	control,
	label,
	name,
	labelClassName,
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
					{label && (
						<FormLabel className={cn("text-[#aaaaaa]", labelClassName)}>
							{label}
						</FormLabel>
					)}
					<div className="flex items-center relative w-full">
						<FormControl>
							<Input
								className="py-5 border-[#707070]"
								{...field}
								{...inputProps}
								type={
									inputProps.type === "password"
										? showPassword
											? "text"
											: "password"
										: inputProps.type
								}
							/>
						</FormControl>
						{inputProps.type === "password" && (
							<button
								type="button"
								onClick={togglePasswordVisibility}
								className="absolute right-3 top-1/2 -translate-y-1/2 text-[#aaaaaa] cursor-pointer"
							>
								{(() => {
									const Icon = showPassword ? EyeOffIcon : EyeIcon;
									return <Icon className="size-5" />;
								})()}
							</button>
						)}
					</div>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
