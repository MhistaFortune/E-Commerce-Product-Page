import { useRef, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import CartItem from './CartItem';

interface CartDropdownProps {
  onClose: () => void;
}

export default function CartDropdown({ onClose }: CartDropdownProps) {
  const { items } = useCart();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  return (
    <div className="cart-dropdown" ref={dropdownRef}>
      <div className="cart-dropdown__header">
        <h3 className="cart-dropdown__title">Cart</h3>
      </div>
      <div className="cart-dropdown__content">
        {items.length === 0 ? (
          <p className="cart-dropdown__empty">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-dropdown__items">
              {items.map((item) => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
            <div className="cart-dropdown__footer">
              <p className="cart-dropdown__total">
                <span>Total:</span>
                <span className="cart-dropdown__total-price">${total.toFixed(2)}</span>
              </p>
              <button className="cart-dropdown__checkout">Checkout</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
