'use client';

import { CenteredLayout } from '@/modules/shared/components/centered-layout/CenteredLayout';
import { Spinner } from '@/modules/shared/components/spinner/Spinner';
import { WalletItem } from '@/modules/wallets/components/WalletItem/WalletItem';
import { useGetAllWallets } from '@/modules/wallets/hooks/useGetAllWallets';
import { CreditCardIcon, PlusIcon } from 'lucide-react';
import Link from 'next/link';

const WalletsPage = () => {
	const { isFetchingWallets, walletsData } = useGetAllWallets();

	return (
		<CenteredLayout>
			<div className='w-full rounded-3xl border border-white/10 bg-[#1e1e1e] p-5 shadow-2xl shadow-black/30 sm:p-6'>
				<div className='mb-6 flex items-start gap-4'>
					<div className='flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-lg shadow-purple-950/30'>
						<CreditCardIcon className='size-6' />
					</div>
					<div className='min-w-0'>
						<h1 className='text-2xl font-semibold text-white'>
							Mis billeteras digitales
						</h1>
						<p className='mt-1 text-sm leading-6 text-[#aaaaaa]'>
							Accede, organiza y gestiona tus billeteras en un solo lugar.
						</p>
					</div>
				</div>

				{isFetchingWallets ? (
					<div className='flex min-h-40 items-center justify-center'>
						<Spinner />
					</div>
				) : (
					<div className='w-full space-y-3'>
						{walletsData.map((wallet) => (
							<WalletItem
								key={wallet.id}
								wallet={wallet}
							/>
						))}
					</div>
				)}

				<Link
					href='/wallets/create'
					className='btn-purple-primary mt-5 min-h-12'>
					<PlusIcon className='size-5' />
					Crear billetera
				</Link>
			</div>
		</CenteredLayout>
	);
};

export default WalletsPage;
