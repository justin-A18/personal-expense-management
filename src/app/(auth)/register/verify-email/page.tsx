'use client';

import { AuthActionButton } from '@/modules/auth/components/AuthActionButton';
import { ContainerAuth } from '@/modules/auth/components/ContainerAuth';
import { HeaderAuth } from '@/modules/auth/components/HeaderAuth';
import { ACTIONS_AUTH_TYPE } from '@/modules/auth/enums/auth.enum';
import { useRouter } from 'next/navigation';

const VerifyEmailPage = () => {
	const router = useRouter();

	return (
		<ContainerAuth>
			<HeaderAuth	
				title='Verifica tu correo'
				subtitle='Te hemos enviado un email. Haz clic en el enlace para activar tu cuenta.'
			/>

			<AuthActionButton
				type={ACTIONS_AUTH_TYPE.VERIFY_ACCOUNT}
				onClick={() => router.push('/')}
			/>
		</ContainerAuth>
	);
};

export default VerifyEmailPage;
