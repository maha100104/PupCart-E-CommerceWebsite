// //code-components/shop-filters.tsx
// "use client"

// import { useState, useEffect } from "react"
// import { useRouter, useSearchParams } from "next/navigation"
// import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Label } from "@/components/ui/label"
// import { Slider } from "@/components/ui/slider"
// import { Button } from "@/components/ui/button"
// import { Cat, Dog, Bird,Droplet,X } from "lucide-react"
// import { Badge } from "@/components/ui/badge"

// export default function ShopFilters() {
//   const router = useRouter()
//   const searchParams = useSearchParams()

//   const currentCategory = searchParams.get("category") || ""
//   const currentPet = searchParams.get("pet") || ""
//   const currentSort = searchParams.get("sort") || ""
//   const currentMinPrice = searchParams.get("min") ? parseFloat(searchParams.get("min") as string) : 0
//   const currentMaxPrice = searchParams.get("max") ? parseFloat(searchParams.get("max") as string) : 5000

//   const [category, setCategory] = useState(currentCategory)
//   const [pet, setPet] = useState(currentPet)
//   const [sort, setSort] = useState(currentSort)
//   const [priceRange, setPriceRange] = useState<[number, number]>([currentMinPrice, currentMaxPrice])

//   useEffect(() => {
//     const params = new URLSearchParams(searchParams.toString())

//     category ? params.set("category", category) : params.delete("category")
//     pet ? params.set("pet", pet) : params.delete("pet")
//     sort ? params.set("sort", sort) : params.delete("sort")
//     priceRange[0] > 0 ? params.set("min", priceRange[0].toString()) : params.delete("min")
//     priceRange[1] < 100 ? params.set("max", priceRange[1].toString()) : params.delete("max")

//     router.push(`/shop?${params.toString()}`)
//   }, [category, pet, sort, priceRange, router, searchParams])

//   const resetFilters = () => {
//     setCategory("")
//     setPet("")
//     setSort("")
//     setPriceRange([0, 100])
//     router.push("/shop")
//   }

//   const hasActiveFilters = category || pet || sort || priceRange[0] > 0 || priceRange[1] < 100

//   return (
//     <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 space-y-6">
//       {hasActiveFilters && (
//         <div className="flex items-center justify-between mb-4">
//           <h3 className="font-medium">Active Filters</h3>
//           <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8 text-xs">
//             <X className="h-3 w-3 mr-1" />
//             Clear All
//           </Button>
//         </div>
//       )}

//       {hasActiveFilters && (
//         <div className="flex flex-wrap gap-2 mb-4">
//           {category && (
//             <Badge variant="secondary" className="flex items-center gap-1">
//               Category: {category}
//               <Button variant="ghost" size="icon" onClick={() => setCategory("")} className="h-4 w-4 p-0 ml-1">
//                 <X className="h-3 w-3" />
//                 <span className="sr-only">Remove category filter</span>
//               </Button>
//             </Badge>
//           )}
//           {pet && (
//             <Badge variant="secondary" className="flex items-center gap-1">
//               Pet: {pet}
//               <Button variant="ghost" size="icon" onClick={() => setPet("")} className="h-4 w-4 p-0 ml-1">
//                 <X className="h-3 w-3" />
//                 <span className="sr-only">Remove pet filter</span>
//               </Button>
//             </Badge>
//           )}
//           {(priceRange[0] > 0 || priceRange[1] < 100) && (
//             <Badge variant="secondary" className="flex items-center gap-1">
//               Price: ₹{priceRange[0]} - ₹{priceRange[1]}
//               <Button variant="ghost" size="icon" onClick={() => setPriceRange([0, 100])} className="h-4 w-4 p-0 ml-1">
//                 <X className="h-3 w-3" />
//                 <span className="sr-only">Remove price filter</span>
//               </Button>
//             </Badge>
//           )}
//         </div>
//       )}

//       <Accordion type="multiple" defaultValue={["category", "pet", "price", "sort"]}>
//         <AccordionItem value="category">
//           <AccordionTrigger>Category</AccordionTrigger>
//           <AccordionContent>
//             <div className="space-y-2">
//               {["toys", "food", "supplements", "grooming supplies"].map((cat) => (
//                 <div key={cat} className="flex items-center space-x-2">
//                   <Checkbox
//                     id={`category-${cat}`}
//                     checked={category === cat}
//                     onCheckedChange={() => setCategory(category === cat ? "" : cat)}
//                   />
//                   <Label htmlFor={`category-${cat}`}>{cat[0].toUpperCase() + cat.slice(1)}</Label>
//                 </div>
//               ))}
//             </div>
//           </AccordionContent>
//         </AccordionItem>

//         <AccordionItem value="pet">
//           <AccordionTrigger>Pet Type</AccordionTrigger>
//           <AccordionContent>
//             <div className="space-y-2">
//               {[
//                 { label: "Cats", value: "cat", Icon: Cat },
//                 { label: "Dogs", value: "dog", Icon: Dog },
//                 { label: "Birds", value: "bird", Icon: Bird },
//                 { label: "aquaticPet", Value:"aquaticPet",Icon:Droplet}
//               ].map(({ label, value, Icon }) => (
//                 <div key={value} className="flex items-center space-x-2">
//                   <Checkbox
//                     id={`pet-${value}`}
//                     checked={pet === value}
//                     onCheckedChange={() => setPet(pet === value ? "" : value)}
//                   />
//                   <Label htmlFor={`pet-${value}`} className="flex items-center">
//                     <Icon className="h-4 w-4 mr-1" /> {label}
//                   </Label>
//                 </div>
//               ))}
//             </div>
//           </AccordionContent>
//         </AccordionItem>

//         <AccordionItem value="price">
//           <AccordionTrigger>Price Range</AccordionTrigger>
//           <AccordionContent>
//             <div className="space-y-4">
//               <Slider
//                 defaultValue={[priceRange[0], priceRange[1]]}
//                 max={100}
//                 step={1}
//                 value={priceRange}
//                 onValueChange={(value) => setPriceRange([value[0], value[1]])}
//                 className="my-6"
//               />
//               <div className="flex items-center justify-between">
//                 <span>₹{priceRange[0]}</span>
//                 <span>₹{priceRange[1]}</span>
//               </div>
//             </div>
//           </AccordionContent>
//         </AccordionItem>

//         <AccordionItem value="sort">
//           <AccordionTrigger>Sort By</AccordionTrigger>
//           <AccordionContent>
//             <div className="space-y-2">
//               {[
//                 { label: "Price: Low to High", value: "price-asc" },
//                 { label: "Price: High to Low", value: "price-desc" },
//                 { label: "Highest Rated", value: "rating" },
//                 { label: "Newest First", value: "newest" },
//               ].map(({ label, value }) => (
//                 <div key={value} className="flex items-center space-x-2">
//                   <Checkbox
//                     id={`sort-${value}`}
//                     checked={sort === value}
//                     onCheckedChange={() => setSort(sort === value ? "" : value)}
//                   />
//                   <Label htmlFor={`sort-${value}`}>{label}</Label>
//                 </div>
//               ))}
//             </div>
//           </AccordionContent>
//         </AccordionItem>
//       </Accordion>
//     </div>
//   )
// }
"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Cat, Dog, Bird, Droplet, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ShopFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentCategory = searchParams.get("category") || ""
  const currentPet = searchParams.get("pet") || ""
  const currentSort = searchParams.get("sort") || ""
  const currentMinPrice = searchParams.get("min") ? parseFloat(searchParams.get("min") as string) : 0
  const currentMaxPrice = searchParams.get("max") ? parseFloat(searchParams.get("max") as string) : 5000

  const [category, setCategory] = useState(currentCategory)
  const [pet, setPet] = useState(currentPet)
  const [sort, setSort] = useState(currentSort)
  const [priceRange, setPriceRange] = useState<[number, number]>([currentMinPrice, currentMaxPrice])

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())

    category ? params.set("category", category) : params.delete("category")
    pet ? params.set("pet", pet) : params.delete("pet")
    sort ? params.set("sort", sort) : params.delete("sort")
    priceRange[0] > 0 ? params.set("min", priceRange[0].toString()) : params.delete("min")
    priceRange[1] < 5000 ? params.set("max", priceRange[1].toString()) : params.delete("max")

    router.push(`/shop?${params.toString()}`)
  }, [category, pet, sort, priceRange, router, searchParams])

  const resetFilters = () => {
    setCategory("")
    setPet("")
    setSort("")
    setPriceRange([0, 5000])
    router.push("/shop")
  }

  const hasActiveFilters = category || pet || sort || priceRange[0] > 0 || priceRange[1] < 5000

  return (
    <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 space-y-6">
      {hasActiveFilters && (
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-medium">Active Filters</h3>
          <Button variant="ghost" size="sm" onClick={resetFilters} className="h-8 text-xs">
            <X className="h-3 w-3 mr-1" />
            Clear All
          </Button>
        </div>
      )}

      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2 mb-4">
          {category && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Category: {category}
              <Button variant="ghost" size="icon" onClick={() => setCategory("")} className="h-4 w-4 p-0 ml-1">
                <X className="h-3 w-3" />
                <span className="sr-only">Remove category filter</span>
              </Button>
            </Badge>
          )}
          {pet && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Pet: {pet}
              <Button variant="ghost" size="icon" onClick={() => setPet("")} className="h-4 w-4 p-0 ml-1">
                <X className="h-3 w-3" />
                <span className="sr-only">Remove pet filter</span>
              </Button>
            </Badge>
          )}
          {(priceRange[0] > 0 || priceRange[1] < 5000) && (
            <Badge variant="secondary" className="flex items-center gap-1">
              Price: ₹{priceRange[0]} - ₹{priceRange[1]}
              <Button variant="ghost" size="icon" onClick={() => setPriceRange([0, 5000])} className="h-4 w-4 p-0 ml-1">
                <X className="h-3 w-3" />
                <span className="sr-only">Remove price filter</span>
              </Button>
            </Badge>
          )}
        </div>
      )}

      <Accordion type="multiple" defaultValue={["category", "pet", "price", "sort"]}>
        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["toys", "food", "supplements", "grooming supplies"].map((cat) => (
                <div key={cat} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${cat}`}
                    checked={category === cat}
                    onCheckedChange={() => setCategory(category === cat ? "" : cat)}
                  />
                  <Label htmlFor={`category-${cat}`}>{cat[0].toUpperCase() + cat.slice(1)}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="pet">
          <AccordionTrigger>Pet Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {[
                { label: "Cats", value: "cat", Icon: Cat },
                { label: "Dogs", value: "dog", Icon: Dog },
                { label: "Birds", value: "bird", Icon: Bird },
                { label: "Aquatic", value: "aquaticpets", Icon: Droplet },
              ].map(({ label, value, Icon }) => (
                <div key={value} className="flex items-center space-x-2">
                  <Checkbox
                    id={`pet-${value}`}
                    checked={pet === value}
                    onCheckedChange={() => setPet(pet === value ? "" : value)}
                  />
                  <Label htmlFor={`pet-${value}`} className="flex items-center">
                    <Icon className="h-4 w-4 mr-1" /> {label}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                defaultValue={[priceRange[0], priceRange[1]]}
                max={5000}
                step={100}
                value={priceRange}
                onValueChange={(value) => setPriceRange([value[0], value[1]])}
                className="my-6"
              />
              <div className="flex items-center justify-between">
                <span>₹{priceRange[0]}</span>
                <span>₹{priceRange[1]}</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="sort">
          <AccordionTrigger>Sort By</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {[
                { label: "Price: Low to High", value: "price-asc" },
                { label: "Price: High to Low", value: "price-desc" },
                { label: "Highest Rated", value: "rating" },
                { label: "Newest First", value: "newest" },
              ].map(({ label, value }) => (
                <div key={value} className="flex items-center space-x-2">
                  <Checkbox
                    id={`sort-${value}`}
                    checked={sort === value}
                    onCheckedChange={() => setSort(sort === value ? "" : value)}
                  />
                  <Label htmlFor={`sort-${value}`}>{label}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
