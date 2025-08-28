import { KeyRoundIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';

interface ActionsAuthProps {
	type?: 'login' | 'register';
}

export const ActionsAuth = ({ type = 'login' }: ActionsAuthProps) => {
	return (
		<div className='mt-4 '>
			<button
				className='w-full inline-flex items-center justify-center px-4 py-3 gap-4 bg-[#C78CFF] text-black rounded-lg font-medium cursor-pointer hover:bg-[#d5adfa] transition-colors duration-300'
				type='submit'>
				{type === 'login' ? <KeyRoundIcon /> : <UserIcon />}
				{type === 'login' ? 'Ingresar' : 'Registrarse'}
			</button>

			{type === 'login' && (
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
