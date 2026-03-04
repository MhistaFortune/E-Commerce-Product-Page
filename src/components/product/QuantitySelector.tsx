interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  max?: number;
}

export default function QuantitySelector({
  quantity,
  onQuantityChange,
  max = 99,
}: QuantitySelectorProps) {
  const handleDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrease = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <div className="quantity-selector">
      <button
        className="quantity-selector__btn quantity-selector__btn--decrease"
        onClick={handleDecrease}
        disabled={quantity <= 1}
        aria-label="Decrease quantity"
      >
        <img src="/images/icon-minus.svg" alt="" />
      </button>
      <span className="quantity-selector__value">{quantity}</span>
      <button
        className="quantity-selector__btn quantity-selector__btn--increase"
        onClick={handleIncrease}
        disabled={quantity >= max}
        aria-label="Increase quantity"
      >
        <img src="/images/icon-plus.svg" alt="" />
      </button>
    </div>
  );
}
