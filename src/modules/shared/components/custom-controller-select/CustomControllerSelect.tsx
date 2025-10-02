import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { CustomSelect, CustomSelectProps } from '../custom-select/CustomSelect';

interface CustomControllerSelectProps<T extends FieldValues>
	extends CustomSelectProps {
	control: Control<T>;
	name: Path<T>;
}

export const CustomControllerSelect = <T extends FieldValues>({
	control,
	name,
	...customSelectProps
}: CustomControllerSelectProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<CustomSelect
					{...customSelectProps}
					value={field.value}
					onValueChange={field.onChange}
				/>
			)}
		/>
	);
};
