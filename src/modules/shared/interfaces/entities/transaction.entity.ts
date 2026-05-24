import { TRANSACTION_TYPE } from "@/modules/wallets/modules/dashboard/enums";
import type { CategoryIconKey } from "@/modules/wallets/modules/categories/const/category-icons";
import { WalletEntity } from "./wallet.entity";

export interface TransactionEntity {
	id: string;
	type: TRANSACTION_TYPE;
	description: string;
	amount: string;
	date: string;
	category?: {
		id: string;
		icon?: CategoryIconKey;
		name: string;
	};
	categoryId?: string;
	wallet: WalletEntity;
	createdAt: string;
	updatedAt: string;
}
