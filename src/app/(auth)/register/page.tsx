'use client';

import { Form } from '@/modules/shared/ui/form';
import { HeaderAuth } from '@/modules/auth/components/HeaderAuth';
import { RedirectAuth } from '@/modules/auth/components/RedirectAuth';
import { ContainerAuth } from '@/modules/auth/components/ContainerAuth';
import { CustomInput } from '@/modules/shared/components/custom-input/CustomInput';
import { AuthActionButton } from '@/modules/auth/components/AuthActionButton';
import { ACTIONS_AUTH_TYPE } from '@/modules/auth/enums/auth.enum';
import { useRegisterUser } from '@/modules/auth/hooks/useRegisterUser';

const RegisterPage = () => {
	const { form, onSubmit } = useRegisterUser();

	return (
		<ContainerAuth>
			<HeaderAuth
				title='Registrate'
				subtitle='Crea tu cuenta para empezar a organizar tus gastos.'
			/>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className='space-y-5 w-full'>
					<CustomInput
						control={form.control}
						name='username'
						label='Nombre de usuario'
						type='text'
						placeholder='Ingresa tu nombre de usuario'
					/>

					<CustomInput
						control={form.control}
						name='email'
						label='Email'
						type='email'
						placeholder='Ingresa tu email'
					/>

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

					<RedirectAuth
						href='/'
						text='¿Ya tienes una cuenta? Inicia sesión.'
					/>

					<AuthActionButton type={ACTIONS_AUTH_TYPE.REGISTER} />
				</form>
			</Form>
		</ContainerAuth>
	);
};

export default RegisterPage;
