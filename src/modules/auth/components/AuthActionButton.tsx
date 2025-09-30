import Link from 'next/link';
import { UserIcon } from 'lucide-react';

import { ACTIONS_AUTH_TYPE } from '../enums/auth.enum';
import { getLabelAuthButton } from '../helpers/auth.helper';
import { CustomAuthIcon } from './CustomAuthIcon';

interface AuthActionButtonProps {
	type?: ACTIONS_AUTH_TYPE;
	onClick?: () => void;
}

export const AuthActionButton = ({
	type = ACTIONS_AUTH_TYPE.LOGIN,
	onClick,
}: AuthActionButtonProps) => {
	return (
		<div className='mt-4 w-full'>
			<button
				className='btn-purple-primary'
				type='submit'
				onClick={onClick}>
				<CustomAuthIcon type={type} />
				{getLabelAuthButton(type)}
			</button>

			{type === ACTIONS_AUTH_TYPE.LOGIN && (
				<Link
					href={'/register'}
					className='btn-gray-primary'>
					<UserIcon />
					Registrarse
				</Link>
			)}
		</div>
	);
};
