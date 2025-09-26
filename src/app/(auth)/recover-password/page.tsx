'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '@/modules/shared/ui/form';
import { useRouter } from 'next/navigation';
import { HeaderAuth } from '@/modules/auth/components/HeaderAuth';
import { ContainerAuth } from '@/modules/auth/components/ContainerAuth';
import {
	RecoverPasswordSchema,
	recoverPasswordSchema,
} from '@/modules/auth/schemas/auth.schema';
import { CustomInput } from '@/modules/shared/components/custom-input/CustomInput';
import { AuthActionButton } from '@/modules/auth/components/AuthActionButton';
import { ACTIONS_AUTH_TYPE } from '@/modules/auth/enums/auth.enum';

const RecoverPasswordPage = () => {
	const router = useRouter();

	const form = useForm({
		resolver: zodResolver(recoverPasswordSchema),
		defaultValues: {
			email: '',
		},
		mode: 'onChange',
	});

	const onSubmit = (values: RecoverPasswordSchema) => {
		console.log(values);
		router.push('/reset-password');
	};

	return (
		<ContainerAuth>
			<HeaderAuth
				title='Recuperar Contraseña'
				subtitle='Te enviaremos un email con las instrucciones para recuperar tu contraseña.'
			/>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-5 w-full'>
					<CustomInput
						control={form.control}
						name='email'
						label='Email'
						type='email'
						placeholder='Ingresa tu email'
					/>

					<AuthActionButton type={ACTIONS_AUTH_TYPE.RECOVER_PASSWORD} />
				</form>
			</Form>
		</ContainerAuth>
	);
};

export default RecoverPasswordPage;
