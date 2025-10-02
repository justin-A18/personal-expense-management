import { useQuery } from '@tanstack/react-query';
import { getAllWallets } from '../services/wallets.service';

export const useGetAllWallets = () => {
	const { data: walletsData, isFetching: isFetchingWallets } = useQuery({
		queryKey: ['wallets'],
		queryFn: async () => {
			const { data } = await getAllWallets();
			return data;
		},
		initialData: [],
	});

	return {
		walletsData,
		isFetchingWallets
	};
};
