import type { Product } from '@/types/product';

export const jewelryProducts: Product[] = [
  {
    id: 'jw1',
    name: 'Gold Chain Necklace',
    description: '18k gold plated chain necklace',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338',
    slug: 'gold-chain-necklace',
    category: 'jewelry',
    featured: true,
  },
  // Add more jewelry products here...
  {
    id: 'jw15',
    name: 'Pearl Earrings',
    description: 'Classic freshwater pearl stud earrings',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908',
    slug: 'pearl-earrings',
    category: 'jewelry',
    featured: false,
  },
];