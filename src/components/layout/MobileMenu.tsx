interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: string[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="mobile-menu">
      <div className="mobile-menu__overlay" onClick={onClose} />
      <div className="mobile-menu__panel">
        <button
          className="mobile-menu__close"
          onClick={onClose}
          aria-label="Close menu"
        >
          <img src="/images/icon-close.svg" alt="" />
        </button>
        <nav className="mobile-menu__nav">
          {links.map((link) => (
            <a key={link} href="#" className="mobile-menu__nav-link">
              {link}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
