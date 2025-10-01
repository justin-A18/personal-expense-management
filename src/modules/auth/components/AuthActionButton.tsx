import Link from 'next/link';
import { UserIcon } from 'lucide-react';

import { ACTIONS_AUTH_TYPE } from '../enums/auth.enum';
import { getLabelAuthButton } from '../helpers/auth.helper';
import { CustomAuthIcon } from './CustomAuthIcon';

interface AuthActionButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	actionType?: ACTIONS_AUTH_TYPE;
}

export const AuthActionButton = ({
	actionType = ACTIONS_AUTH_TYPE.LOGIN,
	...props
}: AuthActionButtonProps) => {
	return (
		<div className='mt-4 w-full'>
			<button
				className='btn-purple-primary'
				{...props}>
				<CustomAuthIcon type={actionType} />
				{getLabelAuthButton(actionType)}
			</button>

			{actionType === ACTIONS_AUTH_TYPE.LOGIN && (
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
