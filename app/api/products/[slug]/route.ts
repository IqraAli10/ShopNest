
import { NextResponse } from 'next/server';
import { getProductBySlug, getAllProducts } from '@/lib/products';

// Function to handle static generation
export async function generateStaticParams() {
  const products = await getAllProducts(); 

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const product = await getProductBySlug(params.slug);
    
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}
