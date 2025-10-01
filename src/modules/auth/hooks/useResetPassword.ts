import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { ResetPasswordSchema, resetPasswordSchema } from '../schemas/auth.schema';

export const useResetPassword = () => {
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


	return {
		form,
		handleSubmit: form.handleSubmit(onSubmit),
	};
};
