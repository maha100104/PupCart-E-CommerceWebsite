
"use client"

import { SessionProvider } from "next-auth/react"
import { CartProvider } from "@/components/cart-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    
    <SessionProvider>
      <CartProvider>
        <Header/>
        {children}
        <Footer/>
        <Toaster/>
      </CartProvider>
    </SessionProvider>
  )
}
