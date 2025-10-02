import { Controller, Control } from 'react-hook-form';
import { Label } from '../../ui/label';
import { CheckIcon } from 'lucide-react';

export const AVATARS = [
	{
		label: 'Clásico',
		url: 'https://res.cloudinary.com/dlmvqmbtj/image/upload/v1759266228/Frame_26_fiutr7.svg',
	},
	{
		label: 'Ahorros',
		url: 'https://res.cloudinary.com/dlmvqmbtj/image/upload/v1759266228/Frame_25_dwv0ts.svg',
	},
];

interface AvatarControllerProps {
	control: Control<any>;
	name: string;
	label?: string;
}

export const CustomSelectAvatar = ({
	control,
	name,
	label,
}: AvatarControllerProps) => {
	return (
		<Controller
			control={control}
			name={name}
			defaultValue={AVATARS[0].url}
			render={({ field }) => (
				<div className='flex flex-col gap-6 text-center font-medium text-[#aaaaaa]'>
					{label && <Label className='text-lg sm:text-xl block'>{label}</Label>}
					<div className='grid grid-cols-2 gap-2 place-items-center'>
						{AVATARS.map((src, idx) => (
							<div
								className='space-y-2 flex flex-col items-center'
								key={idx}>
								<button
									type='button'
									onClick={() => field.onChange(src.url)}
									className={`rounded-full size-16 transition-all duration-300 cursor-pointer group relative space-y-2 ${
										field.value === src.url ? 'brightness-100' : 'brightness-75'
									}`}>
									<img
										src={src.url}
										alt={src.label}
										className='w-full h-full rounded-full object-cover'
										loading='lazy'
									/>

									<span
										className={`absolute bottom-0 right-0.5 size-4 bg-green-400 rounded-full flex items-center justify-center  transition-opacity duration-300 text-white z-10 ${
											field.value === src.url ? 'opacity-100' : ' opacity-0'
										}`}>
										<CheckIcon />
									</span>
								</button>
								<span
									className={`block font-medium text-sm sm:text-base ${
										field.value === src.url ? 'text-white' : 'text-[#666666] '
									}`}>
									{src.label}
								</span>
							</div>
						))}
					</div>
				</div>
			)}
		/>
	);
};
