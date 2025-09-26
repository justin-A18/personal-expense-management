'use client';

import { Form } from '@/modules/shared/ui/form';
import { HeaderAuth } from '@/modules/auth/components/HeaderAuth';
import { ContainerAuth } from '@/modules/auth/components/ContainerAuth';
import { CustomInput } from '@/modules/shared/components/custom-input/CustomInput';
import { AuthActionButton } from '@/modules/auth/components/AuthActionButton';
import { ACTIONS_AUTH_TYPE } from '@/modules/auth/enums/auth.enum';
import { useResetPassword } from '@/modules/auth/hooks/useResetPassword';

const ResetPasswordPage = () => {
	
	const { form, onSubmit } = useResetPassword	();

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
