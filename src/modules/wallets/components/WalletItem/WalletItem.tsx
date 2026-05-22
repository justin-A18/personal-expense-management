import { ArrowRightIcon, WalletCardsIcon } from "lucide-react";
import Link from "next/link";
import { AVATARS } from "@/modules/shared/components/custom-select-avatar/CustomSelectAvatar";
import type { WalletEntity } from "@/modules/shared/interfaces/entities/wallet.entity";

interface WalletItemProps {
	wallet: WalletEntity;
}

export const WalletItem = ({ wallet }: WalletItemProps) => {
	const walletAvatar = AVATARS.find((avatar) => avatar.url === wallet.avatar);
	const Icon = walletAvatar?.Icon || WalletCardsIcon;

	return (
		<Link
			href={`/wallets/${wallet.id}/dashboard`}
			className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-purple-300/30 hover:bg-purple-400/10 hover:shadow-xl hover:shadow-purple-950/20"
		>
			<div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-purple-300/20 bg-purple-400/10 text-purple-100 shadow-inner shadow-white/5">
				<Icon className="size-6" />
			</div>

			<div className="min-w-0 flex-1">
				<p className="truncate text-base font-semibold text-white">
					{wallet.name}
				</p>
				<div className="mt-1 flex items-center gap-1.5 text-xs font-medium text-[#aaaaaa]">
					<WalletCardsIcon className="size-3.5 text-purple-200" />
					{walletAvatar?.label || "Billetera digital"}
				</div>
			</div>

			<div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#1e1e1e] text-[#aaaaaa] transition-colors group-hover:border-purple-300/30 group-hover:text-purple-100">
				<ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
			</div>
		</Link>
	);
};
