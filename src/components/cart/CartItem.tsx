import { useCart } from '../../context/CartContext';
import type { CartItem as CartItemType } from '../../types';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { removeFromCart } = useCart();
  const { product, quantity } = item;

  return (
    <div className="cart-item">
      <img
        src={product.images[0].thumbnail}
        alt={product.images[0].alt}
        className="cart-item__image"
      />
      <div className="cart-item__details">
        <p className="cart-item__name">{product.name}</p>
        <p className="cart-item__price">
          ${product.price.toFixed(2)} x {quantity}{' '}
          <span className="cart-item__total">${(product.price * quantity).toFixed(2)}</span>
        </p>
      </div>
      <button
        className="cart-item__delete"
        onClick={() => removeFromCart(product.id)}
        aria-label={`Remove ${product.name} from cart`}
      >
        <img src="/images/icon-delete.svg" alt="Delete" />
      </button>
    </div>
  );
}
