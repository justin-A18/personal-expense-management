"use client";

import {
	MailIcon,
	ShieldCheckIcon,
	Trash2Icon,
	UserIcon,
	XIcon,
} from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { ConfirmationModal } from "@/modules/shared/components/confirmation-modal/ConfirmationModal";
import { useAuthStore } from "@/modules/shared/store/useAuthStore";
import { useDeleteWallet } from "@/modules/wallets/hooks/useDeleteWallet";
import { useWalletStore } from "@/modules/wallets/store/useWalletStore";

interface ProfileModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export const ProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
	const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
	const user = useAuthStore((state) => state.user);
	const wallet = useWalletStore((state) => state.wallet);
	const { deleteWallet, isDeletingWallet } = useDeleteWallet(() => {
		setIsDeleteConfirmOpen(false);
		onClose();
	});
	const initial = user?.username?.charAt(0).toUpperCase() || "U";

	if (!isOpen) return null;

	const handleDeleteWallet = () => {
		if (!wallet?.id) return;
		deleteWallet(wallet.id);
	};

	return createPortal(
		<>
			<div
				className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-in fade-in duration-200"
				onClick={onClose}
			>
				<section
					className="w-full max-w-md rounded-3xl border border-white/10 bg-[#1e1e1e] p-5 text-white shadow-2xl shadow-black/50 animate-in fade-in zoom-in-95 slide-in-from-bottom-3 duration-200"
					onClick={(event) => event.stopPropagation()}
				>
					<header className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
						<div className="flex items-center gap-4">
							<div className="flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 text-xl font-bold text-white shadow-lg shadow-purple-950/30">
								{initial}
							</div>
							<div className="min-w-0">
								<p className="text-sm font-medium text-purple-200">Mi perfil</p>
								<h2 className="truncate text-2xl font-semibold">
									{user?.username || "Usuario"}
								</h2>
							</div>
						</div>

						<button
							type="button"
							aria-label="Cerrar perfil"
							onClick={onClose}
							className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-[#aaaaaa] transition-colors hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400/50"
						>
							<XIcon className="size-5" />
						</button>
					</header>

					<div className="mt-5 space-y-3">
						<div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
							<span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-purple-400/10 text-purple-200">
								<UserIcon className="size-5" />
							</span>
							<div className="min-w-0">
								<p className="text-xs font-medium text-[#aaaaaa]">Nombre</p>
								<p className="truncate text-sm font-semibold text-white">
									{user?.username || "No disponible"}
								</p>
							</div>
						</div>

						<div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
							<span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-purple-400/10 text-purple-200">
								<MailIcon className="size-5" />
							</span>
							<div className="min-w-0">
								<p className="text-xs font-medium text-[#aaaaaa]">Correo</p>
								<p className="truncate text-sm font-semibold text-white">
									{user?.email || "No disponible"}
								</p>
							</div>
						</div>

						<div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
							<span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-purple-400/10 text-purple-200">
								<ShieldCheckIcon className="size-5" />
							</span>
							<div className="min-w-0">
								<p className="text-xs font-medium text-[#aaaaaa]">Estado</p>
								<p className="truncate text-sm font-semibold text-white">
									{user?.isEmailVerified
										? "Correo verificado"
										: "Correo pendiente de verificación"}
								</p>
							</div>
						</div>
					</div>

					<div className="mt-5 border-t border-white/10 pt-5">
						<button
							type="button"
							onClick={() => setIsDeleteConfirmOpen(true)}
							disabled={!wallet?.id || isDeletingWallet}
							className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-red-300/20 bg-red-500/10 px-4 text-sm font-semibold text-red-100 transition-colors hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-50"
						>
							<Trash2Icon className="size-4" />
							Eliminar billetera
						</button>
					</div>
				</section>
			</div>

			<ConfirmationModal
				isOpen={isDeleteConfirmOpen}
				title="Eliminar billetera"
				description={`¿Seguro que deseas eliminar ${
					wallet?.name || "esta billetera"
				}? Esta acción no se puede deshacer.`}
				confirmLabel="Eliminar"
				isLoading={isDeletingWallet}
				onClose={() => setIsDeleteConfirmOpen(false)}
				onConfirm={handleDeleteWallet}
			/>
		</>,
		document.body,
	);
};
