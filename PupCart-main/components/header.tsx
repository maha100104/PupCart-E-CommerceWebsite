// "use client"

// import Link from "next/link"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { ShoppingCart, Search, Menu, X, User, Heart, PawPrint, Cat, Dog ,Bird} from "lucide-react"
// import { useCart } from "@/components/cart-provider"
// import { cn } from "@/lib/utils"
// import { useAuth } from "@/context/Authcontext" // 👈 import auth hook

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isSearchOpen, setIsSearchOpen] = useState(false)
//   const { cartItems } = useCart()
// const { user } = useAuth(); // 👈 get user from context
// const isLoggedIn = !!user;  // true if user exists

//   const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-16 items-center">
//         <div className="md:hidden">
//           <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             <span className="sr-only">Toggle menu</span>
//           </Button>
//         </div>

//         <div className="flex items-center">
//           <Link href="/" className="flex items-center space-x-2">
//             <PawPrint className="h-6 w-6 text-primary" />
//             <span className="hidden font-bold sm:inline-block text-xl">PupCart</span>
//           </Link>
//         </div>

//         <nav className="hidden md:flex mx-6 items-center space-x-4 lg:space-x-6">
//           <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
//             Home
//           </Link>
//           <Link href="/shop" className="text-sm font-medium transition-colors hover:text-primary">
//             Shop
//           </Link>
//           <Link
//             href="/shop?pet=cat"
//             className="text-sm font-medium transition-colors hover:text-primary flex items-center"
//           >
//             <Cat className="mr-1 h-4 w-4" /> Cats
//           </Link>
//           <Link
//             href="/shop?pet=dog"
//             className="text-sm font-medium transition-colors hover:text-primary flex items-center"
//           >
//             <Dog className="mr-1 h-4 w-4" /> Dogs
//           </Link>
//            <Link
//             href="/shop?pet=bird"
//             className="text-sm font-medium transition-colors hover:text-primary flex items-center"
//           >
//             <Bird className="mr-1 h-4 w-4" /> Birds
//           </Link>
//           <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
//             About Us
//           </Link>
//         </nav>

//         <div className={cn("transition-all duration-200 ease-in-out", isSearchOpen ? "flex-1" : "w-0 overflow-hidden")}>
//           {isSearchOpen && (
//             <div className="relative w-full max-w-md mx-auto">
//               <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input type="search" placeholder="Search products..." className="w-full pl-8 rounded-full" />
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="absolute right-0 top-0"
//                 onClick={() => setIsSearchOpen(false)}
//               >
//                 <X className="h-4 w-4" />
//                 <span className="sr-only">Close search</span>
//               </Button>
//             </div>
//           )}
//         </div>

//         <div className="flex flex-1 items-center justify-end space-x-4">
//           {!isSearchOpen && (
//             <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
//               <Search className="h-5 w-5" />
//               <span className="sr-only">Search</span>
//             </Button>
//           )}

//           <Link href="/wishlist">
//             <Button variant="ghost" size="icon">
//               <Heart className="h-5 w-5" />
//               <span className="sr-only">Wishlist</span>
//             </Button>
//           </Link>

//           {isLoggedIn ? (
//   <Link href="/profile">
//     <Button variant="ghost" size="icon">
//       <User className="h-5 w-5" />
//       <span className="sr-only">Profile</span>
//     </Button>
//   </Link>
// ) : (
//   <>
//     <Link href="/sign-in">
//       <Button variant="ghost" size="sm" className="mr-1">
//         Sign In
//       </Button>
//     </Link>
//     <Link href="/sign-up">
//       <Button variant="default" size="sm">
//         Sign Up
//       </Button>
//     </Link>
//   </>
// )}

//           <div className="md:hidden">
//             <Link href="/sign-in">
//               <Button variant="ghost" size="icon">
//                 <User className="h-5 w-5" />
//                 <span className="sr-only">Account</span>
//               </Button>
//             </Link>
//           </div>

//           <Link href="/cart">
//             <Button variant="ghost" size="icon" className="relative">
//               <ShoppingCart className="h-5 w-5" />
//               {totalItems > 0 && (
//                 <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
//                   {totalItems}
//                 </span>
//               )}
//               <span className="sr-only">Cart</span>
//             </Button>
//           </Link>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
//           <nav className="container grid gap-6 p-6">
//             <Link
//               href="/"
//               className="flex items-center gap-2 text-lg font-semibold"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               href="/shop"
//               className="flex items-center gap-2 text-lg font-semibold"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Shop
//             </Link>
//             <Link
//               href="/shop?category=cat"
//               className="flex items-center gap-2 text-lg font-semibold"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               <Cat className="h-5 w-5" /> Cats
//             </Link>
//             <Link
//               href="/shop?category=dog"
//               className="flex items-center gap-2 text-lg font-semibold"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               <Dog className="h-5 w-5" /> Dogs
//             </Link>
//             <Link
//               href="/about"
//               className="flex items-center gap-2 text-lg font-semibold"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               About Us
//             </Link>
//             <Link
//               href="/sign-in"
//               className="flex items-center gap-2 text-lg font-semibold"
             
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Sign In
//             </Link>
//             <Link
//               href="/sign-up"
//               className="flex items-center gap-2 text-lg font-semibold"
//               onClick={() => setIsMenuOpen(false)}
//             >
//               Sign Up
//             </Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   )
// }
// "use client"
// import { AuthProvider,useAuth } from "@/context/AuthContext"; 
// import Link from "next/link"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import {
//   ShoppingCart,
//   Search,
//   Menu,
//   X,
//   User,
//   Heart,
//   PawPrint,
//   Cat,
//   Dog,
//   Bird,
//   LogOut,
//   Router
// } from "lucide-react"
// import { useCart } from "@/components/cart-provider"
// import { cn } from "@/lib/utils"
// import { useRequireAuth } from "@/utils/requireAuth";
// import { useRouter } from "next/navigation";

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isSearchOpen, setIsSearchOpen] = useState(false)
//   const { cartItems } = useCart()
//   const { user, logout } = useAuth();
//   const isLoggedIn = !!user;
//   const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
//   const { checkAuth } = useRequireAuth();
//   const router = useRouter();

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-16 items-center">
//         <div className="md:hidden">
//           <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             <span className="sr-only">Toggle menu</span>
//           </Button>
//         </div>

//         <div className="flex items-center">
//           <Link href="/" className="flex items-center space-x-2">
//             <PawPrint className="h-6 w-6 text-primary" />
//             <span className="hidden font-bold sm:inline-block text-xl">PupCart</span>
//           </Link>
//         </div>

//         <nav className="hidden  md:flex mx-6 items-center space-x-4 lg:space-x-6">
//           <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
//             Home
//           </Link>
//           <div role="button" className="cursor-pointer flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary" onClick={()=>checkAuth(()=>router.push("/shop"))}> 
//             Shop</div>

//           <div role="button" className="cursor-pointer flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary" onClick={()=>checkAuth(()=>router.push("/shop?pet=cat"))}> 
//             <Cat className="mr-1 h-4 w-4" /> Cats</div>

//           <div role="button" className="cursor-pointer flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary" onClick={()=>checkAuth(()=>router.push("/shop?pet=dog"))}> 
//             <Dog className="mr-1 h-4 w-4" /> Dogs</div>

//             <div role="button" className=" cursor-pointer flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary" onClick={()=>checkAuth(()=>router.push("/shop?pet=bird"))}> 
//             <Bird className="mr-1 h-4 w-4" /> Birds</div>

//           <div role="button" className="text-sm font-medium transition-colors hover:text-primary"
//           onClick={() => router.push("/about")}>About Us</div>

//         </nav>

//         <div className={cn("transition-all duration-200 ease-in-out", isSearchOpen ? "flex-1" : "w-0 overflow-hidden")}> 
//           {isSearchOpen && (
//             <div className="relative w-full max-w-md mx-auto">
//               <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input type="search" placeholder="Search products..." className="w-full pl-8 rounded-full" />
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 className="absolute right-0 top-0"
//                 onClick={() => setIsSearchOpen(false)}
//               >
//                 <X className="h-4 w-4" />
//                 <span className="sr-only">Close search</span>
//               </Button>
//             </div>
//           )}
//         </div>

//         <div className="flex flex-1 items-center justify-end space-x-4">
//           {!isSearchOpen && (
//             <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
//               <Search className="h-5 w-5" />
//               <span className="sr-only">Search</span>
//             </Button>
//           )}

//           <div onClick={() => checkAuth(() => router.push("/wishlist"))}><Heart className="mr-1 h-4 w-4" />
//           <span className="sr-only">Wishlist</span>    </div>


//           {isLoggedIn ? (
//             <>
//               <Link href="/profile">
//                 <img
//                   src={ "https://i.pravatar.cc/40"}
//                   alt="Profile"
//                   className="w-8 h-8 rounded-full border hover:opacity-90"
//                 />
//               </Link>
//               <Button variant="default" size="sm" onClick={logout}>
//                 Log Out
//               </Button>
//             </>
//           ) : (
//             <>
//               <Link href="/sign-in">
//                 <Button variant="ghost" size="sm" className="mr-1 hover:bg-primary hover:text-white">
//                   Sign In
//                 </Button>
//               </Link>
//               <Link href="/sign-up">
//                 <Button variant="default" size="sm">
//                   Sign Up
//                 </Button>
//               </Link>
//             </>
//           )}

//           <div   className="relative" onClick={() => checkAuth(() => router.push("/cart"))}> <ShoppingCart className="mr-1 h-4 w-4" />
//           {totalItems > 0 && (<span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center 
//           rounded-full bg-primary text-xs text-white">{totalItems}</span>)}
//           <span className="sr-only">Cart</span>
//           </div>

//         </div>
//       </div>

//       {isMenuOpen && (
//         <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
//           <nav className="container grid gap-6 p-6">
//             <Link href="/" className="flex items-center gap-2 text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>
//               Home
//             </Link>
//             <Link href="/shop" className="flex items-center gap-2 text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>
//               Shop
//             </Link>
//             <Link href="/shop?category=cat" className="flex items-center gap-2 text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>
//               <Cat className="h-5 w-5" /> Cats
//             </Link>
//             <Link href="/shop?category=dog" className="flex items-center gap-2 text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>
//               <Dog className="h-5 w-5" /> Dogs
//             </Link>
//             <Link href="/about" className="flex items-center gap-2 text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>
//               About Us
//             </Link>
//             {!isLoggedIn && (
//               <>
//                 <Link href="/sign-in" className="flex items-center gap-2 text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>
//                   Sign In
//                 </Link>
//                 <Link href="/sign-up" className="flex items-center gap-2 text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>
//                   Sign Up
//                 </Link>
//               </>
//             )}
//           </nav>
//         </div>
//       )}
//     </header>
//   )
// }
// "use client"

// import Link from "next/link"
// import { useState } from "react"
// import { useRouter } from "next/navigation"
// import {
//   ShoppingCart,
//   Search,
//   Menu,
//   X,
//   User,
//   Heart,
//   PawPrint,
//   Cat,
//   Dog,
//   Bird,
//   LogOut,
// } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { useCart } from "@/components/cart-provider"
// import { cn } from "@/lib/utils"
// import { useAuth } from "@/context/AuthContext"
// import { useRequireAuth } from "@/utils/requireAuth"

// export default function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const [isSearchOpen, setIsSearchOpen] = useState(false)
//   const { cartItems } = useCart()
//   const { user, logout } = useAuth()
//   const isLoggedIn = !!user
//   const { checkAuth } = useRequireAuth()
//   const router = useRouter()

//   const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
//       <div className="container flex h-16 items-center">
//         {/* Mobile Menu Toggle */}
//         <div className="md:hidden">
//           <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
//             {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             <span className="sr-only">Toggle menu</span>
//           </Button>
//         </div>

//         {/* Logo */}
//         <div className="flex items-center">
//           <Link href="/" className="flex items-center space-x-2">
//             <PawPrint className="h-6 w-6 text-primary" />
//             <span className="hidden font-bold sm:inline-block text-xl">PupCart</span>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex mx-6 items-center space-x-4 lg:space-x-6">
//           <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">Home</Link>
//           <div role="button" className="cursor-pointer text-sm font-medium transition-colors hover:text-primary" onClick={() => checkAuth(() => router.push("/shop"))}>Shop</div>
//           <div role="button" className="cursor-pointer flex items-center text-sm font-medium transition-colors hover:text-primary" onClick={() => checkAuth(() => router.push("/shop?pet=cat"))}><Cat className="mr-1 h-4 w-4" /> Cats</div>
//           <div role="button" className="cursor-pointer flex items-center text-sm font-medium transition-colors hover:text-primary" onClick={() => checkAuth(() => router.push("/shop?pet=dog"))}><Dog className="mr-1 h-4 w-4" /> Dogs</div>
//           <div role="button" className="cursor-pointer flex items-center text-sm font-medium transition-colors hover:text-primary" onClick={() => checkAuth(() => router.push("/shop?pet=bird"))}><Bird className="mr-1 h-4 w-4" /> Birds</div>
//           <div role="button" className="text-sm font-medium transition-colors hover:text-primary" onClick={() => router.push("/about")}>About Us</div>
//         </nav>

//         {/* Search Bar */}
//         <div className={cn("transition-all duration-200 ease-in-out", isSearchOpen ? "flex-1" : "w-0 overflow-hidden")}>
//           {isSearchOpen && (
//             <div className="relative w-full max-w-md mx-auto">
//               <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
//               <Input type="search" placeholder="Search products..." className="w-full pl-8 rounded-full" />
//               <Button variant="ghost" size="icon" className="absolute right-0 top-0" onClick={() => setIsSearchOpen(false)}>
//                 <X className="h-4 w-4" />
//                 <span className="sr-only">Close search</span>
//               </Button>
//             </div>
//           )}
//         </div>

//         {/* Right Icons */}
//         <div className="flex flex-1 items-center justify-end space-x-4">
//           {!isSearchOpen && (
//             <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
//               <Search className="h-5 w-5" />
//               <span className="sr-only">Search</span>
//             </Button>
//           )}

//           {/* Wishlist */}
//           <div role="button" onClick={() => checkAuth(() => router.push("/wishlist"))}>
//             <Heart className="h-5 w-5 hover:text-primary" />
//             <span className="sr-only">Wishlist</span>
//           </div>

//           {/* Auth/Profile */}
//           {isLoggedIn ? (
//             <>
//               <Link href="/profile">
//                 <img src="https://i.pravatar.cc/40" alt="Profile" className="w-8 h-8 rounded-full border hover:opacity-90" />
//               </Link>
//               <Button variant="default" size="sm" onClick={logout}>Log Out</Button>
//             </>
//           ) : (
//             <>
//               <Link href="/sign-in">
//                 <Button variant="ghost" size="sm" className="mr-1 hover:bg-primary hover:text-white">Sign In</Button>
//               </Link>
//               <Link href="/sign-up">
//                 <Button variant="default" size="sm">Sign Up</Button>
//               </Link>
//             </>
//           )}

//           {/* Cart */}
//           <div className="relative cursor-pointer" onClick={() => checkAuth(() => router.push("/cart"))}>
//             <ShoppingCart className="h-5 w-5" />
//             {isLoggedIn && totalItems > 0 && (
//   <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center 
//   rounded-full bg-primary text-xs text-white">{totalItems}</span>
// )}

//             <span className="sr-only">Cart</span>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
//           <nav className="container grid gap-6 p-6">
//             <Link href="/" className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>Home</Link>
//             <div role="button" onClick={() => { checkAuth(() => router.push("/shop")); setIsMenuOpen(false); }}>Shop</div>
//             <div role="button" onClick={() => { checkAuth(() => router.push("/shop?pet=cat")); setIsMenuOpen(false); }} className="flex items-center gap-2 text-lg font-semibold"><Cat className="h-5 w-5" /> Cats</div>
//             <div role="button" onClick={() => { checkAuth(() => router.push("/shop?pet=dog")); setIsMenuOpen(false); }} className="flex items-center gap-2 text-lg font-semibold"><Dog className="h-5 w-5" /> Dogs</div>
//             <div role="button" onClick={() => { checkAuth(() => router.push("/shop?pet=bird")); setIsMenuOpen(false); }} className="flex items-center gap-2 text-lg font-semibold"><Bird className="h-5 w-5" /> Birds</div>
//             <Link href="/about" className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>About Us</Link>

//             {!isLoggedIn && (
//               <>
//                 <Link href="/sign-in" className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
//                 <Link href="/sign-up" className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
//               </>
//             )}
//           </nav>
//         </div>
//       )}
//     </header>
//   )
// }
"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import {
  ShoppingCart,
  Search,
  Menu,
  X,
  User,
  Heart,
  PawPrint,
  Cat,
  Dog,
  Bird,
  Droplet,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/components/cart-provider"
import { cn } from "@/lib/utils"
import { useAuth } from "@/context/AuthContext"
import { useRequireAuth } from "@/utils/requireAuth"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { cartItems } = useCart()
  const { user, signOut } = useAuth()
  const isLoggedIn = !!user
  const { checkAuth } = useRequireAuth()
  const router = useRouter()

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)
  const [showDropdown, setShowDropdown] = useState(false);


  const profileImage = user?.photoURL || "https://i.pravatar.cc/40"

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <PawPrint className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block text-xl">PupCart</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex mx-6 items-center space-x-4 lg:space-x-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">Home</Link>
          <div role="button" className="cursor-pointer text-sm font-medium transition-colors hover:text-primary" onClick={() => checkAuth(() => router.push("/shop"))}>Shop</div>
          <div role="button" className="cursor-pointer flex items-center text-sm font-medium transition-colors hover:text-primary" onClick={() => checkAuth(() => router.push("/shop?pet=cat"))}><Cat className="mr-1 h-4 w-4" /> Cats</div>
          <div role="button" className="cursor-pointer flex items-center text-sm font-medium transition-colors hover:text-primary" onClick={() => checkAuth(() => router.push("/shop?pet=dog"))}><Dog className="mr-1 h-4 w-4" /> Dogs</div>
          <div role="button" className="cursor-pointer flex items-center text-sm font-medium transition-colors hover:text-primary" onClick={() => checkAuth(() => router.push("/shop?pet=bird"))}><Bird className="mr-1 h-4 w-4" /> Birds</div>
          <div role="button" className="cursor-pointer flex items-center text-sm font-medium transition-colors hover:text-primary" onClick={() => checkAuth(() => router.push("/shop?pet=aquaticpets"))}><Droplet className="mr-1 h-4 w-4" />Aquatic</div>
          <div role="button" className="text-sm font-medium transition-colors hover:text-primary" onClick={() => router.push("/about")}>About Us</div>
        </nav>

        {/* Search Bar
        <div className={cn("transition-all duration-200 ease-in-out", isSearchOpen ? "flex-1" : "w-0 overflow-hidden")}>
          {isSearchOpen && (
            <div className="relative w-full max-w-md mx-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search products..." className="w-full pl-8 rounded-full" />
              <Button variant="ghost" size="icon" className="absolute right-0 top-0" onClick={() => setIsSearchOpen(false)}>
                <X className="h-4 w-4" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          )}
        </div> */}
        {/* Search Bar */}
<div className={cn("transition-all duration-200 ease-in-out", isSearchOpen ? "flex-1" : "w-0 overflow-hidden")}>
  {isSearchOpen && (
    <div className="relative w-full max-w-md mx-auto">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search products..."
        className="w-full pl-8 rounded-full"
        onFocus={() => setShowDropdown(true)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
      />
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-0"
        onClick={() => {
          setIsSearchOpen(false);
          setShowDropdown(false);
        }}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close search</span>
      </Button>

      {/* Dropdown Category List */}
      {showDropdown && (
        <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-md">
          {[
            { label: "Cats", pet: "cat", icon: <Cat className="h-4 w-4 mr-2" /> },
            { label: "Dogs", pet: "dog", icon: <Dog className="h-4 w-4 mr-2" /> },
            { label: "Birds", pet: "bird", icon: <Bird className="h-4 w-4 mr-2" /> },
            { label: "Aquatic", pet: "aquaticpets", icon: <Droplet className="h-4 w-4 mr-2" /> },
          ].map((item) => (
            <div
              key={item.pet}
              onMouseDown={() => {
                checkAuth(() => router.push(`/shop?pet=${item.pet}`));
                setIsSearchOpen(false);
              }}
              className="px-4 py-2 flex items-center text-sm hover:bg-gray-100 cursor-pointer"
            >
              {item.icon}
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )}
</div>


        {/* Right Icons */}
        <div className="flex flex-1 items-center justify-end space-x-4">
          {!isSearchOpen && (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          {/* Wishlist */}
          <div role="button" onClick={() => checkAuth(() => router.push("/wishlist"))}>
            <Heart className="h-5 w-5 hover:text-primary" />
            <span className="sr-only">Wishlist</span>
          </div>

          {/* Auth/Profile */}
          {isLoggedIn ? (
            <>
              <Link href="/profile">
                <img
                  src={user?.photoURL ||  `https://ui-avatars.com/api/?name=${user?.displayName}&background=random`}
                  alt="Profile"
                  className="w-8 h-8 rounded-full border hover:opacity-90"
                />
              </Link>
              <Button variant="default" size="sm" onClick={() => { signOut() 
              router.push("/sign-in")}}>Log Out
              </Button>

            </>
          ) : (
            <>
              <Link href="/sign-in">
                <Button variant="ghost" size="sm" className="mr-1 hover:bg-primary hover:text-white">Sign In</Button>
              </Link>
              <Link href="/sign-up">
                <Button variant="default" size="sm">Sign Up</Button>
              </Link>
            </>
          )}

          {/* Cart */}
          <div className="relative cursor-pointer" onClick={() => checkAuth(() => router.push("/cart"))}>
            <ShoppingCart className="h-5 w-5" />
            {isLoggedIn && totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-white">
                {totalItems}
              </span>
            )}
            <span className="sr-only">Cart</span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-background md:hidden">
          <nav className="container grid gap-6 p-6">
            <Link href="/" className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <div role="button" onClick={() => { checkAuth(() => router.push("/shop")); setIsMenuOpen(false); }}>Shop</div>
            <div role="button" onClick={() => { checkAuth(() => router.push("/shop?pet=cat")); setIsMenuOpen(false); }} className="flex items-center gap-2 text-lg font-semibold"><Cat className="h-5 w-5" /> Cats</div>
            <div role="button" onClick={() => { checkAuth(() => router.push("/shop?pet=dog")); setIsMenuOpen(false); }} className="flex items-center gap-2 text-lg font-semibold"><Dog className="h-5 w-5" /> Dogs</div>
            <div role="button" onClick={() => { checkAuth(() => router.push("/shop?pet=bird")); setIsMenuOpen(false); }} className="flex items-center gap-2 text-lg font-semibold"><Bird className="h-5 w-5" /> Birds</div>
            <div role="button" onClick={() => { checkAuth(() => router.push("/shop?pet=aquaticpets")); setIsMenuOpen(false); }} className="flex items-center gap-2 text-lg font-semibold"><Droplet className="h-5 w-5" /> Aquatic</div>
            <Link href="/about" className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>About Us</Link>

            {!isLoggedIn && (
              <>
                <Link href="/sign-in" className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>Sign In</Link>
                <Link href="/sign-up" className="text-lg font-semibold" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
