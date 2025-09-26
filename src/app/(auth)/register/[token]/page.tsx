import { AuthActionButton } from '@/modules/auth/components/AuthActionButton';
import { ContainerAuth } from '@/modules/auth/components/ContainerAuth';
import { HeaderAuth } from '@/modules/auth/components/HeaderAuth';
import { ACTIONS_AUTH_TYPE } from '@/modules/auth/enums/auth.enum';
import { Spinner } from '@/modules/shared/components/spinner/Spinner';

const ValidateAccountPage = () => {
	return (
		<ContainerAuth>
			<HeaderAuth
				title='Verificando tu cuenta...'
				subtitle='Espera un momento mientras confirmamos tu información'
			/>

			<Spinner className='border-t-[#C78CFF]' />

			{/*<AuthActionButton type={ACTIONS_AUTH_TYPE.VERIFY_ACCOUNT} /> */}
		</ContainerAuth>
	);
};

export default ValidateAccountPage;
