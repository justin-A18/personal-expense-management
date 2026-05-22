import {
	type Control,
	Controller,
	type FieldValues,
	type Path,
} from "react-hook-form";
import { formatDate, parseDate } from "../../helpers/date-format";
import { Label } from "../../ui/label";
import { CalendarPicker } from "../calendar-picker/CalendarPicker";

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
		<div className="flex flex-col gap-2 w-full">
			{label && <Label className="text-[#aaaaaa]">{label}</Label>}

			<Controller
				name={name}
				control={control}
				render={({ field }) => {
					const valueAsDate =
						typeof field.value === "string"
							? parseDate(field.value)
							: isDate(field.value)
								? field.value
								: undefined;

					return (
						<CalendarPicker
							selected={valueAsDate}
							captionLayout="dropdown"
							placeholder={placeholder}
							onSelect={(date) => {
								if (date) field.onChange(formatDate(date));
								else field.onChange("");
							}}
							disabled={(date) => {
								const min = parseDate(minDate);
								return min ? date < min : false;
							}}
						/>
					);
				}}
			/>
		</div>
	);
};
