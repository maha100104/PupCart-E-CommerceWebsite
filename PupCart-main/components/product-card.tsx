
// 'use client';

// import type React from 'react';
// import Link from 'next/link';

// import Image from 'next/image';
// import { useState } from 'react';
// import { Card, CardContent, CardFooter } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { ShoppingCart, Star } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import { useCart } from '@/components/cart-provider';
// import type { Product } from '@/lib/types';
// import WishlistButton from '@/components/wishlist-button';
// import { useAuth } from "@/context/AuthContext"
// import { useRouter } from "next/navigation"


// interface ProductCardProps {
//   product: Product;
//   compact?: boolean;
// }

// export default function ProductCard({ product, compact = false }: ProductCardProps) {
//   const [isHovered, setIsHovered] = useState(false);
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const { addToCart } = useCart();
  

//   const handleAddToCart = (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();
//     addToCart({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       image: product.image,
//     });
//   };
  

//   return (
//     <Link href={`/product/${product.slug}`}>
//       <Card
//         className={cn('overflow-hidden transition-all duration-200 h-full', isHovered && 'shadow-md transform translate-y-[-4px]')}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="relative">
//           {!imageLoaded && (
//             <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
//               <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
//             </div>
//           )}
//           <Image
//             src={product.image || '/placeholder.svg'}
//             alt={product.name}
//             width={300}
//             height={300}
//             className={cn('w-full object-cover transition-transform duration-300', compact ? 'h-40' : 'h-60', isHovered && 'scale-105', !imageLoaded && 'opacity-0')}
//             onLoad={() => setImageLoaded(true)}
//           />

//           {product.isNew && <Badge className="absolute top-2 left-2 bg-primary">New</Badge>}

//           {/* {product.discount > 0 && <Badge className="absolute top-2 right-2 bg-green-600">{product.discount}% OFF</Badge>} */}
//            {product.discount && product.discount > 0 && (
//   <Badge className="absolute top-2 right-2 bg-green-600">{product.discount}% OFF</Badge>
// )}

//           {!compact && (
//             <div className={cn('absolute bottom-0 right-0  p-2 transform transition-transform duration-300', isHovered ? 'translate-y-0' : 'translate-y-0')}>
//               <Button className=" bg-white text-primary hover:bg-white/90" onClick={handleAddToCart}>
//                 <ShoppingCart className="h-4 w-4" />
//               </Button>
//             </div>
//           )}
//         </div>

//         <CardContent className={cn('p-4', compact && 'p-3')}>
//           <h3 className={cn('font-semibold line-clamp-1', compact ? 'text-sm' : 'text-lg')}>{product.name}</h3>

//           {!compact && <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{product.description}</p>}

//           <div className="flex items-center mt-2">
//             <div className="flex">
//               {Array(5)
//                 .fill(0)
//                 .map((_, i) => (
//                   <Star key={i} className={cn('h-4 w-4', i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300')} />
//                 ))}
//             </div>
//             {!compact && <span className="text-xs text-muted-foreground ml-1">({product.reviewCount})</span>}
//           </div>
//         </CardContent>

//         <CardFooter className={cn('flex items-center justify-between px-4 py-3 border-t border-muted/50', compact && 'px-4 py-3')}>
//           <div>
//             {product.originalPrice && product.originalPrice > product.price ? (
//               <div className="flex items-center gap-2">
//                 <span className="font-bold text-black">₹{product.price.toFixed(2)}</span>
//                 <span className="text-muted-foreground text-sm line-through">₹{product.originalPrice.toFixed(2)}</span>
//               </div>
//             ) : (
//               <span className="font-bold text-black">₹{product.price.toFixed(2)}</span>
//             )}
//           </div>

//           {compact ? (
//             <Button size="sm" variant="ghost" className="p-0 h-8 w-8" onClick={handleAddToCart}>
//               <ShoppingCart className="h-4 w-4" />
//               <span className="sr-only">Add to cart</span>
//             </Button>
//           ) : (
//             <WishlistButton productId={product.id} size="sm" variant="ghost" className="p-0 h-8 w-8" />
//           )}
//         </CardFooter>
//       </Card>
//     </Link>
//   );
// } 
// // "use client"

// // import { useEffect, useState } from "react"
// // import Image from "next/image"
// // import { Heart } from "lucide-react"
// // import { Product } from "@/lib/types"
// // import { Button } from "@/components/ui/button"

// // interface ProductCardProps {
// //   product: Product
// // }

// // export default function ProductCard({ product }: ProductCardProps) {
// //   const [wishlist, setWishlist] = useState<string[]>([])

// //   useEffect(() => {
// //     const stored = localStorage.getItem("wishlist")
// //     if (stored) {
// //       setWishlist(JSON.parse(stored))
// //     }
// //   }, [])

// //   const toggleWishlist = () => {
// //     let updated: string[]
// //     if (wishlist.includes(product.id)) {
// //       updated = wishlist.filter((id) => id !== product.id)
// //     } else {
// //       updated = [...wishlist, product.id]
// //     }
// //     setWishlist(updated)
// //     localStorage.setItem("wishlist", JSON.stringify(updated))
// //   }

// //   const isWishlisted = wishlist.includes(product.id)

// //   return (
// //     <div className="border rounded-lg overflow-hidden relative p-4 shadow-sm hover:shadow-md transition">
// //       {product.isNew && (
// //         <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
// //           New
// //         </span>
// //       )}
// //       <Image
// //         src={product.image}
// //         alt={product.name}
// //         width={300}
// //         height={200}
// //         className="w-full h-48 object-cover rounded-md"
// //       />
// //       <div className="mt-4">
// //         <h2 className="text-lg font-semibold">{product.name}</h2>
// //         <p className="text-sm text-gray-500 capitalize">{product.category}</p>
// //         <div className="flex items-center justify-between mt-2">
// //           <span className="text-primary font-bold">₹{product.price}</span>
// //           <Button
// //             variant="ghost"
// //             size="icon"
// //             onClick={toggleWishlist}
// //             className={`text ${
// //               isWishlisted ? "text-red-500 " : "text-black"
// //             } `}
// //           >
// //             <Heart
// //               className={`w-5 h-5 transition ${
// //                 isWishlisted ? "fill-red-500 stroke-red-500" : "stroke-black"
// //               }`}
// //             />
// //           </Button>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }
// 'use client';

// import type React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { useState } from 'react';
// import { Card, CardContent, CardFooter } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Badge } from '@/components/ui/badge';
// import { ShoppingCart, Star } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import { useCart } from '@/components/cart-provider';
// import type { Product } from '@/lib/types';
// import WishlistButton from '@/components/wishlist-button';
// import { useAuth } from '@/context/AuthContext';
// import { useRouter } from 'next/navigation';

// interface ProductCardProps {
//   product: Product;
//   compact?: boolean;
// }

// export default function ProductCard({ product, compact = false }: ProductCardProps) {
//   const [isHovered, setIsHovered] = useState(false);
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const { addToCart } = useCart();
//   const { user } = useAuth();
//   const router = useRouter();

//   const handleAddToCart = (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();

//     if (!user) {
//       router.push('/sign-in');
//       return;
//     }

//     addToCart({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       image: product.image,
//     });
//   };

//   const handleWishlistClick = (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();

//     if (!user) {
//       router.push('/sign-in');
//       return;
//     }

//     // Let WishlistButton handle actual logic
//   };

//   return (
//     <Link href={`/product/${product.slug}`}>
//       <Card
//         className={cn(
//           'overflow-hidden transition-all duration-200 h-full',
//           isHovered && 'shadow-md transform translate-y-[-4px]'
//         )}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="relative">
//           {!imageLoaded && (
//             <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
//               <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
//             </div>
//           )}
//           <Image
//             src={product.image || '/placeholder.svg'}
//             alt={product.name}
//             width={300}
//             height={300}
//             className={cn(
//               'w-full object-cover transition-transform duration-300',
//               compact ? 'h-40' : 'h-60',
//               isHovered && 'scale-105',
//               !imageLoaded && 'opacity-0'
//             )}
//             onLoad={() => setImageLoaded(true)}
//           />

//           {product.isNew && <Badge className="absolute top-2 left-2 bg-primary">New</Badge>}
//           {product.discount && product.discount > 0 && (
//             <Badge className="absolute top-2 right-2 bg-green-600">{product.discount}% OFF</Badge>
//           )}

//           {!compact && (
//             <div className={cn('absolute bottom-0 right-0  p-2', isHovered ? 'translate-y-0' : 'translate-y-0')}>
//               <Button className=" bg-white text-primary hover:bg-white/90" onClick={handleAddToCart}>
//                 <ShoppingCart className="h-4 w-4" />
//               </Button>
//             </div>
//           )}
//         </div>

//         <CardContent className={cn('p-4', compact && 'p-3')}>
//           <h3 className={cn('font-semibold line-clamp-1', compact ? 'text-sm' : 'text-lg')}>{product.name}</h3>
//           {!compact && (
//             <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{product.description}</p>
//           )}
//           <div className="flex items-center mt-2">
//             <div className="flex">
//               {Array(5)
//                 .fill(0)
//                 .map((_, i) => (
//                   <Star
//                     key={i}
//                     className={cn('h-4 w-4', i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300')}
//                   />
//                 ))}
//             </div>
//             {!compact && <span className="text-xs text-muted-foreground ml-1">({product.reviewCount})</span>}
//           </div>
//         </CardContent>

//         <CardFooter
//           className={cn(
//             'flex items-center justify-between px-4 py-3 border-t border-muted/50',
//             compact && 'px-4 py-3'
//           )}
//         >
//           <div>
//             {product.originalPrice && product.originalPrice > product.price ? (
//               <div className="flex items-center gap-2">
//                 <span className="font-bold text-black">₹{product.price.toFixed(2)}</span>
//                 <span className="text-muted-foreground text-sm line-through">
//                   ₹{product.originalPrice.toFixed(2)}
//                 </span>
//               </div>
//             ) : (
//               <span className="font-bold text-black">₹{product.price.toFixed(2)}</span>
//             )}
//           </div>

//           {compact ? (
//             <Button size="sm" variant="ghost" className="p-0 h-8 w-8" onClick={handleAddToCart}>
//               <ShoppingCart className="h-4 w-4" />
//               <span className="sr-only">Add to cart</span>
//             </Button>
//           ) : (
//             <div onClick={handleWishlistClick}>
//               <WishlistButton
//                 productId={product.id}
//                 size="sm"
//                 variant="ghost"
//                 className="p-0 h-8 w-8"
//               />
//             </div>
//           )}
//         </CardFooter>
//       </Card>
//     </Link>
//   );
// }
'use client';

import type React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCart } from '@/components/cart-provider';
import type { Product } from '@/lib/types';
import WishlistButton from '@/components/wishlist-button';

interface ProductCardProps {
  product: Product;
  compact?: boolean;
}

export default function ProductCard({ product, compact = false }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <Link href={`/product/${product.slug}`}>
      <Card
        className={cn(
          'overflow-hidden transition-all duration-200 h-full',
          isHovered && 'shadow-md transform translate-y-[-4px]'
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <Image
            src={product.image || '/placeholder.svg'}
            alt={product.name}
            width={300}
            height={300}
            className={cn(
              'w-full object-cover transition-transform duration-300',
              compact ? 'h-40' : 'h-60',
              isHovered && 'scale-105',
              !imageLoaded && 'opacity-0'
            )}
            onLoad={() => setImageLoaded(true)}
          />

          {product.isNew && <Badge className="absolute top-2 left-2 bg-primary">New</Badge>}

          {product.discount && product.discount > 0 && (
            <Badge className="absolute top-2 right-2 bg-green-600">{product.discount}% OFF</Badge>
          )}

          {!compact && (
            <div
              className={cn(
                'absolute bottom-0 right-0  p-2 transform transition-transform duration-300',
                isHovered ? 'translate-y-0' : 'translate-y-0'
              )}
            >
              <Button className="bg-white text-primary hover:bg-white/90" onClick={handleAddToCart}>
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>

        <CardContent className={cn('p-4', compact && 'p-3')}>
          <h3 className={cn('font-semibold line-clamp-1', compact ? 'text-sm' : 'text-lg')}>
            {product.name}
          </h3>

          {!compact && (
            <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{product.description}</p>
          )}

          <div className="flex items-center mt-2">
            <div className="flex">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      'h-4 w-4',
                      i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                    )}
                  />
                ))}
            </div>
            {!compact && (
              <span className="text-xs text-muted-foreground ml-1">({product.reviewCount})</span>
            )}
          </div>
        </CardContent>

        <CardFooter
          className={cn(
            'flex items-center justify-between px-4 py-3 border-t border-muted/50',
            compact && 'px-4 py-3'
          )}
        >
          <div>
            {product.originalPrice && product.originalPrice > product.price ? (
              <div className="flex items-center gap-2">
                <span className="font-bold text-primary">₹{product.price.toFixed(2)}</span>
                <span className="text-muted-foreground text-sm line-through">
                  ₹{product.originalPrice.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="font-bold text-primary">₹{product.price.toFixed(2)}</span>
            )}
          </div>

          {compact ? (
            <Button size="sm" variant="ghost" className="p-0 h-8 w-8" onClick={handleAddToCart}>
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Add to cart</span>
            </Button>
          ) : (
            <WishlistButton
              productId={product.id}
              size="sm"
              variant="ghost"
              className="p-0 h-8 w-8"
            />
          )}
        </CardFooter>
      </Card>
    </Link>
  );
}
