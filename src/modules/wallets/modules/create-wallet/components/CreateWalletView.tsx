"use client";

import { CreditCardIcon, WalletCardsIcon } from "lucide-react";
import { CenteredLayout } from "@/modules/shared/components/centered-layout/CenteredLayout";
import { CustomControllerSelect } from "@/modules/shared/components/custom-controller-select/CustomControllerSelect";
import { CustomInput } from "@/modules/shared/components/custom-input/CustomInput";
import { CustomSelectAvatar } from "@/modules/shared/components/custom-select-avatar/CustomSelectAvatar";
import { CURRENCIES_OPTIONS } from "@/modules/shared/const";
import { Form } from "@/modules/shared/ui/form";
import { useCreateWallet } from "@/modules/wallets/hooks/useCreateWallet";

export const CreateWalletView = () => {
	const { form, handleSubmit, isPending } = useCreateWallet();

	return (
		<CenteredLayout hasBackButton>
			<div className="w-full rounded-3xl border border-white/10 bg-[#1e1e1e] p-5 shadow-2xl shadow-black/30 sm:p-6">
				<header className="mb-6 flex items-start gap-4 border-b border-white/10 pb-5">
					<div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-lg shadow-purple-950/30">
						<WalletCardsIcon className="size-6" />
					</div>
					<div className="min-w-0">
						<p className="text-sm font-medium text-purple-200">
							Nueva billetera
						</p>
						<h1 className="text-2xl font-semibold text-white">
							Crear billetera digital
						</h1>
						<p className="mt-1 text-sm leading-6 text-[#aaaaaa]">
							Configura tu billetera y empieza a registrar movimientos.
						</p>
					</div>
				</header>

				<Form {...form}>
					<form onSubmit={handleSubmit} className="w-full space-y-5">
						<CustomSelectAvatar
							control={form.control}
							name="avatar"
							label="Selecciona un avatar"
						/>
						<CustomInput
							control={form.control}
							name="name"
							label="Nombre"
							type="text"
							placeholder="Ingrese el nombre de su billetera"
						/>
						<CustomControllerSelect
							label="Moneda"
							control={form.control}
							name="currency"
							items={CURRENCIES_OPTIONS}
							className="w-full max-w-full"
							placeholder="Selecciona una moneda"
						/>
						<CustomInput
							control={form.control}
							name="balance"
							label="Balance inicial (opcional)"
							type="text"
							placeholder="Ingrese un balance inicial"
						/>
						<button
							type="submit"
							className="btn-purple-primary min-h-12 w-full"
							disabled={isPending}
						>
							<CreditCardIcon className="size-5" />
							Crear billetera
						</button>
					</form>
				</Form>
			</div>
		</CenteredLayout>
	);
};
