export interface IProductItemProps {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  rating: number;
  image: string;
  discount: string;
}

export type ProductListResponse = IProductItemProps[];

export interface ISessionIDProps {
  id: string | null;
}

export interface IShoppingCartItemProps {
  productId: string;
  quantity: number;
  name: string;
  price: number;
}
