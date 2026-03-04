import { useEffect } from 'react';
import type { ProductImage } from '../../types';

interface LightboxProps {
  images: ProductImage[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onIndexChange,
  isOpen,
  onClose,
}: LightboxProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!isOpen) return;
      
      switch (event.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onIndexChange(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
          break;
        case 'ArrowRight':
          onIndexChange(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
          break;
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onIndexChange]);

  if (!isOpen) return null;

  return (
    <div className="lightbox">
      <div className="lightbox__overlay" onClick={onClose} />
      <div className="lightbox__content">
        <button
          className="lightbox__close"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <img src="/images/icon-close.svg" alt="" />
        </button>
        <div className="lightbox__main">
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={() =>
              onIndexChange(currentIndex === 0 ? images.length - 1 : currentIndex - 1)
            }
            aria-label="Previous image"
          >
            <img src="/images/icon-previous.svg" alt="" />
          </button>
          <img
            src={images[currentIndex].full}
            alt={images[currentIndex].alt}
            className="lightbox__image"
          />
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={() =>
              onIndexChange(currentIndex === images.length - 1 ? 0 : currentIndex + 1)
            }
            aria-label="Next image"
          >
            <img src="/images/icon-next.svg" alt="" />
          </button>
        </div>
        <div className="lightbox__thumbnails">
          {images.map((image, index) => (
            <button
              key={index}
              className={`lightbox__thumbnail ${
                index === currentIndex ? 'lightbox__thumbnail--active' : ''
              }`}
              onClick={() => onIndexChange(index)}
              aria-label={`View ${image.alt}`}
            >
              <img src={image.thumbnail} alt={image.alt} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
