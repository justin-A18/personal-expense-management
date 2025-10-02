import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { WalletEntity } from "@/modules/shared/interfaces/entities/wallet.entity";

export interface WalletState {
	wallet: WalletEntity | null;
	setWallet: (wallet: WalletEntity) => void;
	clearState: () => void;
};

const initialValues = {
	wallet: null,
};

export const useWalletStore = create<WalletState>()(
	persist(
		(set, get) => ({
			...get(),
			...initialValues,
			setWallet: (newData: WalletEntity) => {
				set(() => ({ wallet: { ...get().wallet, ...newData } }));
			},
			clearState: () => {
				useWalletStore.persist.clearStorage();
				set(initialValues);
			},
		}),
		{
			name: "wallet-storage",
			storage: createJSONStorage(() => sessionStorage),
		}
	)
);