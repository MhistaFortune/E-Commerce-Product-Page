export interface Product {
  id: number;
  company: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: number;
  images: ProductImage[];
}

export interface ProductImage {
  full: string;
  thumbnail: string;
  alt: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  totalItems: number;
}
