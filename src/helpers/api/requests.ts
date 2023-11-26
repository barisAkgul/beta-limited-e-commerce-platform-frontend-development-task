import { ISessionIDProps, ProductListResponse } from "~/types/general";
import { _getApiRequest } from "./request.helper";

export const getProductsList = (): Promise<ProductListResponse> =>
  _getApiRequest({
    requestEndpoint:
      "https://linkedin-cv-crawler.beta-limited.workers.dev/interview/products",
  });

export const getSessionID = (): Promise<ISessionIDProps> =>
  _getApiRequest({
    requestEndpoint:
      "https://linkedin-cv-crawler.beta-limited.workers.dev/interview/createsession",
  });
