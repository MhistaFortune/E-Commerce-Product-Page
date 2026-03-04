import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import Header from './components/layout/Header';
import ProductGallery from './components/product/ProductGallery';
import ProductInfo from './components/product/ProductInfo';
import QuantitySelector from './components/product/QuantitySelector';
import AddToCart from './components/product/AddToCart';
import { product } from './data/product';
import './App.css';

function AppContent() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="product-page">
          <ProductGallery images={product.images} />
          <div className="product-page__details">
            <ProductInfo product={product} />
            <div className="product-page__actions">
              <QuantitySelector
                quantity={quantity}
                onQuantityChange={setQuantity}
              />
              <AddToCart product={product} quantity={quantity} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
