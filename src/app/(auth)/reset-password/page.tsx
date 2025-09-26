'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '@/modules/shared/ui/form';
import { useRouter } from 'next/navigation';
import { HeaderAuth } from '@/modules/auth/components/HeaderAuth';
import { ContainerAuth } from '@/modules/auth/components/ContainerAuth';
import {
	resetPasswordSchema,
	ResetPasswordSchema,
} from '@/modules/auth/schemas/auth.schema';
import { CustomInput } from '@/modules/shared/components/custom-input/CustomInput';
import { AuthActionButton } from '@/modules/auth/components/AuthActionButton';
import { ACTIONS_AUTH_TYPE } from '@/modules/auth/enums/auth.enum';

const ResetPasswordPage = () => {
	const router = useRouter();

	const form = useForm({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			confirmPassword: '',
			password: '',
		},
		mode: 'onChange',
	});

	const onSubmit = (values: ResetPasswordSchema) => {
		console.log(values);
		router.push('/');
	};

	return (
		<ContainerAuth>
			<HeaderAuth
				title='Nueva Contraseña'
				subtitle='Ingresa tu nueva contraseña a continuación.'
			/>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-5 w-full'>
					<CustomInput
						control={form.control}
						name='password'
						label='Contraseña'
						type='password'
						placeholder='Ingresa tu contraseña'
					/>

					<CustomInput
						control={form.control}
						name='confirmPassword'
						label='Confirmar Contraseña'
						type='password'
						placeholder='Confirma tu contraseña'
					/>
					<AuthActionButton type={ACTIONS_AUTH_TYPE.RESET_PASSWORD} />
				</form>
			</Form>
		</ContainerAuth>
	);
};

export default ResetPasswordPage;
