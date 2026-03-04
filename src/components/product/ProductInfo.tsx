import type { Product } from '../../types';

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  return (
    <div className="product-info">
      <span className="product-info__company">{product.company}</span>
      <h1 className="product-info__title">{product.name}</h1>
      <p className="product-info__description">{product.description}</p>
      <div className="product-info__pricing">
        <div className="product-info__current-price">
          <span className="product-info__price">${product.price.toFixed(2)}</span>
          <span className="product-info__discount">{product.discount}%</span>
        </div>
        <span className="product-info__original-price">
          ${product.originalPrice.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
