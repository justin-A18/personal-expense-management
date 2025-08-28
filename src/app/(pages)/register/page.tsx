'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '@/app/_components/ui/form';
import { useRouter } from 'next/navigation';
import { CustomInput } from './../../_components/shared/CustomInput/CustomInput';
import { HeaderAuth } from './../../_components/auth/HeaderAuth';
import { ActionsAuth } from './../../_components/auth/ActionsAuth';
import { RedirectAuth } from './../../_components/auth/RedirectAuth';
import { RegisterSchema, registerSchema } from '@/app/_schemas/auth.schema';

const page = () => {
	const router = useRouter();

	const form = useForm({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			name: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		mode: 'onChange',
	});

	function onSubmit(values: RegisterSchema) {
		console.log(values);
		router.push('/');
	}

	return (
		<div className='w-full min-h-dvh flex flex-col items-center justify-center rounded-lg bg-[#101010]'>
			<div className='max-w-md w-full p-5 sm:p-8 rounded-lg flex flex-col items-center gap-6'>
				<HeaderAuth
					title='Registro'
					subtitle='Crea tu cuenta para empezar a organizar tus gastos.'
				/>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-5 w-full'>
						<CustomInput
							control={form.control}
							name='name'
							label='Nombre'
							type='text'
							placeholder='Ingresa tu nombre'
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

						<ActionsAuth type='register' />
					</form>
				</Form>
			</div>
		</div>
	);
};

export default page;
