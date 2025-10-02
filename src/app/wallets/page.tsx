'use client';

import { CenteredHeader } from '@/modules/shared/components/centered-header/CenteredHeader';
import { CenteredLayout } from '@/modules/shared/components/centered-layout/CenteredLayout';
import { Spinner } from '@/modules/shared/components/spinner/Spinner';
import { WalletItem } from '@/modules/wallets/components/WalletItem/WalletItem';
import { useGetAllWallets } from '@/modules/wallets/hooks/useGetAllWallets';
import { CreditCardIcon } from 'lucide-react';
import Link from 'next/link';

const WalletsPage = () => {
	const { isFetchingWallets, walletsData } = useGetAllWallets();

	return (
		<CenteredLayout>
			<CenteredHeader
				hiddenLogo
				title='Mis Billeteras Digitales'
				subtitle='Accede, organiza y gestiona todas tus billeteras en un solo lugar.'
			/>

			{isFetchingWallets ? (
				<Spinner />
			) : (
				<div className='w-full space-y-4'>
					{walletsData.map((wallet, index) => (
						<WalletItem
							key={index}
							wallet={wallet}
						/>
					))}
				</div>
			)}

			<Link
				href={'/wallets/create'}
				className='btn-gray-secondaty py-4'>
				<CreditCardIcon /> Crear billetera
			</Link>
		</CenteredLayout>
	);
};

export default WalletsPage;
