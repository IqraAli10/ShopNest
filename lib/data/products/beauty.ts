import type { Product } from '@/types/product';

export const beautyProducts: Product[] = [
  {
    id: 'bt1',
    name: 'Luxury Face Cream',
    description: 'Premium anti-aging face cream',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da',
    slug: 'luxury-face-cream',
    category: 'beauty',
    featured: true,
  },
  // Add more beauty products here...
  {
    id: 'bt15',
    name: 'Natural Lip Balm Set',
    description: 'Set of 4 organic lip balms',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1586011492021-52c96ef57c47',
    slug: 'natural-lip-balm-set',
    category: 'beauty',
    featured: false,
  },
];