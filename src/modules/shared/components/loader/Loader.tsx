import React from 'react';
import { Spinner } from '../spinner/Spinner';

export const Loader = () => {
	return (
		<div className='top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2'>
			<Spinner className='size-10' />
		</div>
	);
};
