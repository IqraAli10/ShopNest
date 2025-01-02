import { categories } from './data/categories';
import type { Category } from '@/types/category';

export const getCategories = async (): Promise<Category[]> => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return categories;
};

export const getCategoryBySlug = async (slug: string): Promise<Category | null> => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return categories.find((category) => category.slug === slug) || null;
};