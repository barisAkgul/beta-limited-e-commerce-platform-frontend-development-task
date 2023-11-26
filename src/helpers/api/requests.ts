import axios from "axios";

import {
  ISessionIDProps,
  IShoppingCartItemProps,
  ProductListResponse,
  ShoppingCartResponse,
} from "~/types/general";
import { _getApiRequest } from "./request.helper";

// GET REQUESTS

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

export const getShoppingCartList = (
  sessionId: string | undefined
): Promise<ShoppingCartResponse> =>
  _getApiRequest({
    requestEndpoint:
      "https://linkedin-cv-crawler.beta-limited.workers.dev/interview/view-cart",
    sessionId,
  });

export const getSearchProductListWithName = (
  productName: string
): Promise<IShoppingCartItemProps> =>
  _getApiRequest({
    requestEndpoint: `https://linkedin-cv-crawler.beta-limited.workers.dev/interview/search?name=${productName}`,
  });

//POST REQUESTS

export const addToCart = async (
  productId: string,
  sessionId: string | null
) => {
  try {
    const addToCartEndpoint = `https://linkedin-cv-crawler.beta-limited.workers.dev/interview/add-to-cart?id=${productId}`;

    await axios.post(
      addToCartEndpoint,
      {},
      {
        headers: {
          "Session-ID": sessionId,
        },
      }
    );
  } catch (error: any) {
    console.error("Error adding to cart:", error.message);
  }
};

export const subtractFromCart = async (
  productId: string,
  sessionId: string | null
) => {
  try {
    const subtractFromCartEndpoint = `https://linkedin-cv-crawler.beta-limited.workers.dev/interview/subtract-from-cart?id=${productId}`;

    await axios.post(
      subtractFromCartEndpoint,
      {},
      {
        headers: {
          "Session-ID": sessionId,
        },
      }
    );
  } catch (error: any) {
    console.error("Error subtracting from cart:", error.message);
  }
};
