import { useMutation } from '@tanstack/react-query';
import { createWallet } from '../services/wallets.service';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CreateWalletSchema, createWalletSchema } from '../schemas/create-wallet.schema';
import { CreateWalletBody } from '../interfaces/create-wallet-request.interface';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { AVATARS } from '@/modules/shared/components/custom-select-avatar/CustomSelectAvatar';

const initialValues = {
	name: '',
	balance: '0.00',
	currency: '',
	avatar: AVATARS[0].url,
};

export const useCreateWallet = () => {
	const router = useRouter();

	const form = useForm({
		mode: 'onChange',
		resolver: zodResolver(createWalletSchema),
		defaultValues: initialValues,
	});

	const { mutateAsync, isPending } = useMutation({
		mutationFn: (body: CreateWalletBody) => createWallet(body),
		onSuccess: (data) => {
			toast.success(data.message);
			form.reset(initialValues);
		},
		onError: (error) => {
			toast.error(error.message);
		},
		onSettled: () => {
			router.push('/wallets');
		}
	});

	const onSubmit = async (values: CreateWalletSchema) => {
		await mutateAsync(values);
	};

	return {
		form,
		isPending,
		handleSubmit: form.handleSubmit(onSubmit),
	};
};
