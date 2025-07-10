// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { Heart, ShoppingBag, ShoppingCart, Trash2 } from "lucide-react"
// import { useCart } from "@/components/cart-provider"
// import { products } from "@/lib/products"
// import type { Product } from "@/lib/types"
// import { useAuth } from "@/context/AuthContext" // 👈 Add this line

// export default function WishlistPage() {
//   const [wishlistItems, setWishlistItems] = useState<Product[]>([])
//   const { addToCart } = useCart()
//   const { user } = useAuth() // 👈 Safely get user

//   useEffect(() => {
//     document.title = "PupCart - Wishlist Page"
//   }, [])

//   // Load wishlist from localStorage on mount
//   useEffect(() => {
//     if (!user) return
//     const savedWishlist = localStorage.getItem(wishlist-${user.email})
//     if (savedWishlist) {
//       try {
//         const wishlistIds = JSON.parse(savedWishlist) as string[]
//         const items = products.filter((product) => wishlistIds.includes(product.id))
//         setWishlistItems(items)
//       } catch (error) {
//         console.error("Failed to parse wishlist:", error)
//       }
//     }
//   }, [user])

//   // Save wishlist to localStorage when it changes
//   useEffect(() => {
//     if (!user) return
//     const wishlistIds = wishlistItems.map((item) => item.id)
//     localStorage.setItem(wishlist-${user.email}, JSON.stringify(wishlistIds))
//   }, [wishlistItems, user])

//   const removeFromWishlist = (productId: string) => {
//     setWishlistItems((prev) => prev.filter((item) => item.id !== productId))
//   }

//   const handleAddToCart = (product: Product) => {
//     addToCart({
//       id: product.id,
//       name: product.name,
//       price: product.price,
//       image: product.image,
//     })
//   }

//   if (!user) {
//     return (
//       <div className="container px-4 py-16 text-center">
//         <Heart className="h-16 w-16 mx-auto  text-muted-foreground" />
//         <h1 className="mt-6 text-3xl font-bold">Please sign in</h1>
//         <p className="mt-2 text-muted-foreground">Login to view your wishlist.</p>
//         <Button asChild className="mt-8">
//           <Link href="/login">Go to Login</Link>
//         </Button>
//       </div>
//     )
//   }

//   if (wishlistItems.length === 0) {
//     return (
//       <div className="container px-4 py-16 text-center">
//         <Heart className="h-16 w-16 mx-auto text-muted-foreground" />
//         <h1 className="mt-6 text-3xl font-bold">Your wishlist is empty</h1>
//         <p className="mt-2 text-muted-foreground">Save items you love to your wishlist and revisit them anytime.</p>
//         <Button asChild className="mt-8">
//           <Link href="/shop">Continue Shopping</Link>
//         </Button>
//       </div>
//     )
//   }

//   return (
//     <div className="container px-4 py-8 md:py-12">
//       <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//         {wishlistItems.map((product) => (
//           <Card key={product.id} className="overflow-hidden">
//             <div className="relative">
//               <Link href={/product/${product.id}}>
//                 <Image
//                   src={product.image || "/placeholder.svg?height=300&width=300"}
//                   alt={product.name}
//                   width={300}
//                   height={300}
//                   className="w-full h-60 object-cover"
//                 />
//               </Link>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="absolute top-2 right-2 bg-white/80 hover:bg-white text-primary"
//                 onClick={() => removeFromWishlist(product.id)}
//               >
//                 <Trash2 className="h-5 w-5" />
//                 <span className="sr-only">Remove from wishlist</span>
//               </Button>
//             </div>
//             <div className="p-4">
//               <Link href={/product/${product.id}} className="hover:underline">
//                 <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
//               </Link>
//               <p className="text-muted-foreground text-sm mb-2 line-clamp-2">{product.description}</p>
//               <div className="flex justify-between items-center mt-4">
//                 <span className="font-bold text-primary">${product.price.toFixed(2)}</span>
//                 <Button onClick={() => handleAddToCart(product)} size="sm">
//                   <ShoppingCart className="h-4 w-4 mr-2" />
//                   Add to Cart
//                 </Button>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       <div className="mt-12 text-center">
//         <Button asChild variant="outline">
//           <Link href="/shop">
//             <ShoppingBag className="h-4 w-4 mr-2" />
//             Continue Shopping
//           </Link>
//         </Button>
//       </div>
//     </div>
    
//   )
// }
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Trash2, ShoppingBag, Heart, ShoppingCart } from "lucide-react";
// import { products } from "@/lib/products";
// import type { Product } from "@/lib/types";
// import { doc, setDoc, arrayUnion } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { useAuth } from "@/context/AuthContext";

// export default function WishlistPage() {
//   const { user } = useAuth(); // ✅ correct hook usage
//   const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

//   useEffect(() => {
//     document.title = "PupCart - Wishlist Page";
//   }, []);

//   useEffect(() => {
//     const saved = localStorage.getItem("wishlist");
//     if (saved) {
//       try {
//         const wishlistIds = JSON.parse(saved) as string[];
//         const items = products.filter((p) => wishlistIds.includes(p.id));
//         setWishlistItems(items);
//       } catch (err) {
//         console.error("Error loading wishlist:", err);
//       }
//     }
//   }, []);

//   const addToWishlist = async (productId: string) => {
//     if (!user) return alert("Please log in to add to wishlist");

//     const userRef = doc(db, "users", user.uid);
//     await setDoc(
//       userRef,
//       {
//         email: user.email,
//         wishlist: arrayUnion(productId),
//       },
//       { merge: true } // Keep existing data like cart
//     );

//     alert("Added to wishlist!");
//   };

//   const removeFromWishlist = (id: string) => {
//     const updated = wishlistItems.filter((item) => item.id !== id);
//     setWishlistItems(updated);
//     localStorage.setItem(
//       "wishlist",
//       JSON.stringify(updated.map((item) => item.id))
//     );
//   };

//   if (wishlistItems.length === 0) {
//     return (
//       <div className="container px-4 py-16 text-center">
//         <Heart className="h-16 w-16 mx-auto text-muted-foreground" />
//         <h1 className="mt-6 text-3xl font-bold">Your wishlist is empty</h1>
//         <p className="mt-2 text-muted-foreground">
//           Save items you love to your wishlist and revisit them anytime.
//         </p>
//         <Button asChild className="mt-8">
//           <Link href="/shop">Continue Shopping</Link>
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <div className="container px-4 py-8 md:py-12">
//       <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {wishlistItems.map((product) => (
//           <Card key={product.id} className="overflow-hidden">
//             <div className="relative">
//               <Link href={`/product/${product.id}`}>
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   width={300}
//                   height={300}
//                   className="w-full h-60 object-cover"
//                 />
//               </Link>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="absolute top-2 right-2 bg-white/80 hover:bg-white text-primary"
//                 onClick={() => removeFromWishlist(product.id)}
//               >
//                 <Trash2 className="h-5 w-5" />
//               </Button>
//             </div>
//             <div className="p-4">
//               <Link href={`/product/${product.id}`} className="hover:underline">
//                 <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
//               </Link>
//               <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
//                 {product.description}
//               </p>
//               <div className="flex justify-between items-center mt-4">
//                 <span className="font-bold text-primary">
//                   ₹{product.price.toFixed(2)}
//                 </span>
//                 <Button size="sm">
//                   <ShoppingCart className="h-4 w-4 mr-2" />
//                   Add to Cart
//                 </Button>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       <div className="mt-12 text-center">
//         <Button asChild variant="outline">
//           <Link href="/shop">
//             <ShoppingBag className="h-4 w-4 mr-2" />
//             Continue Shopping
//           </Link>
//         </Button>
//       </div>
//     </div>
//   );
// }
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Trash2, ShoppingBag, Heart, ShoppingCart } from "lucide-react";
// import { products } from "@/lib/products";
// import type { Product } from "@/lib/types";
// import { doc, setDoc, arrayUnion } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { useAuth } from "@/context/AuthContext";

// export default function WishlistPage() {
//   const { user } = useAuth(); // ✅ correct hook usage
//   const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

//   useEffect(() => {
//     document.title = "PupCart - Wishlist Page";
//   }, []);

//   useEffect(() => {
//     const saved = localStorage.getItem("wishlist");
//     if (saved) {
//       try {
//         const wishlistIds = JSON.parse(saved) as string[];
//         const items = products.filter((p) => wishlistIds.includes(p.id));
//         setWishlistItems(items);
//       } catch (err) {
//         console.error("Error loading wishlist:", err);
//       }
//     }
//   }, []);

//   const addToWishlist = async (productId: string) => {
//     if (!user) return alert("Please log in to add to wishlist");

//     const userRef = doc(db, "users", user.uid);
//     await setDoc(
//       userRef,
//       {
//         email: user.email,
//         wishlist: arrayUnion(productId),
//       },
//       { merge: true } // Keep existing data like cart
//     );

//     alert("Added to wishlist!");
//   };

//   const removeFromWishlist = (id: string) => {
//     const updated = wishlistItems.filter((item) => item.id !== id);
//     setWishlistItems(updated);
//     localStorage.setItem(
//       "wishlist",
//       JSON.stringify(updated.map((item) => item.id))
//     );
//   };

//   if (wishlistItems.length === 0) {
//     return (
//       <div className="container px-4 py-16 text-center">
//         <Heart className="h-16 w-16 mx-auto text-muted-foreground" />
//         <h1 className="mt-6 text-3xl font-bold">Your wishlist is empty</h1>
//         <p className="mt-2 text-muted-foreground">
//           Save items you love to your wishlist and revisit them anytime.
//         </p>
//         <Button asChild className="mt-8">
//           <Link href="/shop">Continue Shopping</Link>
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <div className="container px-4 py-8 md:py-12">
//       <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {wishlistItems.map((product) => (
//           <Card key={product.id} className="overflow-hidden">
//             <div className="relative">
//               <Link href={`/product/${product.id}`}>
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   width={300}
//                   height={300}
//                   className="w-full h-60 object-cover"
//                 />
//               </Link>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="absolute top-2 right-2 bg-white/80 hover:bg-white text-primary"
//                 onClick={() => removeFromWishlist(product.id)}
//               >
//                 <Trash2 className="h-5 w-5" />
//               </Button>
//             </div>
//             <div className="p-4">
//               <Link href={`/product/${product.id}`} className="hover:underline">
//                 <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
//               </Link>
//               <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
//                 {product.description}
//               </p>
//               <div className="flex justify-between items-center mt-4">
//                 <span className="font-bold text-primary">
//                   ₹{product.price.toFixed(2)}
//                 </span>
//                 <Button size="sm">
//                   <ShoppingCart className="h-4 w-4 mr-2" />
//                   Add to Cart
//                 </Button>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       <div className="mt-12 text-center">
//         <Button asChild variant="outline">
//           <Link href="/shop">
//             <ShoppingBag className="h-4 w-4 mr-2" />
//             Continue Shopping
//           </Link>
//         </Button>
//       </div>
//     </div>
//   );
// }
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Trash2, ShoppingBag, Heart, ShoppingCart } from "lucide-react";
// import { products } from "@/lib/products";
// import type { Product } from "@/lib/types";
// import { doc, setDoc, arrayUnion } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { useAuth } from "@/context/AuthContext";

// export default function WishlistPage() {
//   const { user } = useAuth();
//   const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
//   const [wishlistIds, setWishlistIds] = useState<string[]>([]);

//   useEffect(() => {
//     document.title = "PupCart - Wishlist Page";
//   }, []);

//   useEffect(() => {
//     const saved = localStorage.getItem("wishlist");
//     if (saved) {
//       try {
//         const ids = JSON.parse(saved) as string[];
//         const items = products.filter((p) => ids.includes(p.id));
//         setWishlistItems(items);
//         setWishlistIds(ids);
//       } catch (err) {
//         console.error("Error loading wishlist:", err);
//       }
//     }
//   }, []);

//   const addToWishlist = async (productId: string) => {
//     if (!user) return alert("Please log in to add to wishlist");

//     const userRef = doc(db, "users", user.uid);
//     await setDoc(
//       userRef,
//       {
//         email: user.email,
//         wishlist: arrayUnion(productId),
//       },
//       { merge: true }
//     );

//     setWishlistIds((prev) => [...prev, productId]);
//     localStorage.setItem("wishlist", JSON.stringify([...wishlistIds, productId]));
//     const product = products.find((p) => p.id === productId);
//     if (product) {
//       setWishlistItems((prev) => [...prev, product]);
//     }

//     alert("Added to wishlist!");
//   };

//   const removeFromWishlist = (id: string) => {
//     const updated = wishlistItems.filter((item) => item.id !== id);
//     setWishlistItems(updated);
//     const updatedIds = wishlistIds.filter((pid) => pid !== id);
//     setWishlistIds(updatedIds);
//     localStorage.setItem("wishlist", JSON.stringify(updatedIds));
//   };

//   if (wishlistItems.length === 0) {
//     return (
//       <div className="container px-4 py-16 text-center">
//         <Heart className="h-16 w-16 mx-auto text-muted-foreground" />
//         <h1 className="mt-6 text-3xl font-bold">Your wishlist is empty</h1>
//         <p className="mt-2 text-muted-foreground">
//           Save items you love to your wishlist and revisit them anytime.
//         </p>
//         <Button asChild className="mt-8">
//           <Link href="/shop">Continue Shopping</Link>
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <div className="container px-4 py-8 md:py-12">
//       <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {wishlistItems.map((product) => (
//           <Card key={product.id} className="overflow-hidden">
//             <div className="relative">
//               <Link href={`/product/${product.id}`}>
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   width={300}
//                   height={300}
//                   className="w-full h-60 object-cover"
//                 />
//               </Link>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="absolute top-2 right-2 bg-white/80 hover:bg-white text-red-500"
//                 onClick={() => removeFromWishlist(product.id)}
//               >
//                 <Trash2 className="h-5 w-5" />
//               </Button>

//               {/* ❤️ Heart icon to add to wishlist again (if not already in wishlist) */}
//               {!wishlistIds.includes(product.id) && (
//                 <Button
//                   variant="ghost"
//                   size="icon"
//                   className="absolute top-2 left-2 bg-white/80 hover:bg-white text-gray-700"
//                   onClick={() => addToWishlist(product.id)}
//                 >
//                   <Heart className="h-5 w-5" />
//                 </Button>
//               )}
//             </div>
//             <div className="p-4">
//               <Link href={`/product/${product.id}`} className="hover:underline">
//                 <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
//               </Link>
//               <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
//                 {product.description}
//               </p>
//               <div className="flex justify-between items-center mt-4">
//                 <span className="font-bold text-primary">
//                   ₹{product.price.toFixed(2)}
//                 </span>
//                 <Button size="sm">
//                   <ShoppingCart className="h-4 w-4 mr-2" />
//                   Add to Cart
//                 </Button>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       <div className="mt-12 text-center">
//         <Button asChild variant="outline">
//           <Link href="/shop">
//             <ShoppingBag className="h-4 w-4 mr-2" />
//             Continue Shopping
//           </Link>
//         </Button>
//       </div>
//     </div>
//   );
// }
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Trash2, ShoppingBag, Heart, ShoppingCart } from "lucide-react";
// import { products } from "@/lib/products";
// import type { Product } from "@/lib/types";
// import { doc, setDoc, arrayUnion } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { useAuth } from "@/context/AuthContext";

// export default function WishlistPage() {
//   const { user } = useAuth(); // ✅ correct hook usage
//   const [wishlistItems, setWishlistItems] = useState<Product[]>([]);

//   useEffect(() => {
//     document.title = "PupCart - Wishlist Page";
//   }, []);

//   useEffect(() => {
//     const saved = localStorage.getItem("wishlist");
//     if (saved) {
//       try {
//         const wishlistIds = JSON.parse(saved) as string[];
//         const items = products.filter((p) => wishlistIds.includes(p.id));
//         setWishlistItems(items);
//       } catch (err) {
//         console.error("Error loading wishlist:", err);
//       }
//     }
//   }, []);

//   const addToWishlist = async (productId: string) => {
//     if (!user) return alert("Please log in to add to wishlist");

//     const userRef = doc(db, "users", user.uid);
//     await setDoc(
//       userRef,
//       {
//         email: user.email,
//         wishlist: arrayUnion(productId),
//       },
//       { merge: true } // Keep existing data like cart
//     );

//     alert("Added to wishlist!");
//   };

//   const removeFromWishlist = (id: string) => {
//     const updated = wishlistItems.filter((item) => item.id !== id);
//     setWishlistItems(updated);
//     localStorage.setItem(
//       "wishlist",
//       JSON.stringify(updated.map((item) => item.id))
//     );
//   };

//   if (wishlistItems.length === 0) {
//     return (
//       <div className="container px-4 py-16 text-center">
//         <Heart className="h-16 w-16 mx-auto text-muted-foreground" />
//         <h1 className="mt-6 text-3xl font-bold">Your wishlist is empty</h1>
//         <p className="mt-2 text-muted-foreground">
//           Save items you love to your wishlist and revisit them anytime.
//         </p>
//         <Button asChild className="mt-8">
//           <Link href="/shop">Continue Shopping</Link>
//         </Button>
//       </div>
//     );
//   }

//   return (
//     <div className="container px-4 py-8 md:py-12">
//       <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {wishlistItems.map((product) => (
//           <Card key={product.id} className="overflow-hidden">
//             <div className="relative">
//               <Link href={`/product/${product.id}`}>
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   width={300}
//                   height={300}
//                   className="w-full h-60 object-cover"
//                 />
//               </Link>
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="absolute top-2 right-2 bg-white/80 hover:bg-white text-primary"
//                 onClick={() => removeFromWishlist(product.id)}
//               >
//                 <Trash2 className="h-5 w-5" />
//               </Button>
//             </div>
//             <div className="p-4">
//               <Link href={`/product/${product.id}`} className="hover:underline">
//                 <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
//               </Link>
//               <p className="text-muted-foreground text-sm mb-2 line-clamp-2">
//                 {product.description}
//               </p>
//               <div className="flex justify-between items-center mt-4">
//                 <span className="font-bold text-primary">
//                   ₹{product.price.toFixed(2)}
//                 </span>
//                 <Button size="sm">
//                   <ShoppingCart className="h-4 w-4 mr-2" />
//                   Add to Cart
//                 </Button>
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>

//       <div className="mt-12 text-center">
//         <Button asChild variant="outline">
//           <Link href="/shop">
//             <ShoppingBag className="h-4 w-4 mr-2" />
//             Continue Shopping
//           </Link>
//         </Button>
//       </div>
//     </div>
//   );
// }
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
