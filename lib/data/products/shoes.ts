import type { Product } from '@/types/product';

export const shoesProducts: Product[] = [
  {
    id: 'sh1',
    name: 'Classic White Sneakers',
    description: 'Versatile white sneakers for everyday wear',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772',
    slug: 'classic-white-sneakers',
    category: 'shoes',
    featured: true,
  },
  {
    id: 'sh2',
    name: 'Leather Chelsea Boots',
    description: 'Timeless Chelsea boots in premium leather',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1638247025967-b4e38f787b76',
    slug: 'leather-chelsea-boots',
    category: 'shoes',
    featured: true,
  },
  {
    id: 'sh3',
    name: 'Suede Loafers',
    description: 'Comfortable suede loafers with classic design',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1582897085656-c636d006a246',
    slug: 'suede-loafers',
    category: 'shoes',
    featured: false,
  },
  {
    id: 'sh4',
    name: 'Running Performance Shoes',
    description: 'High-performance running shoes with superior cushioning',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    slug: 'running-performance-shoes',
    category: 'shoes',
    featured: true,
  },
  {
    id: 'sh5',
    name: 'Elegant Heels',
    description: 'Classic stiletto heels in black leather',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2',
    slug: 'elegant-heels',
    category: 'shoes',
    featured: true,
  }
];