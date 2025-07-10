// // // import { Suspense } from "react"
// import { products } from "@/lib/products"
// import ProductGrid from "@/components/product-grid"
// import ShopFilters from "@/components/shop-filters"
// import { Skeleton } from "@/components/ui/skeleton"
// import { Suspense } from "react"
// import { Metadata } from "next"
// export const metadata:Metadata={
//   title:{
//     absolute:"PupCart-Shop Page"
//   }
// }

// interface ShopPageProps {
//   searchParams?: {
//     category?: string
//     pet?: string
//     sort?: string
//     min?: string
//     max?: string
//   }
// }

// export default async function ShopPage({ searchParams = {} }: ShopPageProps) {
//   let filteredProducts = [...products]

//   // Filter by category
//   if (searchParams.category) {
//     filteredProducts = filteredProducts.filter(
//       (product) => product.category === searchParams.category
//     )
//   }

//   // Filter by pet
//   if (searchParams.pet) {
//     filteredProducts = filteredProducts.filter(
//       (product) =>
//         product.pet === searchParams.pet || product.pet === "both"
//     )
//   }

//   // Filter by price range
//   if (searchParams.min) {
//     filteredProducts = filteredProducts.filter(
//       (product) => product.price >= parseFloat(searchParams.min || "0")
//     )
//   }

//   if (searchParams.max) {
//     filteredProducts = filteredProducts.filter(
//       (product) => product.price <= parseFloat(searchParams.max || "1000")
//     )
//   }

//   // Sort
//   if (searchParams.sort) {
//     switch (searchParams.sort) {
//       case "price-asc":
//         filteredProducts.sort((a, b) => a.price - b.price)
//         break
//       case "price-desc":
//         filteredProducts.sort((a, b) => b.price - a.price)
//         break
//       case "rating":
//         filteredProducts.sort((a, b) => b.rating - a.rating)
//         break
//       case "newest":
//         filteredProducts.sort((a, b) =>
//           a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1
//         )
//         break
//     }
//   }

//   return (
//     <div className="container px-4 py-8 md:py-12">
//       <h1 className="text-3xl font-bold mb-8">Shop Pet Products</h1>

//       <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
//         <ShopFilters/>
//         <div>
//           <Suspense fallback={<ProductGridSkeleton />}>
//             <ProductGrid products={filteredProducts} />
//           </Suspense>
//         </div>
//       </div>
//     </div>
//   )
// }

// function ProductGridSkeleton() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//       {Array(8)
//         .fill(0)
//         .map((_, i) => (
//           <div key={i} className="space-y-3">
//             <Skeleton className="h-60 w-full rounded-lg" />
//             <Skeleton className="h-4 w-2/3" />
//             <Skeleton className="h-4 w-1/2" />
//             <div className="flex gap-2">
//               <Skeleton className="h-4 w-1/4" />
//               <Skeleton className="h-4 w-1/4" />
//             </div>
//           </div>
//         ))}
//     </div>
//   )
// }

// import { Product } from "@/lib/types"
// import ProductCard from "@/components/product-card"
// import { products } from "@/lib/products" // Your data loader function

// interface ShopPageProps {
//   searchParams: {
//     category?: string
//     pet?: string
//     min?: string
//     max?: string
//     sort?: string
//   }
// }

// export default async function ShopPage({ searchParams }: ShopPageProps) {
//   // Step 1: Load products from your data source (DB, mock, etc.)
//   let products: Product[] = await products()

//   // Step 2: Apply filters based on searchParams
//   if (searchParams.category) {
//     products = products.filter((product) => product.category === searchParams.category)
//   }

//   if (searchParams.pet) {
//     products = products.filter(
//       (product) => product.pet === searchParams.pet || product.pet === "both"
//     )
//   }

//   if (searchParams.min) {
//     products = products.filter((product) => product.price >= parseFloat(searchParams.min || "0"))
//   }

//   if (searchParams.max) {
//     products = products.filter((product) => product.price <= parseFloat(searchParams.max || "1000"))
//   }

//   if (searchParams.sort) {
//     switch (searchParams.sort) {
//       case "price-asc":
//         products.sort((a, b) => a.price - b.price)
//         break
//       case "price-desc":
//         products.sort((a, b) => b.price - a.price)
//         break
//     }
//   }

//   // Step 3: Render filtered products
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
//       {products.length > 0 ? (
//         products.map((product) => <ProductCard key={product.id} product={product} />)
//       ) : (
//         <p>No products found.</p>
//       )}
//     </div>
//   )
// }
// "use client"

// import { products } from "@/lib/products"
// import ProductGrid from "@/components/product-grid"
// import ShopFilters from "@/components/shop-filters"
// import { Skeleton } from "@/components/ui/skeleton"
// import { Suspense, useState } from "react"
// import { Metadata } from "next"
// import { Button } from "@/components/ui/button"
// import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
// import { Filter } from "lucide-react"

// // export const metadata: Metadata = {
// //   title: {
// //     absolute: "PupCart-Shop Page",
// //   },
// // }

// interface ShopPageProps {
//   searchParams?: {
//     category?: string
//     pet?: string
//     sort?: string
//     min?: string
//     max?: string
//   }
// }

// export default function ShopPage({ searchParams = {} }: ShopPageProps) {
//   const [open, setOpen] = useState(false)

//   let filteredProducts = [...products]

//   // Filter by category
//   if (searchParams.category) {
//     filteredProducts = filteredProducts.filter(
//       (product) => product.category === searchParams.category
//     )
//   }

//   // Filter by pet
//   if (searchParams.pet) {
//     filteredProducts = filteredProducts.filter(
//       (product) => product.pet === searchParams.pet || product.pet === "both"
//     )
//   }

//   // Filter by price range
//   if (searchParams.min) {
//     filteredProducts = filteredProducts.filter(
//       (product) => product.price >= parseFloat(searchParams.min || "0")
//     )
//   }

//   if (searchParams.max) {
//     filteredProducts = filteredProducts.filter(
//       (product) => product.price <= parseFloat(searchParams.max || "1000")
//     )
//   }

//   // Sort
//   if (searchParams.sort) {
//     switch (searchParams.sort) {
//       case "price-asc":
//         filteredProducts.sort((a, b) => a.price - b.price)
//         break
//       case "price-desc":
//         filteredProducts.sort((a, b) => b.price - a.price)
//         break
//       case "rating":
//         filteredProducts.sort((a, b) => b.rating - a.rating)
//         break
//       case "newest":
//         filteredProducts.sort((a, b) =>
//           a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1
//         )
//         break
//     }
//   }

//   return (
//     <div className="container px-4 py-8 md:py-12">
//       <h1 className="text-3xl font-bold mb-8">Shop Pet Products</h1>

//       {/* Mobile Filter Button */}
//       <div className="md:hidden mb-4">
//         <Dialog open={open} onOpenChange={setOpen}>
//           <DialogTrigger asChild>
//             <Button variant="outline" className="w-full">
//               <Filter className="w-4 h-4 mr-2" />
//               Filter
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="max-w-sm h-[90vh] overflow-y-auto p-6">
//             <ShopFilters />
//           </DialogContent>
//         </Dialog>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
//         {/* Sidebar Filter (only visible on md+) */}
//         <div className="hidden md:block">
//           <ShopFilters />
//         </div>

//         {/* Product Grid */}
//         <div>
//           <Suspense fallback={<ProductGridSkeleton />}>
//             <ProductGrid products={filteredProducts} />
//           </Suspense>
//         </div>
//       </div>
//     </div>
//   )
// }

// function ProductGridSkeleton() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//       {Array(8)
//         .fill(0)
//         .map((_, i) => (
//           <div key={i} className="space-y-3">
//             <Skeleton className="h-60 w-full rounded-lg" />
//             <Skeleton className="h-4 w-2/3" />
//             <Skeleton className="h-4 w-1/2" />
//             <div className="flex gap-2">
//               <Skeleton className="h-4 w-1/4" />
//               <Skeleton className="h-4 w-1/4" />
//             </div>
//           </div>
//         ))}
//     </div>
//   )
// }
// "use client"

// import { useSearchParams } from "next/navigation"
// import { useState, Suspense } from "react"
// import { products } from "@/lib/products"
// import ProductGrid from "@/components/product-grid"
// import ShopFilters from "@/components/shop-filters"
// import { Skeleton } from "@/components/ui/skeleton"
// import { Button } from "@/components/ui/button"
// import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
// import { Filter } from "lucide-react"
// import MobileFilters from "@/components/mobile-filter"

// export default function ShopPage() {
//   const searchParams = useSearchParams()
//   const [open, setOpen] = useState(false)

//   const category = searchParams.get("category")
//   const pet = searchParams.get("pet")
//   const sort = searchParams.get("sort")
//   const min = searchParams.get("min")
//   const max = searchParams.get("max")

//   let filteredProducts = [...products]

//   // Filter by category
//   if (category) {
//     filteredProducts = filteredProducts.filter(
//       (product) => product.category === category
//     )
//   }

//   // Filter by pet
//   if (pet) {
//     filteredProducts = filteredProducts.filter(
//       (product) => product.pet === pet || product.pet === "both"
//     )
//   }

//   // Filter by price range
//   if (min) {
//     filteredProducts = filteredProducts.filter(
//       (product) => product.price >= parseFloat(min)
//     )
//   }

//   if (max) {
//     filteredProducts = filteredProducts.filter(
//       (product) => product.price <= parseFloat(max)
//     )
//   }

//   // Sort
//   if (sort) {
//     switch (sort) {
//       case "price-asc":
//         filteredProducts.sort((a, b) => a.price - b.price)
//         break
//       case "price-desc":
//         filteredProducts.sort((a, b) => b.price - a.price)
//         break
//       case "rating":
//         filteredProducts.sort((a, b) => b.rating - a.rating)
//         break
//       case "newest":
//         filteredProducts.sort((a, b) =>
//           a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1
//         )
//         break
//     }
//   }

//   return (
//     <div className="container px-4 py-8 md:py-12">
//       <h1 className="text-3xl font-bold mb-8">Shop Pet Products</h1>

//       {/* Mobile Filter Button */}
//         <Dialog>
//   <DialogTrigger>Open</DialogTrigger>
//   <DialogContent>
//     {/* Safe now */}
//   </DialogContent>
// </Dialog>


//       <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
//         {/* Sidebar Filter (only visible on md+) */}
//         <div className="hidden md:block">
//           <ShopFilters />
//         </div>

//         {/* Product Grid */}
//         <div>
//           <Suspense fallback={<ProductGridSkeleton />}>
//             <ProductGrid products={filteredProducts} />
//           </Suspense>
//         </div>
//       </div>
//     </div>
//   )
// }

// function ProductGridSkeleton() {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//       {Array(8)
//         .fill(0)
//         .map((_, i) => (
//           <div key={i} className="space-y-3">
//             <Skeleton className="h-60 w-full rounded-lg" />
//             <Skeleton className="h-4 w-2/3" />
//             <Skeleton className="h-4 w-1/2" />
//             <div className="flex gap-2">
//               <Skeleton className="h-4 w-1/4" />
//               <Skeleton className="h-4 w-1/4" />
//             </div>
//           </div>
//         ))}
//     </div>
//   )
// }
// "use client"

// import { useSearchParams, useRouter } from "next/navigation"
// import { useState, useEffect, useMemo } from "react"
// import { products } from "@/lib/products"
// import ProductGrid from "@/components/product-grid"
// import ShopFilters from "@/components/shop-filters"
// import { Skeleton } from "@/components/ui/skeleton"
// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogTitle,
// } from "@/components/ui/dialog"
// import { Filter } from "lucide-react"
// import MobileFilters from "@/components/mobile-filter"// ✅ Import the component

// export default function ShopPage() {
//   const router = useRouter()
//   const searchParams = useSearchParams()

//   const category = searchParams.get("category") || ""
//   const pet = searchParams.get("pet") || ""
//   const min = searchParams.get("min") || ""
//   const max = searchParams.get("max") || ""

//   const [open, setOpen] = useState(false)
//   const [tempCategory, setTempCategory] = useState(category)
//   const [tempPet, setTempPet] = useState(pet)
//   const [tempMin, setTempMin] = useState(min)
//   const [tempMax, setTempMax] = useState(max)

//   useEffect(() => {
//     setTempCategory(category)
//     setTempPet(pet)
//     setTempMin(min)
//     setTempMax(max)
//   }, [category, pet, min, max])

//   const filteredProducts = useMemo(() => {
//     let result = [...products]

//     if (category) {
//       result = result.filter((p) => p.category === category)
//     }

//     if (pet) {
//       result = result.filter((p) => p.pet === pet || p.pet === "both")
//     }

//     if (min) {
//       result = result.filter((p) => p.price >= parseFloat(min))
//     }

//     if (max) {
//       result = result.filter((p) => p.price <= parseFloat(max))
//     }

//     return result
//   }, [category, pet, min, max])

//   return (
//     <div className="container px-4 py-8 md:py-12">
//       <h1 className="text-3xl font-bold mb-8">Shop Pet Products</h1>

//       {/* ✅ Mobile Filter Button */}
//       <div className="md:hidden mb-4">
//         <Dialog open={open} onOpenChange={setOpen}>
//           <DialogTrigger asChild>
//             <Button variant="outline" className="w-full">
//               <Filter className="w-4 h-4 mr-2" /> Filter
//             </Button>
//           </DialogTrigger>

//           <DialogContent>
//             <DialogTitle>Filter Products</DialogTitle>
//             <MobileFilters onClose={() => setOpen(false)} />
//           </DialogContent>
//         </Dialog>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
//         {/* Desktop Filter Sidebar */}
//         <div className="hidden md:block">
//           <ShopFilters />
//         </div>

//         {/* Product Grid */}
//         <div>
//           {filteredProducts.length === 0 ? (
//             <p>No products found matching your filters.</p>
//           ) : (
//             <ProductGrid products={filteredProducts} />
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// "use client";

// import { usePathname, useSearchParams, useRouter } from "next/navigation";
// import { useEffect, useMemo, useState } from "react";
// import { products } from "@/lib/products";
// import ProductGrid from "@/components/product-grid";
// import ShopFilters from "@/components/shop-filters";
// import { Button } from "@/components/ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Filter } from "lucide-react";
// import MobileFilters from "@/components/mobile-filter";

// export default function ShopPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const pathname = usePathname();

//   const [open, setOpen] = useState(false);

//   const [category, setCategory] = useState("");
//   const [pet, setPet] = useState("");
//   const [min, setMin] = useState("");
//   const [max, setMax] = useState("");

//   // ✅ Update values when the URL query changes
//   useEffect(() => {
//     const newCategory = searchParams.get("category") || "";
//     const newPet = searchParams.get("pet") || "";
//     const newMin = searchParams.get("min") || "";
//     const newMax = searchParams.get("max") || "";

//     setCategory(newCategory);
//     setPet(newPet);
//     setMin(newMin);
//     setMax(newMax);
//   }, [searchParams, pathname]);

//   const filteredProducts = useMemo(() => {
//     let result = [...products];

//     if (category) {
//       result = result.filter((p) => p.category === category);
//     }

//     if (pet) {
//       result = result.filter((p) => p.pet === pet || p.pet === "both");
//     }

//     if (min) {
//       result = result.filter((p) => p.price >= parseFloat(min));
//     }

//     if (max) {
//       result = result.filter((p) => p.price <= parseFloat(max));
//     }

//     return result;
//   }, [category, pet, min, max]);

//   return (
//     <div className="container px-4 py-8 md:py-12">
//       <h1 className="text-3xl font-bold mb-8">Shop Pet Products</h1>

//       {/* ✅ Mobile Filter Button */}
//       <div className="md:hidden mb-4">
//         <Dialog open={open} onOpenChange={setOpen}>
//           <DialogTrigger asChild>
//             <Button variant="outline" className="w-full">
//               <Filter className="w-4 h-4 mr-2" /> Filter
//             </Button>
//           </DialogTrigger>

//           <DialogContent>
//             <DialogTitle>Filter Products</DialogTitle>
//             <MobileFilters onClose={() => setOpen(false)} />
//           </DialogContent>
//         </Dialog>
//       </div>

//       {/* ✅ Grid Layout */}
//       <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
//         {/* Sidebar filters */}
//         <div className="hidden md:block">
//           <ShopFilters />
//         </div>

//         {/* Product list */}
//         <div>
//           {filteredProducts.length === 0 ? (
//             <p>No products found matching your filters.</p>
//           ) : (
//             <ProductGrid products={filteredProducts} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client"

// import { useSearchParams, useRouter } from "next/navigation"
// import { useState, useEffect, useMemo } from "react"
// import { products } from "@/lib/products"
// import ProductGrid from "@/components/product-grid"
// import ShopFilters from "@/components/shop-filters"
// import { Button } from "@/components/ui/button"
// import {
//   Dialog,
//   DialogTrigger,
//   DialogContent,
//   DialogTitle,
// } from "@/components/ui/dialog"
// import { Filter } from "lucide-react"
// import MobileFilters from "@/components/mobile-filter"

// export default function ShopPage() {
//   const router = useRouter()
//   const searchParams = useSearchParams()

//   // Get URL query parameters
//   const category = searchParams.get("category") || ""
//   const pet = searchParams.get("pet") || ""
//   const min = searchParams.get("min") || ""
//   const max = searchParams.get("max") || ""
//   const sortParam = searchParams.get("sort") || ""

//   // Local state for mobile filters
//   const [open, setOpen] = useState(false)

//   // Filter and sort products
//   const filteredProducts = useMemo(() => {
//     let result = [...products]

//     // Filter
//     if (category) {
//       result = result.filter((p) => p.category === category)
//     }

//     if (pet) {
//       result = result.filter((p) => p.pet === pet || p.pet === "both")
//     }

//     if (min) {
//       result = result.filter((p) => p.price >= parseFloat(min))
//     }

//     if (max) {
//       result = result.filter((p) => p.price <= parseFloat(max))
//     }

//     // Sort
//     if (sortParam === "price-asc") {
//       result.sort((a, b) => a.price - b.price)
//     } else if (sortParam === "price-desc") {
//       result.sort((a, b) => b.price - a.price)
//     } else if (sortParam === "rating") {
//       result.sort((a, b) => b.rating - a.rating)
//     } else if (sortParam === "newest") {
//       result.sort(
//         (a, b) =>
//           new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
//       )
//     }

//     return result
//   }, [category, pet, min, max, sortParam])

//   return (
//     <div className="container px-4 py-8 md:py-12">
//       <h1 className="text-3xl font-bold mb-8">Shop Pet Products</h1>

//       {/* Mobile Filter Button */}
//       <div className="md:hidden mb-4">
//         <Dialog open={open} onOpenChange={setOpen}>
//           <DialogTrigger asChild>
//             <Button variant="outline" className="w-full">
//               <Filter className="w-4 h-4 mr-2" /> Filter
//             </Button>
//           </DialogTrigger>

//           <DialogContent>
//             <DialogTitle>Filter Products</DialogTitle>
//             <MobileFilters onClose={() => setOpen(false)} />
//           </DialogContent>
//         </Dialog>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
//         {/* Sidebar Filters */}
//         <div className="hidden md:block">
//           <ShopFilters />
//         </div>

//         {/* Product List */}
//         <div>
//           {filteredProducts.length === 0 ? (
//             <p>No products found matching your filters.</p>
//           ) : (
//             <ProductGrid products={filteredProducts} />
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useState, useMemo } from "react"
import { products } from "@/lib/products"
import ProductGrid from "@/components/product-grid"
import ShopFilters from "@/components/shop-filters"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog"
import { Filter } from "lucide-react"
import MobileFilters from "@/components/mobile-filter"

export default function ShopPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Get URL query parameters
  const category = searchParams.get("category") || ""
  const pet = searchParams.get("pet") || ""
  const min = searchParams.get("min") || ""
  const max = searchParams.get("max") || ""
  const sortParam = searchParams.get("sort") || ""

  // Local state for mobile filters
  const [open, setOpen] = useState(false)

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Filter
    if (category) {
      result = result.filter((p) => p.category === category)
    }

    if (pet) {
      result = result.filter((p) => p.pet === pet || p.pet === "both")
    }

    if (min) {
      result = result.filter((p) => p.price >= parseFloat(min))
    }

    if (max) {
      result = result.filter((p) => p.price <= parseFloat(max))
    }

    // Sort
    if (sortParam === "price-asc") {
      result.sort((a, b) => a.price - b.price)
    } else if (sortParam === "price-desc") {
      result.sort((a, b) => b.price - a.price)
    } else if (sortParam === "rating") {
      result.sort((a, b) => b.rating - a.rating)
    }

    return result
  }, [category, pet, min, max, sortParam])

  return (
    <div className="container px-4 py-8 md:py-12">
      <h1 className="text-3xl font-bold mb-8">Shop Pet Products</h1>

      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              <Filter className="w-4 h-4 mr-2" /> Filter
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogTitle>Filter Products</DialogTitle>
            <MobileFilters onClose={() => setOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
        {/* Sidebar Filters */}
        <div className="hidden md:block">
          <ShopFilters />
        </div>

        {/* Product List */}
        <div>
          {filteredProducts.length === 0 ? (
            <p>No products found matching your filters.</p>
          ) : (
            <ProductGrid products={filteredProducts} />
          )}
        </div>
      </div>
    </div>
  )
}
