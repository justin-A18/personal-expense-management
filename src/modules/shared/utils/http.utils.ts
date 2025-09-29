import { AxiosError } from "axios";

type ErrorResponse = {
	message?: string;
	mensaje?: string;
	errors?: Record<string, string[]>;
};

export const isNetworkError = (error: unknown): boolean =>
	(error as Error)?.message === "Failed to fetch";

export const parseErrorBlob = async (data: Blob): Promise<unknown> => {
	const text = await data.text();
	return JSON.parse(text);
};

export const extractErrorMessage = async (
	error: AxiosError<ErrorResponse>
): Promise<string> => {
	const { data } = error.response!;
	if (data instanceof Blob) {
		const json = await parseErrorBlob(data);
		if (typeof json === "object" && json !== null && "message" in json) {
			return (
				(json as ErrorResponse).mensaje ?? "Error desconocido del servidor"
			);
		}
	}

	if (data?.message) return data.message;
	if (data?.mensaje) return data.mensaje;
	if (data?.errors) {
		const keys = Object.keys(data.errors);
		return data.errors[keys[0]][0];
	}

	return "Error desconocido del servidor";
};