import { AxiosRequestConfig } from "axios";

export type HttpMethod = "get" | "post" | "put" | "patch" | "delete";

export interface HttpClientOptions {
	method?: HttpMethod;
	headers?: Record<string, string>;
	body?: unknown;
	config?: AxiosRequestConfig;
	baseURL?: string;
	expectedType?: 'File' | 'Blob';
}
