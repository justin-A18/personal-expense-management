import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { deleteWallet } from '../services/wallets.service';
import { useWalletStore } from '../store/useWalletStore';

export const useDeleteWallet = (onSuccess?: () => void) => {
	const router = useRouter();
	const queryClient = useQueryClient();
	const clearWallet = useWalletStore((state) => state.clearState);

	const { mutateAsync, isPending } = useMutation({
		mutationFn: (walletId: string) => deleteWallet(walletId),
		onSuccess: (data) => {
			toast.success(data.message);
			clearWallet();
			queryClient.invalidateQueries({ queryKey: ['wallets'] });
			onSuccess?.();
			router.push('/wallets');
		},
		onError: (error) => {
			toast.error(error.message);
		},
	});

	return {
		deleteWallet: mutateAsync,
		isDeletingWallet: isPending,
	};
};
