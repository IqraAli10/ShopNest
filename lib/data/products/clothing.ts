import type { Product } from '@/types/product';

export const clothingProducts: Product[] = [
  {
    id: 'cl1',
    name: 'Classic Denim Jacket',
    description: 'Timeless denim jacket with a modern fit and vintage wash',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0',
    slug: 'classic-denim-jacket',
    category: 'clothing',
    featured: true,
  },
  {
    id: 'cl2',
    name: 'Summer Floral Dress',
    description: 'Light and breezy summer dress with floral print',
    price: 59.99,
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
    slug: 'summer-floral-dress',
    category: 'clothing',
    featured: true,
  },
  {
    id: 'cl3',
    name: 'Linen Blazer',
    description: 'Sophisticated linen blazer perfect for summer evenings',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0',
    slug: 'linen-blazer',
    category: 'clothing',
    featured: true,
  },
  {
    id: 'cl4',
    name: 'Silk Blouse',
    description: 'Elegant silk blouse with pearl buttons',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f',
    slug: 'silk-blouse',
    category: 'clothing',
    featured: false,
  },
  {
    id: 'cl5',
    name: 'Wool Coat',
    description: 'Classic wool coat for winter elegance',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3',
    slug: 'wool-coat',
    category: 'clothing',
    featured: true,
  }
];