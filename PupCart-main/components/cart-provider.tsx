// "use client"

// import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
// import { useToast } from "@/components/ui/use-toast"

// export type CartItem = {
//   id: string
//   name: string
//   price: number
//   image: string
//   quantity: number
// }

// type CartContextType = {
//   cartItems: CartItem[]
//   addToCart: (item: Omit<CartItem, "quantity">) => void
//   removeFromCart: (id: string) => void
//   updateQuantity: (id: string, quantity: number) => void
//   clearCart: () => void
//   setCartItems: (items: CartItem[]) => void  // ✅ Add this line
// }

// const CartContext = createContext<CartContextType | undefined>(undefined)

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [cartItems, setCartItems] = useState<CartItem[]>([])
//   const { toast } = useToast()

//   useEffect(() => {
//     const savedCart = localStorage.getItem("cart")
//     if (savedCart) {
//       try {
//         setCartItems(JSON.parse(savedCart))
//       } catch (error) {
//         console.error("Failed to parse cart from localStorage:", error)
//       }
//     }
//   }, [])

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems))
//   }, [cartItems])

//   const addToCart = (item: Omit<CartItem, "quantity">) => {
//     let message = ""

//     setCartItems((prevItems) => {
//       const existingItem = prevItems.find((i) => i.id === item.id)

//       if (existingItem) {
//         message = `${item.name} quantity updated to ${existingItem.quantity + 1}`
//         return prevItems.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//         )
//       } else {
//         message = `${item.name} added to your cart`
//         return [...prevItems, { ...item, quantity: 1 }]
//       }
//     })

//     toast({
//       title: "Item added to cart",
//       description: message,
//     })
//   }

//   const removeFromCart = (id: string) => {
//     setCartItems((prevItems) => {
//       const itemToRemove = prevItems.find((i) => i.id === id)
//       if (itemToRemove) {
//         toast({
//           title: "Item removed",
//           description: `${itemToRemove.name} removed from your cart`,
//         })
//       }
//       return prevItems.filter((item) => item.id !== id)
//     })
//   }

//   const updateQuantity = (id: string, quantity: number) => {
//     if (quantity < 1) {
//       removeFromCart(id)
//       return
//     }

//     setCartItems((prevItems) =>
//       prevItems.map((item) => (item.id === id ? { ...item, quantity } : item))
//     )
//   }

//   const clearCart = () => {
//     setCartItems([])
//     toast({
//       title: "Cart cleared",
//       description: "All items have been removed from your cart",
//     })
//   }

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         clearCart,
//         setCartItems,  // ✅ Provide it here
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   )
// }

// export function useCart() {
//   const context = useContext(CartContext)
//   if (context === undefined) {
//     throw new Error("useCart must be used within a CartProvider")
//   }
//   return context
// }
// "use client"

// import {
//   createContext,
//   useContext,
//   useState,
//   useEffect,
//   type ReactNode,
// } from "react"
// import { useToast } from "@/components/ui/use-toast"
// import { useAuth } from "@/context/AuthContext"
// import { db } from "@/lib/firebase"
// import { doc, getDoc, setDoc } from "firebase/firestore"

// export type CartItem = {
//   id: string
//   name: string
//   price: number
//   image: string
//   quantity: number
// }

// type CartContextType = {
//   cartItems: CartItem[]
//   addToCart: (item: Omit<CartItem, "quantity">) => void
//   removeFromCart: (id: string) => void
//   updateQuantity: (id: string, quantity: number) => void
//   clearCart: () => void
//   setCartItems: (items: CartItem[]) => void
// }

// const CartContext = createContext<CartContextType | undefined>(undefined)

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [cartItems, setCartItems] = useState<CartItem[]>([])
//   const { toast } = useToast()
//   const { user } = useAuth()

//   // ✅ Load cart from Firestore for logged-in user
//   useEffect(() => {
//     const fetchCart = async () => {
//       if (!user) return
//       try {
//         const userRef = doc(db, "users", user.uid)
//         const snap = await getDoc(userRef)
//         if (snap.exists()) {
//           const data = snap.data()
//           if (data.cart) {
//             setCartItems(data.cart)
//           }
//         }
//       } catch (error) {
//         console.error("Failed to fetch cart:", error)
//       }
//     }

//     fetchCart()
//   }, [user])

//   // ✅ Save cart to Firestore (whenever it changes)
//   useEffect(() => {
//     if (!user) return
//     const saveCart = async () => {
//       try {
//         const userRef = doc(db, "users", user.uid)
//         await setDoc(
//           userRef,
//           {
//             email: user.email,
//             cart: cartItems,
//           },
//           { merge: true }
//         )
//       } catch (error) {
//         console.error("Failed to save cart:", error)
//       }
//     }

//     saveCart()
//   }, [cartItems, user])

//   const addToCart = (item: Omit<CartItem, "quantity">) => {
//     let message = ""

//     setCartItems((prevItems) => {
//       const existing = prevItems.find((i) => i.id === item.id)
//       let updatedCart

//       if (existing) {
//         message = `${item.name} quantity updated`
//         updatedCart = prevItems.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//         )
//       } else {
//         message = `${item.name} added to cart`
//         updatedCart = [...prevItems, { ...item, quantity: 1 }]
//       }

//       toast({ title: "Cart updated", description: message })
//       return updatedCart
//     })
//   }

//   const removeFromCart = (id: string) => {
//     setCartItems((prevItems) => {
//       const removed = prevItems.find((i) => i.id === id)
//       toast({
//         title: "Removed from cart",
//         description: removed?.name || "Item",
//       })
//       return prevItems.filter((i) => i.id !== id)
//     })
//   }

//   const updateQuantity = (id: string, quantity: number) => {
//     if (quantity < 1) {
//       removeFromCart(id)
//       return
//     }
//     setCartItems((prev) =>
//       prev.map((i) => (i.id === id ? { ...i, quantity } : i))
//     )
//   }

//   const clearCart = () => {
//     setCartItems([])
//     toast({ title: "Cart cleared" })
//   }

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         clearCart,
//         setCartItems,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   )
// }

// export function useCart() {
//   const context = useContext(CartContext)
//   if (!context) {
//     throw new Error("useCart must be used within CartProvider")
//   }
//   return context
// }

// "use client";

// import { createContext, useContext, useState, useEffect, ReactNode } from "react";
// import { useToast } from "@/components/ui/use-toast";
// import { useAuth } from "@/context/AuthContext";
// import { db } from "@/lib/firebase";
// import { doc, getDoc, setDoc } from "firebase/firestore";

// export type CartItem = {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
// };

// type CartContextType = {
//   cartItems: CartItem[];
//   addToCart: (item: Omit<CartItem, "quantity">) => void;
//   removeFromCart: (id: string) => void;
//   updateQuantity: (id: string, quantity: number) => void;
//   clearCart: () => void;
//   setCartItems: (items: CartItem[]) => void;
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const { toast } = useToast();
//   const { user } = useAuth();

//   // ✅ Fetch from Firestore on user login
//   useEffect(() => {
//     const fetchCart = async () => {
//       if (!user) return;

//       const userRef = doc(db, "users", user.uid);
//       const snap = await getDoc(userRef);

//       if (snap.exists()) {
//         const data = snap.data();
//         if (data.cart) {
//           setCartItems(data.cart);
//         }
//       }
//     };

//     fetchCart();
//   }, [user]);

//   // ✅ Sync to Firestore when cart changes
//   useEffect(() => {
//     const syncToFirebase = async () => {
//       if (!user) return;
//       const userRef = doc(db, "users", user.uid);
//       await setDoc(userRef, {
//         email: user.email,
//         cart: cartItems,
//       }, { merge: true });
//     };

//     if (user) syncToFirebase();
//   }, [cartItems, user]);

//   const addToCart = (item: Omit<CartItem, "quantity">) => {
//     let message = "";

//     setCartItems((prevItems) => {
//       const existing = prevItems.find((i) => i.id === item.id);
//       if (existing) {
//         message = `${item.name} quantity updated to ${existing.quantity + 1}`;
//         return prevItems.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       } else {
//         message = `${item.name} added to your cart`;
//         return [...prevItems, { ...item, quantity: 1 }];
//       }
//     });

//     toast({
//       title: "Item added to cart",
//       description: message,
//     });
//   };

//   const removeFromCart = (id: string) => {
//     setCartItems((prev) => {
//       const removed = prev.find((i) => i.id === id);
//       if (removed) {
//         toast({
//           title: "Item removed",
//           description: `${removed.name} removed from your cart`,
//         });
//       }
//       return prev.filter((i) => i.id !== id);
//     });
//   };

//   const updateQuantity = (id: string, quantity: number) => {
//     if (quantity < 1) {
//       removeFromCart(id);
//       return;
//     }
//     setCartItems((prev) =>
//       prev.map((item) => (item.id === id ? { ...item, quantity } : item))
//     );
//   };

//   const clearCart = () => {
//     setCartItems([]);
//     toast({
//       title: "Cart cleared",
//       description: "All items removed from your cart",
//     });
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         clearCart,
//         setCartItems,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (!context) throw new Error("useCart must be used within CartProvider");
//   return context;
// "use client";

// import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
// import { useToast } from "@/components/ui/use-toast";
// import { useAuth } from "@/context/AuthContext";
// import { db } from "@/lib/firebase";
// import { doc, getDoc, setDoc } from "firebase/firestore";

// export type CartItem = {
//   id: string;
//   name: string;
//   price: number;
//   image: string;
//   quantity: number;
// };

// type CartContextType = {
//   cartItems: CartItem[];
//   addToCart: (item: Omit<CartItem, "quantity">) => void;
//   removeFromCart: (id: string) => void;
//   updateQuantity: (id: string, quantity: number) => void;
//   clearCart: () => void;
//   setCartItems: (items: CartItem[]) => void;
// };

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export function CartProvider({ children }: { children: ReactNode }) {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
//   const { user } = useAuth();
//   const { toast } = useToast();

//   // ✅ Load user-specific cart from Firestore
//   useEffect(() => {
//     const loadCart = async () => {
//       if (!user) return;
//       const ref = doc(db, "users", user.uid);
//       const snap = await getDoc(ref);
//       if (snap.exists()) {
//         const data = snap.data();
//         setCartItems(data.cart || []);
//       }
//     };
//     loadCart();
//   }, [user]);

//   // ✅ Save cart to Firestore
//   useEffect(() => {
//     if (!user) return;
//     const ref = doc(db, "users", user.uid);
//     setDoc(ref, { cart: cartItems }, { merge: true });
//   }, [cartItems, user]);

//   const addToCart = (item: Omit<CartItem, "quantity">) => {
//     setCartItems((prev) => {
//       const exists = prev.find((i) => i.id === item.id);
//       if (exists) {
//         return prev.map((i) =>
//           i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
//         );
//       }
//       return [...prev, { ...item, quantity: 1 }];
//     });

//     toast({
//       title: "Item added",
//       description: `${item.name} added to your cart.`,
//     });
//   };

//   const removeFromCart = (id: string) => {
//     setCartItems((prev) => prev.filter((i) => i.id !== id));
//   };

//   const updateQuantity = (id: string, quantity: number) => {
//     setCartItems((prev) =>
//       prev.map((i) => (i.id === id ? { ...i, quantity } : i))
//     );
//   };

//   const clearCart = () => {
//     setCartItems([]);
//   };

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart,setCartItems, }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// }

// export function useCart() {
//   const context = useContext(CartContext);
//   if (!context) throw new Error("useCart must be used within a CartProvider");
//   return context;
// }

"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/lib/firebase";
import { toast } from "@/hooks/use-toast";
import {
  doc,
  getDoc,
  setDoc,
  onSnapshot,
} from "firebase/firestore";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // ✅ Load cart from Firestore in real-time
  useEffect(() => {
    if (!user) return;

    const ref = doc(db, "users", user.uid);
    const unsubscribe = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        setCartItems(data.cart || []);
      } else {
        setCartItems([]);
      }
    });

    return () => unsubscribe();
  }, [user]);

  // 🔁 Save cart to Firestore whenever it changes
  const saveCart = async (newCart: CartItem[]) => {
    if (!user) return;
    const ref = doc(db, "users", user.uid);
    await setDoc(ref, { cart: newCart }, { merge: true });
  };

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    const exists = cartItems.find((i) => i.id === item.id);
    let updatedCart;

    if (exists) {
      updatedCart = cartItems.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      updatedCart = [...cartItems, { ...item, quantity: 1 }];
    }

    setCartItems(updatedCart);
    saveCart(updatedCart);

    toast({
      title: "Added to Cart!",
      description: `${item.name} has been added to your cart.`,
      variant: "success",
    });
  };

  const removeFromCart = (id: string) => {
    const updatedCart = cartItems.filter((i) => i.id !== id);
    setCartItems(updatedCart);
    saveCart(updatedCart);
  };

  const updateQuantity = (id: string, quantity: number) => {
    const updatedCart = cartItems.map((i) =>
      i.id === id ? { ...i, quantity } : i
    );
    setCartItems(updatedCart);
    saveCart(updatedCart);
  };

  const clearCart = () => {
    setCartItems([]);
    saveCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context)
    throw new Error("useCart must be used within a CartProvider");
  return context;
}

