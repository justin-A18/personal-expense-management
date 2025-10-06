import { BaseResponse } from "@/modules/shared/interfaces/base-response.interface";
import httpClient from "@/modules/shared/providers/http/http.provider";
import { GetAllTransactionsRequest } from "../interfaces/transactions/get-all-transactions-request.interface";
import { GetAllTransactionsResponse } from "../interfaces/transactions/get-all-transaction-response";
import { TransactionEntity } from "@/modules/shared/interfaces/entities/transaction.entity";
import { GetReportRequest } from "../interfaces/reports/get-report-request.interface";
import { GetReportWeeklyRequest } from "../interfaces/reports/get-report-weekly-request.interface";
import { MonthlyTransactionReportResponse, WeeklyTransactionReportResponse } from "../interfaces/reports/get-report-weekly-response.interface";

export const getAllTransaction = async (body: GetAllTransactionsRequest, params: Record<string, number>): Promise<BaseResponse<GetAllTransactionsResponse>> => {
	return httpClient(`transactions/all?offset=${params.offset}&limit=${params.limit}`, {
		method: "post",
		body
	});
};

export const getTransactionById = async (id: string): Promise<BaseResponse<TransactionEntity>> => {
	return httpClient(`transactions/${id}`, {
		method: "get",
	});
};

export const getReportWeekly = async (body: GetReportWeeklyRequest): Promise<BaseResponse<WeeklyTransactionReportResponse[]>> => {
	return httpClient(`reports/weekly-report?walletId=${body.walletId}&from=${body.from}&to=${body.to}&type=${body.type}`, {
		method: "get",
	});
};

export const getReportMonthly = async (body: GetReportRequest): Promise<BaseResponse<MonthlyTransactionReportResponse[]>> => {
	return httpClient(`reports/monthly-report?walletId=${body.walletId}&from=${body.from}&to=${body.to}`, {
		method: "get",
	});
};