// /lib/wishlist.ts
import { doc, setDoc, getDoc } from "firebase/firestore"
import { db } from "./firebase"

export async function saveWishlist(uid: string, wishlist: any[]) {
  const userRef = doc(db, "users", uid)
  await setDoc(userRef, { wishlist }, { merge: true })
}

export async function loadWishlist(uid: string) {
  const userRef = doc(db, "users", uid)
  const snap = await getDoc(userRef)
  if (snap.exists()) {
    return snap.data().wishlist || []
  }
  return []
}
