export interface GetAllTransactionsRequest {
	walletId: string;
	category?: string | null;
	type?: string | null;
	date?: string | null;
	orderBy?: string | null;
}
