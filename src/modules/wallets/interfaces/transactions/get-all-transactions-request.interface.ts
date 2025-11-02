export interface GetAllTransactionsRequest {
	walletId: string;
	type?: string | null;
	from?: string | null;
	to?: string | null;
	orderBy?: string | null;
}
