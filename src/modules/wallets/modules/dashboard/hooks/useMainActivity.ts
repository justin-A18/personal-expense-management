import { useGetWalletById } from "@/modules/wallets/hooks/useGetWalletById";

export const useMainActivity = () => {
	const { isFetchingWallet, walletData } = useGetWalletById();

	return {
		walletData,
		isFetchingWallet
	};
};
