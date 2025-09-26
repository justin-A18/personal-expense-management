'use client';

import { AuthActionButton } from '@/modules/auth/components/AuthActionButton';
import { HeaderAuth } from '@/modules/auth/components/HeaderAuth';
import { RedirectAuth } from '@/modules/auth/components/RedirectAuth';
import { ContainerAuth } from '@/modules/auth/components/ContainerAuth';

import { CustomInput } from '@/modules/shared/components/custom-input/CustomInput';
import { Form } from '@/modules/shared/ui/form';

import { useLoginUser } from '@/modules/auth/hooks/useLoginUser';

export default function LoginPage() {
	const { form, onSubmit } = useLoginUser();

	return (
		<ContainerAuth>
			<HeaderAuth
				title='Login'
				subtitle='Organiza tus gastos, cuida tu bolsillo.'
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

					<CustomInput
						control={form.control}
						name='password'
						label='Contraseña'
						type='password'
						placeholder='Ingresa tu contraseña'
					/>

					<RedirectAuth
						href='/recover-password'
						text='¿Olvidaste tu contraseña?'
					/>

					<AuthActionButton />
				</form>
			</Form>
		</ContainerAuth>
	);
}
