import type { Product } from '../types';

export const product: Product = {
  id: 1,
  company: 'Sneaker Company',
  name: 'Fall Limited Edition Sneakers',
  description: `These low-profile sneakers are your perfect casual wear companion. 
Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.`,
  price: 125.00,
  originalPrice: 250.00,
  discount: 50,
  images: [
    {
      full: '/images/image-product-1.jpg',
      thumbnail: '/images/image-product-1-thumbnail.jpg',
      alt: 'Fall Limited Edition Sneakers - Front view',
    },
    {
      full: '/images/image-product-2.jpg',
      thumbnail: '/images/image-product-2-thumbnail.jpg',
      alt: 'Fall Limited Edition Sneakers - Side view',
    },
    {
      full: '/images/image-product-3.jpg',
      thumbnail: '/images/image-product-3-thumbnail.jpg',
      alt: 'Fall Limited Edition Sneakers - Back view',
    },
    {
      full: '/images/image-product-4.jpg',
      thumbnail: '/images/image-product-4-thumbnail.jpg',
      alt: 'Fall Limited Edition Sneakers - Detail view',
    },
  ],
};
