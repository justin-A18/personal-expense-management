import { zodResolver } from '@hookform/resolvers/zod';
import { useParams, useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { ResetPasswordSchema, resetPasswordSchema } from '../schemas/auth.schema';
import { useMutation } from '@tanstack/react-query';
import { changePassword } from '../services/auth.service';
import { ChangePasswordBody } from '../interfaces/request';

export const useResetPassword = () => {
	const router = useRouter();
	const params = useParams<{ token: string; }>();

	const form = useForm({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			confirmPassword: '',
			password: '',
		},
		mode: 'onChange',
	});

	const { mutateAsync, isPending } = useMutation({
		mutationFn: (body: ChangePasswordBody) => changePassword(body),
		onSuccess: () => {
			router.push('/change-password/success');
		}
	});

	const onSubmit = async (values: ResetPasswordSchema) => {
		await mutateAsync({ ...values, token: params.token });
	};

	return {
		form,
		handleSubmit: form.handleSubmit(onSubmit),
		isPending
	};
};
