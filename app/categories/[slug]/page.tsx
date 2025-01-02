import { getCategories, getCategoryBySlug } from '@/lib/categories';
import { getProductsByCategory } from '@/lib/products';
import CategoryPageClient from '@/components/categories/CategoryPageClient';

export async function generateStaticParams() {
  const categories = await getCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = await getCategoryBySlug(params.slug);
  const products = category ? await getProductsByCategory(category.slug) : [];

  if (!category) {
    return <div>Category not found</div>;
  }

  return <CategoryPageClient category={category} products={products} />;
}