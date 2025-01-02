import { allProducts } from './data/products';
import type { Product } from '@/types/product';

export async function getAllProducts(): Promise<Product[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return allProducts;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return allProducts.filter(product => product.featured);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return allProducts.find(product => product.slug === slug) || null;
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  await new Promise(resolve => setTimeout(resolve, 100));
  return allProducts.filter(product => product.category === category);
}