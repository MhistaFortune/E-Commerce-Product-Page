import { useCart } from '../../context/CartContext';
import type { Product } from '../../types';

interface AddToCartProps {
  product: Product;
  quantity: number;
  onAdded?: () => void;
}

export default function AddToCart({ product, quantity, onAdded }: AddToCartProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onAdded?.();
  };

  return (
    <button className="add-to-cart" onClick={handleAddToCart}>
      <img src="/images/icon-cart.svg" alt="" className="add-to-cart__icon" />
      <span>Add to cart</span>
    </button>
  );
}
