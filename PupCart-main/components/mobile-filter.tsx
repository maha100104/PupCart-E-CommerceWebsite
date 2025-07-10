// components/mobile-filters.tsx
// "use client"

// import { useRouter, useSearchParams } from "next/navigation"
// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"

// export default function MobileFilters({ onClose }: { onClose: () => void }) {
//   const router = useRouter()
//   const searchParams = useSearchParams()

//   const [category, setCategory] = useState(searchParams.get("category") || "")
//   const [pet, setPet] = useState(searchParams.get("pet") || "")
//   const [sort, setSort] = useState(searchParams.get("sort") || "")
//   const [min, setMin] = useState(searchParams.get("min") || "")
//   const [max, setMax] = useState(searchParams.get("max") || "")

//   const applyFilters = () => {
//     const params = new URLSearchParams()

//     if (category) params.set("category", category)
//     if (pet) params.set("pet", pet)
//     if (sort) params.set("sort", sort)
//     if (min) params.set("min", min)
//     if (max) params.set("max", max)

//     router.push(`/shop?${params.toString()}`)
//     onClose() // close the dialog
//   }

//   return (
//     <div className="space-y-4">
//       {/* Category */}
//       <div>
//         <label className="block text-sm font-medium">Category</label>
//         <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border p-2 rounded">
//           <option value="">All</option>
//           <option value="toys">Toys</option>
//           <option value="food">Food</option>
//           <option value="accessories">Accessories</option>
//         </select>
//       </div>

//       {/* Pet */}
//       <div>
//         <label className="block text-sm font-medium">Pet</label>
//         <select value={pet} onChange={(e) => setPet(e.target.value)} className="w-full border p-2 rounded">
//           <option value="">All</option>
//           <option value="dog">Dog</option>
//           <option value="cat">Cat</option>
//           <option value="bird">Bird</option>
//         </select>
//       </div>

//       {/* Price Range */}
//       <div className="flex gap-2">
//         <input
//           type="number"
//           placeholder="Min Price"
//           value={min}
//           onChange={(e) => setMin(e.target.value)}
//           className="w-full border p-2 rounded"
//         />
//         <input
//           type="number"
//           placeholder="Max Price"
//           value={max}
//           onChange={(e) => setMax(e.target.value)}
//           className="w-full border p-2 rounded"
//         />
//       </div>

//       {/* Sort */}
//       <div>
//         <label className="block text-sm font-medium">Sort</label>
//         <select value={sort} onChange={(e) => setSort(e.target.value)} className="w-full border p-2 rounded">
//           <option value="">Default</option>
//           <option value="price-asc">Price Low to High</option>
//           <option value="price-desc">Price High to Low</option>
//           <option value="rating">Top Rated</option>
//           <option value="newest">Newest</option>
//         </select>
//       </div>

//       <Button onClick={applyFilters} className="w-full">
//         Apply Filters
//       </Button>
//     </div>
//   )
// }
// "use client"

// import { useRouter, useSearchParams } from "next/navigation"
// import { useState, useEffect } from "react"
// import { Button } from "@/components/ui/button"
// import clsx from "clsx" // Optional: for cleaner class logic (install if not already)

// export default function MobileFilters({ onClose }: { onClose: () => void }) {
//   const router = useRouter()
//   const searchParams = useSearchParams()

//   const [category, setCategory] = useState(searchParams.get("category") || "")
//   const [pet, setPet] = useState(searchParams.get("pet") || "")
//   const [sort, setSort] = useState(searchParams.get("sort") || "")
//   const [min, setMin] = useState(searchParams.get("min") || "")
//   const [max, setMax] = useState(searchParams.get("max") || "")

//   const applyFilters = () => {
//     const params = new URLSearchParams()

//     if (category) params.set("category", category)
//     if (pet) params.set("pet", pet)
//     if (sort) params.set("sort", sort)
//     if (min) params.set("min", min)
//     if (max) params.set("max", max)

//     router.push(`/shop?${params.toString()}`)
//     onClose()
//   }

//   return (
//     <div className="space-y-6">
//       {/* 🐾 Pet Selector - Grid layout */}
//       <div>
//         <label className="block text-sm font-semibold mb-2">Select Pet</label>
//         <div className="grid grid-cols-2 gap-3">
//           {["dog", "cat", "bird"].map((type) => (
//             <div
//               key={type}
//               onClick={() => setPet(type)}
//               className={clsx(
//                 "cursor-pointer p-4 rounded-lg text-center font-medium border transition-all",
//                 pet === type
//                   ? "bg-pink-100 border-pink-400 text-pink-700 scale-105"
//                   : "bg-white border-gray-300 text-gray-600"
//               )}
//             >
//               {type.charAt(0).toUpperCase() + type.slice(1)}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 🏷️ Category Selector */}
//       <div>
//         <label className="block text-sm font-semibold mb-2">Category</label>
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="w-full border p-2 rounded"
//         >
//           <option value="">All</option>
//           <option value="toys">Toys</option>
//           <option value="food">Food</option>
//           <option value="accessories">Accessories</option>
//         </select>
//       </div>

//       {/* 💰 Price Range */}
//       <div className="flex gap-2">
//         <input
//           type="number"
//           placeholder="Min"
//           value={min}
//           onChange={(e) => setMin(e.target.value)}
//           className="w-full border p-2 rounded"
//         />
//         <input
//           type="number"
//           placeholder="Max"
//           value={max}
//           onChange={(e) => setMax(e.target.value)}
//           className="w-full border p-2 rounded"
//         />
//       </div>

//       {/* 🔃 Sort Option */}
//       <div>
//         <label className="block text-sm font-semibold mb-2">Sort By</label>
//         <select
//           value={sort}
//           onChange={(e) => setSort(e.target.value)}
//           className="w-full border p-2 rounded"
//         >
//           <option value="">Default</option>
//           <option value="price-asc">Price Low to High</option>
//           <option value="price-desc">Price High to Low</option>
//           <option value="rating">Top Rated</option>
//           <option value="newest">Newest</option>
//         </select>
//       </div>

//       {/* ✅ Apply Button */}
//       <Button onClick={applyFilters} className="w-full mt-4">
//         Apply Filters
//       </Button>
//     </div>
//   )
// }
"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import clsx from "clsx" // Optional helper for class toggle

export default function MobileFilters({ onClose }: { onClose: () => void }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [category, setCategory] = useState(searchParams.get("category") || "")
  const [pet, setPet] = useState(searchParams.get("pet") || "")
  const [sort, setSort] = useState(searchParams.get("sort") || "")
  const [min, setMin] = useState(searchParams.get("min") || "")
  const [max, setMax] = useState(searchParams.get("max") || "")

  const applyFilters = () => {
    const params = new URLSearchParams()

    if (category) params.set("category", category)
    if (pet) params.set("pet", pet)
    if (sort) params.set("sort", sort)
    if (min) params.set("min", min)
    if (max) params.set("max", max)

    router.push(`/shop?${params.toString()}`)
    onClose()
  }

  return (
    <div className="space-y-6">
      {/* 🐾 Pet Selector */}
      <div>
        <label className="block text-sm font-semibold mb-2">Select Pet</label>
        <div className="grid grid-cols-2 gap-3">
          {["dog", "cat", "bird"].map((type) => (
            <div
              key={type}
              onClick={() => setPet(type)}
              className={clsx(
                "cursor-pointer p-4 rounded-lg text-center font-medium border transition-all",
                pet === type
                  ? "bg-pink-100 border-pink-400 text-pink-700 scale-105"
                  : "bg-white border-gray-300 text-gray-600"
              )}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </div>
          ))}
        </div>
      </div>

      {/* 🏷️ Category Selector */}
      <div>
        <label className="block text-sm font-semibold mb-2">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">All</option>
          <option value="toys">Toys</option>
          <option value="food">Food</option>
          <option value="supplements">Supplements</option>
          <option value="grooming">Grooming</option>
        </select>
      </div>

      {/* 💰 Price Range */}
      <div className="flex gap-2">
        <input
          type="number"
          placeholder="Min"
          value={min}
          onChange={(e) => setMin(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Max"
          value={max}
          onChange={(e) => setMax(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </div>

      {/* 🔃 Sort Option */}
      <div>
        <label className="block text-sm font-semibold mb-2">Sort By</label>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">Default</option>
          <option value="price-asc">Price Low to High</option>
          <option value="price-desc">Price High to Low</option>
          <option value="rating">Top Rated</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* ✅ Apply Button */}
      <Button onClick={applyFilters} className="w-full mt-4">
        Apply Filters
      </Button>
    </div>
  )
}
