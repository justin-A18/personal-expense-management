export interface CreateTransactionRequest {
	type: 'Gasto' | 'Ingreso';
	description: string;
	amount: string;
	date: string;
	walletId: string;
}
