export interface BaseResponse<T = null> {
	data: T;
	message: string;
}