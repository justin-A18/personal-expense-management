import type { CreateTransactionSchema } from "../modules/transactions/schema/transaction.schema";

export const CREATE_TRANSACTION_INITIAL_VALUES: CreateTransactionSchema = {
	type: "Gasto",
	description: "",
	amount: "",
	date: "",
	categoryId: "",
};
