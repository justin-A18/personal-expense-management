'use client';

import { CenteredHeader } from '@/modules/shared/components/centered-header/CenteredHeader';
import { CenteredLayout } from '@/modules/shared/components/centered-layout/CenteredLayout';
import { CustomControllerSelect } from '@/modules/shared/components/custom-controller-select/CustomControllerSelect';
import { CustomInput } from '@/modules/shared/components/custom-input/CustomInput';
import { Form } from '@/modules/shared/ui/form';
import { CreditCardIcon } from 'lucide-react';
import { useForm } from 'react-hook-form';

const page = () => {
	const form = useForm({
		mode: 'onChange',
	});

	const onSubmit = (values: any) => {
		console.log(values);
	};

	return (
		<CenteredLayout>
			<CenteredHeader
				hiddenLogo
				title='Crear billetera digital'
				subtitle='Registra y controla tus transacciones al instante.'
			/>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-5 w-full'>
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
						items={[
							{ value: 'USD', label: 'Dólar Estadounidense (USD)' },
							{ value: 'EUR', label: 'Euro (EUR)' },
							{ value: 'JPY', label: 'Yen Japonés (JPY)' },
							{ value: 'GBP', label: 'Libra Esterlina (GBP)' },
							{ value: 'AUD', label: 'Dólar Australiano (AUD)' },
							{ value: 'CAD', label: 'Dólar Canadiense (CAD)' },
						]}
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
						className='btn-purple-primary w-full mt-2'>
						<CreditCardIcon />
						Crear billetera
					</button>
				</form>
			</Form>
		</CenteredLayout>
	);
};

export default page;
