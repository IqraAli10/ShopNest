'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/hooks/use-cart';
import { useWishlist } from '@/hooks/use-wishlist';
import { useToast } from '@/hooks/use-toast';
import type { Product } from '@/types/product';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
      className: "bg-[#000000] text-white"

    });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isWishlisted) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from Wishlist",
        description: `${product.name} has been removed from your wishlist.`,
        className: "bg-[#000000] text-white"

      });
    } else {
      addToWishlist(product);
      toast({
        title: "Added to Wishlist",
        description: `${product.name} has been added to your wishlist.`,
        className: "bg-[#000000] text-white"

      });
    }
  };

  return (
    <Card className="group relative overflow-hidden hover:shadow-lg transition-all duration-300 border-none bg-white/80 backdrop-blur-sm">
      <Link href={`/products/${product.slug}`}>
        <CardContent className="p-0">
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 text-white transition-colors duration-300" />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 bg-white/80 hover:bg-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              onClick={handleWishlist}
            >
              <Heart 
                className={cn(
                  "h-5 w-5 transition-colors duration-300",
                  isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
                )} 
              />
            </Button>
          </div>
        </CardContent>
        <CardFooter className="p-4 flex flex-col gap-2">
          <div className="flex-1 min-h-[80px]">
            <h3 className="font-heading text-lg font-semibold line-clamp-1 mb-1">
              {product.name}
            </h3>
            <p className="text-muted-foreground font-body text-sm line-clamp-2">
              {product.description}
            </p>
            <p className="text-lg font-semibold mt-2 font-body">
              ${product.price}
            </p>
          </div>
          <Button 
            className="w-full bg-black text-white hover:bg-black/90 font-body text-sm tracking-wide"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Link>
    </Card>
  );
};