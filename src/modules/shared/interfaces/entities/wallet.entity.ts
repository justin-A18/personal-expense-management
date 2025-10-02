import { UserEntity } from "./user.entity";

export interface WalletEntity {
	id: string;
	name: string;
	balance: string;
	avatar: string;
	currency: string;
	user: Omit<UserEntity, 'password'>;
}