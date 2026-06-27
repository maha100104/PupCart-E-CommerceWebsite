"use client"

import { Product } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useCart } from "@/components/cart-provider"
import { Loader2 } from "lucide-react"

interface Props {
  product: Product
  className?: string
}

export default function AddToCartButton({ product, className }: Props) {
  const [adding, setAdding] = useState(false)
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    setAdding(true)
    
    // Fake loading delay to show the premium spinner before adding to cart
    setTimeout(() => {
      addToCart(product)
      setAdding(false)
    }, 600)
  }

  return (
    <Button onClick={handleAddToCart} className={className} disabled={adding}>
      {adding ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Adding...
        </>
      ) : (
        "Add to Cart"
      )}
    </Button>
  )
}
