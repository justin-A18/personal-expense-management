import type { BaseResponse } from "@/modules/shared/interfaces/base-response.interface";
import type { TransactionEntity } from "@/modules/shared/interfaces/entities/transaction.entity";
import httpClient from "@/modules/shared/providers/http/http.provider";
import type { GetReportRequest } from "../interfaces/reports/get-report-request.interface";
import type { GetReportWeeklyRequest } from "../interfaces/reports/get-report-weekly-request.interface";
import type {
	MonthlyTransactionReportResponse,
	WeeklyTransactionReportResponse,
} from "../interfaces/reports/get-report-weekly-response.interface";
import type {
	GetTrendsReportRequest,
	TrendsReportResponse,
} from "../interfaces/trends/get-trends-report.interface";
import type { CreateTransactionRequest } from "../interfaces/transactions/create-transaction-request.interface";
import type { GetAllTransactionsResponse } from "../interfaces/transactions/get-all-transaction-response";
import type { GetAllTransactionsRequest } from "../interfaces/transactions/get-all-transactions-request.interface";

export const getAllTransaction = async (
	body: GetAllTransactionsRequest,
	params: Record<string, number>,
): Promise<BaseResponse<GetAllTransactionsResponse>> => {
	return httpClient(
		`transactions/all?offset=${params.offset}&limit=${params.limit}`,
		{
			method: "post",
			body,
		},
	);
};

export const getTransactionById = async (
	id: string,
): Promise<BaseResponse<TransactionEntity>> => {
	return httpClient(`transactions/${id}`, {
		method: "get",
	});
};

export const createTransaction = async (
	body: CreateTransactionRequest,
): Promise<BaseResponse<TransactionEntity>> => {
	return httpClient("transactions", {
		method: "post",
		body,
	});
};

export const updateTransaction = async (
	id: string,
	body: CreateTransactionRequest,
): Promise<BaseResponse<TransactionEntity>> => {
	return httpClient(`transactions/${id}`, {
		method: "patch",
		body,
	});
};

export const deleteTransaction = async (id: string): Promise<BaseResponse> => {
	return httpClient(`transactions/${id}`, {
		method: "delete",
	});
};

export const getReportWeekly = async (
	body: GetReportWeeklyRequest,
): Promise<BaseResponse<WeeklyTransactionReportResponse[]>> => {
	return httpClient(
		`reports/weekly-report?walletId=${body.walletId}&from=${body.from}&to=${body.to}&type=${body.type}`,
		{
			method: "get",
		},
	);
};

export const getReportMonthly = async (
	body: GetReportRequest,
): Promise<BaseResponse<MonthlyTransactionReportResponse[]>> => {
	return httpClient(
		`reports/monthly-report?walletId=${body.walletId}&from=${body.from}&to=${body.to}`,
		{
			method: "get",
		},
	);
};

export const getTrendsReport = async (
	body: GetTrendsReportRequest,
): Promise<BaseResponse<TrendsReportResponse>> => {
	return httpClient(
		`reports/trends?walletId=${body.walletId}&from=${body.from}&to=${body.to}&comparisonMode=${body.comparisonMode}`,
		{
			method: "get",
		},
	);
};
