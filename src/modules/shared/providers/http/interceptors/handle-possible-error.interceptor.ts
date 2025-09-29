import { AxiosResponse } from "axios";

export const handlePossibleError = (response: AxiosResponse) => {
	if (!response || response.status >= 400) {
		console.error("Error en la respuesta HTTP:", response);
	}

	return response;
};