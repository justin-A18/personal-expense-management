import { ACTIONS_AUTH_TYPE } from '../enums/auth.enum';
import { ArrowLeftIcon, KeyRoundIcon, MailIcon, UserIcon } from 'lucide-react';

interface CustomAuthIconProps {
	type: ACTIONS_AUTH_TYPE;
}

export const CustomAuthIcon = ({ type }: CustomAuthIconProps) => {
	switch (type) {
		case 'login':
			return <KeyRoundIcon className='w-5 h-5' />;
		case 'register':
			return <UserIcon className='w-5 h-5' />;
		case 'recover-password':
			return <MailIcon className='w-5 h-5' />;
		case 'reset-password':
			return <KeyRoundIcon className='w-5 h-5' />;
		case 'verify-account':
			return <ArrowLeftIcon className='w-5 h-5' />;
		default:
			return <KeyRoundIcon className='w-5 h-5' />;
	}
};
