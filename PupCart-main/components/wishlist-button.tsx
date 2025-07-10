// 'use client';

// import type React from 'react';

// import { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/button';
// import { Heart } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import { useToast } from '@/components/ui/use-toast';

// interface WishlistButtonProps {
//   productId: string;
//   className?: string;
//   variant?: 'default' | 'outline' | 'ghost';
//   size?: 'default' | 'sm' | 'lg' | 'icon';
// }

// export default function WishlistButton({ productId, className, variant = 'ghost', size = 'icon' }: WishlistButtonProps) {
//   const [isInWishlist, setIsInWishlist] = useState(false);
//   const { toast } = useToast();

//   // Check if product is in wishlist on mount
//   useEffect(() => {
//     const savedWishlist = localStorage.getItem('wishlist');
//     if (savedWishlist) {
//       try {
//         const wishlistIds = JSON.parse(savedWishlist) as string[];
//         setIsInWishlist(wishlistIds.includes(productId));
//       } catch (error) {
//         console.error('Failed to parse wishlist from localStorage:', error);
//       }
//     }
//   }, [productId]);

//   const toggleWishlist = (e: React.MouseEvent) => {
//     e.preventDefault();
//     e.stopPropagation();

//     const savedWishlist = localStorage.getItem('wishlist');
//     let wishlistIds: string[] = [];

//     if (savedWishlist) {
//       try {
//         wishlistIds = JSON.parse(savedWishlist) as string[];
//       } catch (error) {
//         console.error('Failed to parse wishlist from localStorage:', error);
//       }
//     }

//     if (isInWishlist) {
//       // Remove from wishlist
//       wishlistIds = wishlistIds.filter((id) => id !== productId);
//       toast({
//         title: 'Removed from wishlist',
//         description: 'The item has been removed from your wishlist',
//       });
//     } else {
//       // Add to wishlist
//       wishlistIds.push(productId);
//       toast({
//         title: 'Added to wishlist',
//         description: 'The item has been added to your wishlist',
//       });
//     }

//     localStorage.setItem('wishlist', JSON.stringify(wishlistIds));
//     setIsInWishlist(!isInWishlist);
//   };

//   return (
//     <Button variant={variant} size={size} className={cn(className, 'gap-0')} onClick={toggleWishlist} aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}>
//       <Heart className={cn('h-8 w-8', isInWishlist && 'fill-red-600 text-white')} />
//       {size !== 'icon' && <span className=""></span>}
//     </Button>
//   );
// }
// 'use client';

// import { useEffect, useState } from 'react';
// import { Heart } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// interface WishlistButtonProps {
//   productId: string;
//   size?: 'sm' | 'default';
//   variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
//   className?: string;
// }

// export default function WishlistButton({
//   productId,
//   size = 'default',
//   variant = 'ghost',
//   className = '',
// }: WishlistButtonProps) {
//   const [isWishlisted, setIsWishlisted] = useState(false);

//   // Check if the product is already in wishlist on component mount
//   useEffect(() => {
//     const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]') as string[];
//     setIsWishlisted(wishlist.includes(productId));
//   }, [productId]);

//   // Toggle wishlist state and localStorage
//   const toggleWishlist = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     e.stopPropagation();

//     const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]') as string[];

//     let updatedWishlist: string[];

//     if (wishlist.includes(productId)) {
//       updatedWishlist = wishlist.filter((id) => id !== productId);
//       setIsWishlisted(false);
//     } else {
//       updatedWishlist = [...wishlist, productId];
//       setIsWishlisted(true);
//     }

//     localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
//   };

//   return (
//     <Button
//       size={size}
//       variant={variant}
//       className={className}
//       onClick={toggleWishlist}
//     >
//       <Heart
//         className={`w-5 h-5 transition-colors ${
//           isWishlisted ? 'fill-red-500 text-red-500' : 'text-black'
//         }`}
//       />
//       <span className="sr-only">Toggle Wishlist</span>
//     </Button>
//   );
// }
// "use client";

// import { Heart } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useWishlist } from "./wishlist-provider";

// interface WishlistButtonProps {
//   productId: string;
// }

// export default function WishlistButton({ productId }: WishlistButtonProps) {
//   const { toggleWishlist, isWishlisted } = useWishlist();
//   const wishlisted = isWishlisted(productId);

//   return (
//     <Button
//       variant="ghost"
//       size="icon"
//       onClick={(e) => {
//         e.preventDefault();
//         toggleWishlist(productId);
//       }}
//     >
//       <Heart
//         className={`w-5 h-5 transition-colors ${
//           wishlisted ? "fill-red-500 text-red-500" : "text-gray-500"
//         }`}
//       />
//       <span className="sr-only">Toggle Wishlist</span>
//     </Button>
//   );
// }
'use client';

import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWishlist } from './wishlist-provider';

interface WishlistButtonProps {
  productId: string;
  size?: 'sm' | 'default';
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
}

export default function WishlistButton({
  productId,
  size = 'default',
  variant = 'ghost',
}: WishlistButtonProps) {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(productId);

  return (
    <Button
      variant={variant}
      size={size}
      onClick={(e) => {
        e.preventDefault();
        toggleWishlist(productId);
      }}
    >
      <Heart
        className={`w-5 h-5 transition-colors ${
          wishlisted ? 'fill-red-500 text-red-500' : 'text-gray-500'
        }`}
      />
      <span className="sr-only">Toggle Wishlist</span>
    </Button>
  );
}
