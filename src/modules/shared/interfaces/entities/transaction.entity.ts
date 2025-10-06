import { WalletEntity } from "./wallet.entity";

export interface TransactionEntity {
	id: string;
	type: string;
	description: string;
	amount: string;
	date: string;
	wallet: WalletEntity;
	createdAt: string;
	updatedAt: string;
}
