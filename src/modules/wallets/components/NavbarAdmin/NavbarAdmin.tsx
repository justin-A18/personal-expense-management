"use client";

import {
	ArrowRightLeftIcon,
	SettingsIcon,
	UserIcon,
	WalletIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CustomPopover } from "@/modules/shared/components/custom-popover/CustomPopover";
import { useWalletStore } from "../../store/useWalletStore";
import { ProfileModal } from "./ProfileModal";

export const NavbarAdmin = () => {
	const pathname = usePathname().split("/")[3];
	const wallet = useWalletStore((state) => state.wallet);
	const [isProfileOpen, setIsProfileOpen] = useState(false);

	return (
		<header className="w-full flex items-center justify-between gap-4 p-4 sm:p-6 border-b-2 border-[#2C2C2C]">
			<p className="min-w-0 truncate font-medium text-sm">
				<span className="text-[#626262]">{wallet?.name} /</span>{" "}
				{pathname.charAt(0).toUpperCase() + pathname.slice(1)}
			</p>

			<div className="flex shrink-0 items-center gap-2">
				<CustomPopover>
					<button
						type="button"
						aria-label="Opciones de billetera"
						className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-[#aaaaaa] transition-colors hover:border-purple-300/30 hover:bg-purple-400/10 hover:text-purple-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/50"
					>
						<SettingsIcon className="size-5" />
					</button>

					<div className="w-64 bg-[#1e1e1e] p-2">
						<div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
							<span className="flex size-9 items-center justify-center rounded-xl border border-purple-300/20 bg-purple-400/10 text-purple-100">
								<WalletIcon className="size-4" />
							</span>

							<div className="min-w-0">
								<p className="truncate text-sm font-semibold text-white">
									{wallet?.name}
								</p>
								<p className="text-xs text-[#aaaaaa]">Billetera activa</p>
							</div>
						</div>

						<Link
							href="/wallets"
							className="mt-2 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-[#aaaaaa] transition-colors hover:bg-purple-400/10 hover:text-purple-100"
						>
							<ArrowRightLeftIcon className="size-4 text-purple-200" />
							Cambiar billetera
						</Link>

						<button
							type="button"
							aria-label="Abrir configuración de perfil"
							onClick={() => setIsProfileOpen(true)}
							className="mt-2 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-[#aaaaaa] transition-colors hover:bg-purple-400/10 hover:text-purple-100 w-full cursor-pointer"
						>
							<UserIcon className="size-4 text-purple-200" />
							Ver perfil
						</button>
					</div>
				</CustomPopover>
			</div>

			<ProfileModal
				isOpen={isProfileOpen}
				onClose={() => setIsProfileOpen(false)}
			/>
		</header>
	);
};
