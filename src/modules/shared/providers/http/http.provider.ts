import axios, { AxiosError, AxiosInstance, ResponseType } from "axios";
import { HttpClientOptions } from "../../interfaces/http.interface";
import {
  appendToken,
  handlePossibleError,
  handleSessionExpired,
} from "./interceptors";
import { extractErrorMessage, isNetworkError } from "../../utils/http.utils";

const axiosInstances: { [key: string]: AxiosInstance; } = {};

const getAxiosInstance = (baseURL: string, expectedType?: "File" | "Blob") => {
  let accept =
    "application/json, text/plain, application/x-www-form-urlencoded ,*/*";
  let responseType: ResponseType = "json";

  if (expectedType === "File" || expectedType === "Blob") {
    accept = "application/octet-stream";
    responseType = "blob";
  }

  if (!axiosInstances[baseURL]) {
    const instance = axios.create({
      baseURL,
      timeout: 1000000,
      headers: {
        "Content-Type": "application/json",
        Accept: accept,
      },
      responseType,
    });

    instance.interceptors.request.use(appendToken, (error) => {
      return Promise.reject(error);
    });
    instance.interceptors.response.use(
      handlePossibleError,
      handleSessionExpired
    );

    axiosInstances[baseURL] = instance;
  }
  return axiosInstances[baseURL];
};

const defaultInstance = getAxiosInstance(process.env.NEXT_PUBLIC_URL_BASE!);

export class ExceptionHttpError extends Error {
  type!: string;
  status!: number;
  constructor(message: string, type: string, status: number) {
    super(message);
    this.type = type;
    this.status = status;
    this.stack = "ExceptionHttpError";
  }
}

export const httpClient = async <T>(
  endpoint: string,
  options: HttpClientOptions
): Promise<T> => {
  const { method = "get", body, config, baseURL, expectedType } = options;
  try {
    const instance = baseURL
      ? getAxiosInstance(baseURL, expectedType)
      : defaultInstance;

    const response = await instance.request({
      url: endpoint,
      method,
      data: body,
      ...config,
    });

    // Si esperas un blob, devuelve también los headers
    if (expectedType === "Blob") {
      return {
        data: response.data,
        headers: response.headers,
      } as T;
    }

    return response.data as T;
  } catch (error) {
    if (isNetworkError(error)) throw error;

    if (error instanceof AxiosError && error.response) {
      const errorMessage = await extractErrorMessage(error);
      throw {
        message: errorMessage,
        type: error.name,
        status: error.response.status,
      };
    }

    throw error;
  }
};

export default httpClient;