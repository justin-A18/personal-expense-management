import { TRANSACTION_TYPE } from "@/modules/wallets/modules/dashboard/enums";
import { WalletEntity } from "./wallet.entity";

export interface TransactionEntity {
	id: string;
	type: TRANSACTION_TYPE;
	description: string;
	amount: string;
	date: string;
	wallet: WalletEntity;
	createdAt: string;
	updatedAt: string;
}
