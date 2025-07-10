// "use client";

// import { createContext, useContext, useEffect, useState, ReactNode } from "react";
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { useAuth } from "@/context/AuthContext";
// import { useToast } from "@/components/ui/use-toast";

// type WishlistContextType = {
//   wishlist: string[];
//   addToWishlist: (id: string) => void;
//   removeFromWishlist: (id: string) => void;
// };

// const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// export function WishlistProvider({ children }: { children: ReactNode }) {
//   const { user } = useAuth();
//   const { toast } = useToast();
//   const [wishlist, setWishlist] = useState<string[]>([]);

//   // 1️⃣ Load user's wishlist
//   useEffect(() => {
//     const loadWishlist = async () => {
//       if (!user) return;
//       const ref = doc(db, "users", user.uid);
//       const snap = await getDoc(ref);
//       if (snap.exists()) {
//         const data = snap.data();
//         setWishlist(data.wishlist || []);
//       }
//     };
//     loadWishlist();
//   }, [user]);

//   // 2️⃣ Save wishlist to Firestore
//   useEffect(() => {
//     if (!user) return;
//     const ref = doc(db, "users", user.uid);
//     setDoc(ref, { wishlist }, { merge: true });
//   }, [wishlist, user]);

//   // 3️⃣ Handlers
//   const addToWishlist = (id: string) => {
//     setWishlist((prev) => {
//       if (!prev.includes(id)) {
//         toast({ title: "Added to wishlist ❤️" });
//         return [...prev, id];
//       }
//       return prev;
//     });
//   };

//   const removeFromWishlist = (id: string) => {
//     setWishlist((prev) => prev.filter((pid) => pid !== id));
//     toast({ title: "Removed from wishlist 💔" });
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// }

// export function useWishlist() {
//   const context = useContext(WishlistContext);
//   if (!context) throw new Error("useWishlist must be used inside WishlistProvider");
//   return context;
// }
// ✅ 1. Wishlist Context: wishlist-provider.tsx
// "use client";

// import {
//   createContext,
//   useContext,
//   useEffect,
//   useState,
//   type ReactNode,
// } from "react";
// import { doc, getDoc, setDoc } from "firebase/firestore";
// import { db } from "@/lib/firebase";
// import { useAuth } from "@/context/AuthContext";

// type WishlistContextType = {
//   wishlist: string[];
//   toggleWishlist: (id: string) => void;
//   isWishlisted: (id: string) => boolean;
// };

// const WishlistContext = createContext<WishlistContextType | undefined>(
//   undefined
// );

// export function WishlistProvider({ children }: { children: ReactNode }) {
//   const { user } = useAuth();
//   const [wishlist, setWishlist] = useState<string[]>([]);

//   // 1️⃣ Load wishlist from Firestore
//   useEffect(() => {
//     const loadWishlist = async () => {
//       if (!user) return;
//       const ref = doc(db, "users", user.uid);
//       const snap = await getDoc(ref);
//       if (snap.exists()) {
//         const data = snap.data();
//         setWishlist(data.wishlist || []);
//       }
//     };
//     loadWishlist();
//   }, [user]);

//   // 2️⃣ Save wishlist to Firestore on change
//   useEffect(() => {
//     if (!user) return;
//     const ref = doc(db, "users", user.uid);
//     setDoc(ref, { wishlist }, { merge: true });
//   }, [wishlist, user]);

//   // ✅ 3️⃣ Define handlers
//   const toggleWishlist = (id: string) => {
//     setWishlist((prev) =>
//       prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
//     );
//   };

//   const isWishlisted = (id: string) => wishlist.includes(id);

//   return (
//     <WishlistContext.Provider
//       value={{ wishlist, toggleWishlist, isWishlisted }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// }

// export function useWishlist() {
//   const context = useContext(WishlistContext);
//   if (!context)
//     throw new Error("useWishlist must be used within WishlistProvider");
//   return context;
// }
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/context/AuthContext";

type WishlistContextType = {
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
};

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const [wishlist, setWishlist] = useState<string[]>([]);

  // ⚠️ Track user.uid to avoid sharing wishlist between users
  const [currentUserId, setCurrentUserId] = useState<string | null>(null);

  // 🔄 Load wishlist only when user is available and uid changes
  useEffect(() => {
    const loadWishlist = async () => {
      if (!user) return;

      const uid = user.uid;
      if (uid === currentUserId) return; // Prevent re-fetch if same user

      const ref = doc(db, "users", uid);
      const snap = await getDoc(ref);
      const userData = snap.exists() ? snap.data() : {};

      setWishlist(userData.wishlist || []);
      setCurrentUserId(uid);
    };

    loadWishlist();
  }, [user]);

  // ✅ Save wishlist to Firestore only when user changes it
  useEffect(() => {
    if (!user) return;

    const save = async () => {
      const ref = doc(db, "users", user.uid);
      await setDoc(ref, { wishlist }, { merge: true });
    };

    save();
  }, [wishlist, user]);

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const isWishlisted = (productId: string) => wishlist.includes(productId);

  return (
    <WishlistContext.Provider
      value={{ wishlist, toggleWishlist, isWishlisted }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context)
    throw new Error("useWishlist must be used within WishlistProvider");
  return context;
}
