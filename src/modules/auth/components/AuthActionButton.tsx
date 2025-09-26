import Link from 'next/link';
import { UserIcon } from 'lucide-react';

import { ACTIONS_AUTH_TYPE } from '../enums/auth.enum';
import { getLabelAuthButton } from '../helpers/auth.helper';
import { CustomAuthIcon } from './CustomAuthIcon';

interface AuthActionButtonProps {
	type?: ACTIONS_AUTH_TYPE;
}

export const AuthActionButton = ({
	type = ACTIONS_AUTH_TYPE.LOGIN,
}: AuthActionButtonProps) => {
	return (
		<div className='mt-4 w-full'>
			<button
				className='w-full inline-flex items-center justify-center px-4 py-3 gap-4 bg-[#C78CFF] text-black rounded-lg font-medium cursor-pointer hover:bg-[#d5adfa] transition-colors duration-300'
				type='submit'>
				<CustomAuthIcon type={type} />
				{getLabelAuthButton(type)}
			</button>

			{type === ACTIONS_AUTH_TYPE.LOGIN && (
				<Link
					href={'/register'}
					className='w-full inline-flex items-center justify-center px-4 py-3 gap-4 border-2 border-[#aaaaaa] rounded-lg font-medium mt-4 cursor-pointer  transition-colors text-[#aaaaaa] hover:bg-[#202020] duration-300'>
					<UserIcon />
					Registrarse
				</Link>
			)}
		</div>
	);
};
