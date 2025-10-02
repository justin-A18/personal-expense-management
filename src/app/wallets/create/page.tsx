'use client';

import { CenteredHeader } from '@/modules/shared/components/centered-header/CenteredHeader';
import { CenteredLayout } from '@/modules/shared/components/centered-layout/CenteredLayout';
import { CustomControllerSelect } from '@/modules/shared/components/custom-controller-select/CustomControllerSelect';
import { CustomInput } from '@/modules/shared/components/custom-input/CustomInput';
import { CustomSelectAvatar } from '@/modules/shared/components/custom-select-avatar/CustomSelectAvatar';
import { CURRENCIES_OPTIONS } from '@/modules/shared/const';
import { Form } from '@/modules/shared/ui/form';
import { useCreateWallet } from '@/modules/wallets/hooks/useCreateWallet';
import { CreditCardIcon } from 'lucide-react';

const page = () => {
	const { form, handleSubmit, isPending } = useCreateWallet();

	return (
		<CenteredLayout hasBackButton>
			<CenteredHeader
				hiddenLogo
				title='Crear billetera digital'
				subtitle='Registra y controla tus transacciones al instante.'
			/>

			<Form {...form}>
				<form
					onSubmit={handleSubmit}
					className='space-y-5 w-full'>
					<CustomSelectAvatar
						control={form.control}
						name='avatar'
						label='Selecciona un avatar'
					/>

					<CustomInput
						control={form.control}
						name='name'
						label='Nombre:'
						type='text'
						placeholder='Ingrese el nombre de su billetera'
					/>

					<CustomControllerSelect
						label='Selecciona una moneda:'
						control={form.control}
						name='currency'
						items={CURRENCIES_OPTIONS}
						className='w-full max-w-full'
						placeholder='Selecciona una moneda'
					/>

					<CustomInput
						control={form.control}
						name='balance'
						label='Balance Inicial: (opcional)'
						type='text'
						placeholder='Ingrese un balance inicial'
					/>

					<button
						type='submit'
						className='btn-purple-primary w-full mt-2'
						disabled={isPending}>
						<CreditCardIcon />
						Crear billetera
					</button>
				</form>
			</Form>
		</CenteredLayout>
	);
};

export default page;
