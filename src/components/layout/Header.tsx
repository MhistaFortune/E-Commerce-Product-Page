import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import CartDropdown from '../cart/CartDropdown';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  const navLinks = ['Collections', 'Men', 'Women', 'About', 'Contact'];

  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__left">
            <button
              className="header__menu-btn"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <img src="/images/icon-menu.svg" alt="" />
            </button>
            <a href="/" className="header__logo">
              <img src="/images/logo.svg" alt="Sneakers" />
            </a>
            <nav className="header__nav">
              {navLinks.map((link) => (
                <a key={link} href="#" className="header__nav-link">
                  {link}
                </a>
              ))}
            </nav>
          </div>
          <div className="header__right">
            <button
              className="header__cart-btn"
              onClick={() => setIsCartOpen(!isCartOpen)}
              aria-label="Shopping cart"
            >
              <img src="/images/icon-cart.svg" alt="" />
              {totalItems > 0 && (
                <span className="header__cart-badge">{totalItems}</span>
              )}
            </button>
            <img
              src="/images/image-avatar1.jpg"
              alt="User avatar"
              className="header__avatar"
            />
          </div>
        </div>
        {isCartOpen && <CartDropdown onClose={() => setIsCartOpen(false)} />}
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
}
