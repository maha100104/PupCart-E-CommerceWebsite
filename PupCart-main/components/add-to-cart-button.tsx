// "use client"

// import { Button } from "@/components/ui/button"
// import { ShoppingCart } from "lucide-react"
// import { useCart } from "@/components/cart-provider"
// import type { Product } from "@/lib/types"
// import { cn } from "@/lib/utils"

// interface AddToCartButtonProps {
//   product: Product
//   quantity?: number
//   className?: string
// }

// export default function AddToCartButton({ product, quantity = 1, className }: AddToCartButtonProps) {
//   const { addToCart } = useCart()

//   const handleAddToCart = () => {
//     addToCart({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       image: product.image,
//     })
//   }

//   return (
//     <Button
//       onClick={handleAddToCart}
//       className={cn("bg-primary hover:bg-primary/90", className)}
//       disabled={product.stock === 0}
//     >
//       <ShoppingCart className="mr-2 h-4 w-4" />
//       {product.stock === 0 ? "Out of Stock" : "Add to Cart"}
//     </Button>
//   )
// }
// 'use client';

// import { useAuth } from '@/context/AuthContext';
// import { useRouter } from 'next/navigation';
// import { Button } from './ui/button';
// import { Product } from '@/lib/types';

// interface AddToCartButtonProps {
//   product: Product;
//   className?: string;
// }

// export default function AddToCartButton({ product, className }: AddToCartButtonProps) {
//   const { user } = useAuth();
//   const router = useRouter();

//   const handleClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();

//     if (!user) {
//       router.push('/sign-in');
//       return;
//     }

//     // Add to cart logic here (e.g., context, localStorage, or DB)
//     console.log('Product added:', product.name);
//   };

//   return (
//     <Button onClick={handleClick} className={className}>
//       Add to Cart
//     </Button>
//   );
// }
"use client"

import { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface Props {
  product: Product
  className?: string
}

export default function AddToCartButton({ product, className }: Props) {
  const [adding, setAdding] = useState(false)

  const handleAddToCart = () => {
    setAdding(true)

    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    const existing = cart.find((item: any) => item.id === product.id)

    if (existing) {
      existing.quantity += 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }

    localStorage.setItem("cart", JSON.stringify(cart))
    setAdding(false)
    alert("Product added to cart!") // optional toast or state
  }

  return (
    <Button onClick={handleAddToCart} className={className} disabled={adding}>
      {adding ? "Adding..." : "Add to Cart"}
    </Button>
  )
}
