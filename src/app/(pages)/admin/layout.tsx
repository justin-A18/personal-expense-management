import { HeaderAdmin } from '@/app/_components/admin/header-admin/HeaderAdmin';
import { SideBar } from '@/app/_components/shared/sidebar/SideBar';
import React from 'react';

interface Props {
	children: React.ReactNode;
}

const layout = ({ children }: Props) => {
	return (
		<div className='grid md:grid-cols-[100px_1fr]'>
			<SideBar />
			<div className='w-full min-h-dvh bg-[#101010] rounded-2xl border-2 border-[#2C2C2C]'>
				<HeaderAdmin />

				<main className='w-full p-6'>{children}</main>
			</div>
		</div>
	);
};

export default layout;
