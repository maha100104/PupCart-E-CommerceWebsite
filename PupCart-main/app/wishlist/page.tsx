"use client";

import { useEffect, useState } from "react";
import { useWishlist } from "@/components/wishlist-provider";
import { products } from "@/lib/products";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Trash2, Heart, ShoppingCart, ShoppingBag } from "lucide-react";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();
  const [wishlistItems, setWishlistItems] = useState(products.filter((p) => wishlist.includes(p.id)));

  useEffect(() => {
    setWishlistItems(products.filter((p) => wishlist.includes(p.id)));
  }, [wishlist]);

  if (wishlistItems.length === 0) {
    return (
      <div className="container px-4 py-16 text-center">
        <Heart className="h-16 w-16 mx-auto text-muted-foreground" />
        <h1 className="mt-6 text-3xl font-bold">Your wishlist is empty</h1>
        <p className="mt-2 text-muted-foreground">Start exploring and save your favorite items.</p>
        <Button asChild className="mt-8">
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {wishlistItems.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="relative">
              <Link href={`/product/${product.id}`}>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-60 object-cover"
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-white/80 hover:bg-white text-primary"
                onClick={() => toggleWishlist(product.id)}
              >
                <Trash2 className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-4">
              <Link href={`/product/${product.id}`} className="hover:underline">
                <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
              </Link>
              <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
                {product.description}
              </p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-bold text-primary">
                  ₹{product.price.toFixed(2)}
                </span>
                <Button size="sm">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button asChild variant="outline">
          <Link href="/shop">
            <ShoppingBag className="h-4 w-4 mr-2" />
            Continue Shopping
          </Link>
        </Button>
      </div>
    </div>
  );
}







































































































































    



























































































































































































