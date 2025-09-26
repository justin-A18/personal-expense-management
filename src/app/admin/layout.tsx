import { NavbarAdmin } from '@/modules/admin/components/NavbarAdmin/NavbarAdmin';
import { SideBar } from '@/modules/shared/components/sidebar/SideBar';

interface Props {
	children: React.ReactNode;
}

const layout = ({ children }: Props) => {
	return (
		<div className='grid grid-cols-1 md:grid-cols-[100px_1fr]'>
			<SideBar />
			<div className='w-full min-h-dvh bg-[#101010] rounded-2xl border-2 border-[#2C2C2C]'>
				<NavbarAdmin />

				<main className='w-full p-6'>{children}</main>
			</div>
		</div>
	);
};

export default layout;
