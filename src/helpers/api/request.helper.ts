import axios, { AxiosRequestConfig } from "axios";

interface IApiCallProps {
  requestEndpoint: string;
  sessionId?: string;
  data?: any;
}

export const _getApiRequest = async <T>({
  requestEndpoint,
  sessionId,
}: IApiCallProps): Promise<T> => {
  try {
    const config: AxiosRequestConfig = {};

    //If Session-ID is given, it is added to the headers of the request
    if (sessionId) {
      config.headers = {
        "Session-ID": sessionId,
      };
    }

    const response = await axios.get(requestEndpoint, config);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error in API call: ${error.message}`);
  }
};
