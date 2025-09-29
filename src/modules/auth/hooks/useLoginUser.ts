import { loginSchema, LoginSchema } from '../schemas/auth.schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { loginUser } from '../services/auth.service';
import { LoginUserBody } from '../interfaces/request';

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

	const onSubmit = async (values: LoginSchema) => {
		await mutateAsync(values);
	};

	const { mutateAsync } = useMutation({
		mutationFn: (body: LoginUserBody) => loginUser(body),
		onSuccess: () => {
			router.push('/admin');
		}
	});

	return { form, onSubmit };
};
