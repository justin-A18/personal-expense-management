'use client';

import { Form } from '@/modules/shared/ui/form';
import { CenteredHeader } from '@/modules/shared/components/centered-header/CenteredHeader';
import { CenteredLayout } from '@/modules/shared/components/centered-layout/CenteredLayout';
import { CustomInput } from '@/modules/shared/components/custom-input/CustomInput';
import { AuthActionButton } from '@/modules/auth/components/AuthActionButton';
import { ACTIONS_AUTH_TYPE } from '@/modules/auth/enums/auth.enum';
import { useRecoverPassword } from '@/modules/auth/hooks/useRecoverPassword';

const RecoverPasswordPage = () => {
	const { form, onSubmit } = useRecoverPassword();

	return (
		<CenteredLayout>
			<CenteredHeader
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
		</CenteredLayout>
	);
};

export default RecoverPasswordPage;
