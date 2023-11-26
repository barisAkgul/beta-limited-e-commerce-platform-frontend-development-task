import { create } from "zustand";
import { addToCart, subtractFromCart } from "~/helpers/api/requests";
import { getShoppingCartList } from "~/helpers/api/requests";

type Product = {
  productId: string;
  quantity: number;
  name: string;
  price: number;
};

type ShoppingCartStore = {
  shoppingCart: Product[] | string;
  setShoppingCart: (cart: Product[]) => void;
  updateCartItems: (sessionId: string) => Promise<void>;
  handleAddToCart: (productId: string, sessionId: string) => Promise<void>;
  handleRemoveFromCart: (productId: string, sessionId: string) => Promise<void>;
};

const useShoppingCart = create<ShoppingCartStore>((set, get) => ({
  shoppingCart: [],
  setShoppingCart: (cart) => set({ shoppingCart: cart }),
  updateCartItems: async (sessionId) => {
    try {
      const response = await getShoppingCartList(sessionId);
      set({ shoppingCart: response || [] });
    } catch (error: any) {
      console.error("Error fetching cart items:", error.message);
    }
  },
  handleAddToCart: async (productId, sessionId) => {
    try {
      await addToCart(productId, sessionId);
      await get().updateCartItems(sessionId);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  },
  handleRemoveFromCart: async (productId, sessionId) => {
    try {
      await subtractFromCart(productId, sessionId);
      await get().updateCartItems(sessionId);
    } catch (error) {
      console.error("Error subtracting from cart:", error);
    }
  },
}));

export default useShoppingCart;
