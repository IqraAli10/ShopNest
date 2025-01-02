// app/api/products/route.js
import { NextResponse } from 'next/server';
import { getAllProducts, getFeaturedProducts } from '@/lib/products';

// Force dynamic handling for this route
export const dynamic = 'force-dynamic'; // This forces dynamic rendering

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const featured = searchParams.get('featured');

  try {
    const products = featured === 'true' 
      ? await getFeaturedProducts()
      : await getAllProducts();
      
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
