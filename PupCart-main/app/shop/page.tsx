"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useState, useMemo, Suspense } from "react"
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

function ShopPageContent() {
  const router = useRouter()
  const searchParams = useSearchParams()

  
  const category = searchParams.get("category") || ""
  const pet = searchParams.get("pet") || ""
  const min = searchParams.get("min") || ""
  const max = searchParams.get("max") || ""
  const sortParam = searchParams.get("sort") || ""

  
  const [open, setOpen] = useState(false)

  
  const filteredProducts = useMemo(() => {
    let result = [...products]

    
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

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="container px-4 py-8 md:py-12 text-center text-gray-500">
        Loading shop...
      </div>
    }>
      <ShopPageContent />
    </Suspense>
  )
}
