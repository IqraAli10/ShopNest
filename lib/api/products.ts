import type { Product } from '@/types/product';

const API_URL = '/api/products';

export async function fetchProducts(featured?: boolean): Promise<Product[]> {
  const url = featured ? `${API_URL}?featured=true` : API_URL;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  
  return response.json();
}

export async function fetchProductBySlug(slug: string): Promise<Product> {
  const response = await fetch(`${API_URL}/${slug}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }
  
  return response.json();
}