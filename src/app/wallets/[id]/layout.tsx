import { MobileNavigation } from "@/modules/shared/components/sidebar/MobileNavigation";
import { SideBar } from "@/modules/shared/components/sidebar/SideBar";
import { NavbarAdmin } from "@/modules/wallets/components/NavbarAdmin/NavbarAdmin";

interface Props {
	children: React.ReactNode;
}

const layout = ({ children }: Props) => {
	return (
		<div className="grid w-full min-w-0 grid-cols-1 md:grid-cols-[100px_minmax(0,1fr)]">
			<SideBar />
			<div className="min-h-dvh min-w-0 w-full overflow-hidden rounded-2xl border-2 border-[#2C2C2C] bg-[#101010]">
				<NavbarAdmin />

				<main className="min-w-0 w-full overflow-hidden p-4 pb-28 sm:p-6 md:pb-6">
					{children}
				</main>
			</div>
			<MobileNavigation />
		</div>
	);
};

export default layout;
