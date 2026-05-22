import { MobileNavigation } from "@/modules/shared/components/sidebar/MobileNavigation";
import { SideBar } from "@/modules/shared/components/sidebar/SideBar";
import { NavbarAdmin } from "@/modules/wallets/components/NavbarAdmin/NavbarAdmin";

interface Props {
	children: React.ReactNode;
}

const layout = ({ children }: Props) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-[100px_1fr]">
			<SideBar />
			<div className="w-full min-h-dvh bg-[#101010] rounded-2xl border-2 border-[#2C2C2C]">
				<NavbarAdmin />

				<main className="w-full p-4 pb-28 sm:p-6 md:pb-6">{children}</main>
			</div>
			<MobileNavigation />
		</div>
	);
};

export default layout;
