'use client';

import Image from 'next/image';
import { ProductCard } from '@/components/products/ProductCard';
import type { Category } from '@/types/category';
import type { Product } from '@/types/product';

interface CategoryPageClientProps {
  category: Category;
  products: Product[];
}

export default function CategoryPageClient({ category, products }: CategoryPageClientProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px]">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
            <p className="text-lg opacity-90">{category.description}</p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
