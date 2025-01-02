import type { Product } from '@/types/product';

export const accessoriesProducts: Product[] = [
  {
    id: 'ac1',
    name: 'Leather Crossbody Bag',
    description: 'Elegant leather crossbody bag with adjustable strap',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa',
    slug: 'leather-crossbody-bag',
    category: 'accessories',
    featured: true,
  },
  // Add more accessory products here...
  {
    id: 'ac15',
    name: 'Silk Scarf',
    description: 'Luxurious silk scarf with artistic print',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d',
    slug: 'silk-scarf',
    category: 'accessories',
    featured: false,
  },
];