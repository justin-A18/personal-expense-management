export interface GetAllTransactionsRequest {
	walletId: string;
	category?: string | null;
	type?: string | null;
	from?: string | null;
	to?: string | null;
	orderBy?: string | null;
}
