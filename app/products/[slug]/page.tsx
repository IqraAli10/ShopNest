import { getProductBySlug, getFeaturedProducts } from "@/lib/products";
import ProductClientComponent from "@/components/products/ProductClientComponent";

export async function generateStaticParams() {
  const products = await getFeaturedProducts();
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  const featured = await getFeaturedProducts();
  const relatedProducts = featured.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <ProductClientComponent product={product} relatedProducts={relatedProducts} />
  );
}