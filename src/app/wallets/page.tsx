import { CenteredHeader } from '@/modules/shared/components/centered-header/CenteredHeader';
import { CenteredLayout } from '@/modules/shared/components/centered-layout/CenteredLayout';
import { WalletItem } from '@/modules/wallets/components/WalletItem/WalletItem';
import { CreditCardIcon } from 'lucide-react';
import Link from 'next/link';

const page = () => {
	return (
		<CenteredLayout>
			<CenteredHeader
				hiddenLogo
				title='Mis Billeteras Digitales'
				subtitle='Accede, organiza y gestiona todas tus billeteras en un solo lugar.'
			/>

			<div className='w-full space-y-4'>
				{Array.from({ length: 3 }).map((_, index) => (
					<WalletItem key={index} />
				))}
			</div>

			<Link
				href={'/wallets/create'}
				className='btn-gray-secondaty py-4'>
				<CreditCardIcon /> Crear billetera
			</Link>
		</CenteredLayout>
	);
};

export default page;
