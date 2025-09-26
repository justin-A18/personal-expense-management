import { loginSchema, LoginSchema } from '../schemas/auth.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

export const useLoginUser = () => {
	const router = useRouter();

	const form = useForm({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
		mode: 'onChange',
	});

	const onSubmit = (values: LoginSchema) => {
		console.log(values);
		router.push('/admin');
	};

	return { form, onSubmit };
};
