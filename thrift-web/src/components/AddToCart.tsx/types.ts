export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  id: number;
  items: CartItem[];
}

export interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  imageUrl: string;
}
