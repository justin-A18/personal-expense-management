import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getWalletById } from "../services/wallets.service";
import { useWalletStore } from "../store/useWalletStore";

export const useGetWalletById = () => {
	const params = useParams<{ id: string; }>();
	const setWallet = useWalletStore((state) => state.setWallet);

	const { data: walletData, isFetching: isFetchingWallet } = useQuery({
		queryKey: ['wallet', params.id],
		queryFn: async () => {
			const { data } = await getWalletById(params.id);
			setWallet(data);
			return data;
		},
		enabled: !!params.id,
	});

	return {
		walletData,
		isFetchingWallet
	};
};
