"use client";

import { LogOutIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useAuthStore } from "../../store/useAuthStore";
import { ItemSideBar } from "./ItemSideBar";
import { SIDEBAR_ITEMS } from "./sidebar.config";

export const SideBar = () => {
	const basePath = usePathname().split("/").slice(0, 3).join("/");
	const logout = useAuthStore((state) => state.clearAuth);

	return (
		<aside className="sticky top-0 z-[70] hidden h-dvh overflow-visible p-3 md:flex">
			<nav className="relative z-[70] flex h-full w-full flex-col items-center overflow-visible rounded-2xl border border-white/10 bg-[#1e1e1e] px-3 py-4 shadow-2xl shadow-black/30">
				<div className="flex size-14 items-center justify-center rounded-2xl border border-purple-300/20 bg-purple-400/10 shadow-inner shadow-white/5">
					<img src="/logo.svg" alt="Personal Expense" className="size-9" />
				</div>

				<div className="my-5 h-px w-10 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

				<div className="flex flex-1 flex-col items-center gap-3">
					{SIDEBAR_ITEMS.map((item) => (
						<ItemSideBar
							key={item.href}
							href={basePath + item.href}
							label={item.label}
						>
							{item.icon}
						</ItemSideBar>
					))}
				</div>

				<div className="my-5 h-px w-10 bg-gradient-to-r from-transparent via-white/15 to-transparent" />

				<ItemSideBar label="Cerrar sesión" onClick={logout} variant="danger">
					<LogOutIcon />
				</ItemSideBar>
			</nav>
		</aside>
	);
};
