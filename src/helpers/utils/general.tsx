import { ShoppingCartResponse } from "~/types/general";

export const countDistinctProducts = (cartItems: ShoppingCartResponse) => {
  if (!cartItems || !Array.isArray(cartItems)) {
    //If cartItems is not a specific type or an array

    return 0;
  }

  const distinctProducts = new Set<string>();

  cartItems.forEach((item) => {
    if (item.quantity > 0) {
      distinctProducts.add(item.productId);
    }
  });

  const distinctProductCount = distinctProducts.size;

  return distinctProductCount;
};
