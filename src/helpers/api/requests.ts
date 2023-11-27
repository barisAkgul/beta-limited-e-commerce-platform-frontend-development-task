import axios from "axios";

import { BASE_URL, ENDPOINDS } from "./constants";

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
    requestEndpoint: `${BASE_URL}${ENDPOINDS.PRODUCTS}`,
  });

export const getSessionID = (): Promise<ISessionIDProps> =>
  _getApiRequest({
    requestEndpoint: `${BASE_URL}${ENDPOINDS.CREATESESSION}`,
  });

export const getShoppingCartList = (
  sessionId: string | undefined
): Promise<ShoppingCartResponse> =>
  _getApiRequest({
    requestEndpoint: `${BASE_URL}${ENDPOINDS.VIEWCART}`,
    sessionId,
  });

export const getSearchProductListWithName = (
  productName: string
): Promise<ProductListResponse> =>
  _getApiRequest({
    requestEndpoint: `${BASE_URL}${ENDPOINDS.SEARCH}?name=${productName}`,
  });

//POST REQUESTS

export const addToCart = async (
  productId: string,
  sessionId: string | null
) => {
  try {
    const addToCartEndpoint = `${BASE_URL}${ENDPOINDS.ADDTOCART}?id=${productId}`;

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
    const subtractFromCartEndpoint = `${BASE_URL}${ENDPOINDS.SUBTRACTFROMCART}?id=${productId}`;

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
