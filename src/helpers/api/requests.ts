import { ProductListResponse } from "~/types/general";
import { _getApiRequest } from "./request.helper";

export const getProductsList = (): Promise<ProductListResponse> =>
  _getApiRequest({
    requestEndpoint:
      "https://linkedin-cv-crawler.beta-limited.workers.dev/interview/products",
  });
