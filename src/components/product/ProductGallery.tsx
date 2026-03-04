import { useState } from 'react';
import type { ProductImage } from '../../types';
import Lightbox from './Lightbox';

interface ProductGalleryProps {
  images: ProductImage[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div className="product-gallery">
      <div className="product-gallery__main">
        <button
          className="product-gallery__main-btn"
          onClick={() => setIsLightboxOpen(true)}
          aria-label="View full size image"
        >
          <img
            src={images[currentIndex].full}
            alt={images[currentIndex].alt}
            className="product-gallery__main-image"
          />
        </button>
        <div className="product-gallery__nav-zone product-gallery__nav-zone--prev">
          <button
            className="product-gallery__mobile-nav product-gallery__mobile-nav--prev"
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
            aria-label="Previous image"
          >
            <img src="/images/icon-previous.svg" alt="" />
          </button>
        </div>
        <div className="product-gallery__nav-zone product-gallery__nav-zone--next">
          <button
            className="product-gallery__mobile-nav product-gallery__mobile-nav--next"
            onClick={() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
            aria-label="Next image"
          >
            <img src="/images/icon-next.svg" alt="" />
          </button>
        </div>
      </div>
      <div className="product-gallery__thumbnails">
        {images.map((image, index) => (
          <button
            key={index}
            className={`product-gallery__thumbnail ${
              index === currentIndex ? 'product-gallery__thumbnail--active' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`View ${image.alt}`}
          >
            <img src={image.thumbnail} alt={image.alt} />
          </button>
        ))}
      </div>
      <Lightbox
        images={images}
        currentIndex={currentIndex}
        onIndexChange={setCurrentIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
    </div>
  );
}
