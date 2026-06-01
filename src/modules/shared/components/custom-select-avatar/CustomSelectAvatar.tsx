import { Controller, type Control, type FieldValues, type Path } from 'react-hook-form';
import { Label } from '../../ui/label';
import { CheckIcon, PiggyBankIcon, WalletIcon } from 'lucide-react';

export const AVATARS = [
	{
		description: 'Para compras, pagos y movimientos del día a día.',
		Icon: WalletIcon,
		label: 'Uso diario',
		url: 'https://res.cloudinary.com/dlmvqmbtj/image/upload/v1759266228/Frame_26_fiutr7.svg',
	},
	{
		description: 'Para metas, fondos separados y dinero reservado.',
		Icon: PiggyBankIcon,
		label: 'Ahorros',
		url: 'https://res.cloudinary.com/dlmvqmbtj/image/upload/v1759266228/Frame_25_dwv0ts.svg',
	},
];

interface AvatarControllerProps<T extends FieldValues> {
	control: Control<T>;
	name: Path<T>;
	label?: string;
}

export const CustomSelectAvatar = <T extends FieldValues>({
	control,
	name,
	label,
}: AvatarControllerProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }) => (
				<div className='flex flex-col gap-3 font-medium text-[#aaaaaa]'>
					{label && <Label>{label}</Label>}
					<div className='flex flex-col items-center gap-3 '>
						{AVATARS.map((src) => {
							const isSelected = field.value === src.url;
							const Icon = src.Icon;

							return (
								<button
									key={src.url}
									type='button'
									onClick={() => field.onChange(src.url)}
									className={`group relative flex w-full items-start gap-3 rounded-2xl border p-3 text-left transition-all duration-200 ${
										isSelected
											? 'border-purple-300/40 bg-purple-500/15 text-white shadow-lg shadow-purple-950/20'
											: 'border-white/10 bg-white/[0.03] text-[#aaaaaa] hover:border-purple-300/25 hover:bg-purple-400/10 hover:text-white'
									}`}>
									<span
										className={`flex size-11 shrink-0 items-center justify-center rounded-xl border transition-colors ${
											isSelected
												? 'border-purple-300/30 bg-purple-400/15 text-purple-100'
												: 'border-white/10 bg-[#1e1e1e] text-purple-200'
										}`}>
										<Icon className='size-5' />
									</span>

									<span className='min-w-0 flex-1'>
										<span className='block text-sm font-semibold text-white'>
											{src.label}
										</span>
										<span className='mt-1 block text-xs leading-5 text-[#aaaaaa]'>
											{src.description}
										</span>
									</span>

									<span
										className={`mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-purple-400 text-white transition-opacity duration-200 ${
											isSelected ? 'opacity-100' : 'opacity-0'
										}`}>
										<CheckIcon className='size-3.5' />
									</span>
								</button>
							);
						})}
					</div>
				</div>
			)}
		/>
	);
};
