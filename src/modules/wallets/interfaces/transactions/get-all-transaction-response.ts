import { TransactionEntity } from "@/modules/shared/interfaces/entities/transaction.entity";

export interface GetAllTransactionsResponse {
	content: TransactionEntity[];
	totalElements: number;
	totalPages: number;
}