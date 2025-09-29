import { AuthActionButton } from '@/modules/auth/components/AuthActionButton';
import { CenteredLayout } from '@/modules/shared/components/centered-layout/CenteredLayout';
import { CenteredHeader } from '@/modules/shared/components/centered-header/CenteredHeader';
import { ACTIONS_AUTH_TYPE } from '@/modules/auth/enums/auth.enum';
import { Spinner } from '@/modules/shared/components/spinner/Spinner';

const ValidateAccountPage = () => {
	return (
		<CenteredLayout>
			<CenteredHeader
				title='Verificando tu cuenta...'
				subtitle='Espera un momento mientras confirmamos tu información'
			/>

			<Spinner className='border-t-[#C78CFF]' />

			{/*<AuthActionButton type={ACTIONS_AUTH_TYPE.VERIFY_ACCOUNT} /> */}
		</CenteredLayout>
	);
};

export default ValidateAccountPage;
