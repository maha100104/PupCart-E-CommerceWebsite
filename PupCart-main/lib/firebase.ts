// lib/firebase.ts
// import { initializeApp } from "firebase/app"
// import { getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth"
// import { getFirestore } from "firebase/firestore"

// const firebaseConfig = {
//   apiKey: "AIzaSyAOEHYWD3VprSyJ5ySKFeZdI_rCg14tGA0",
//   authDomain: "pet-ecommerce-51e31.firebaseapp.com",
//   projectId: "pet-ecommerce-51e31",
//   storageBucket: "pet-ecommerce-51e31.firebasestorage.app",
//   messagingSenderId: "266559813942",
//   appId: "1:266559813942:web:df3e7b7259abbfad18db97"
// };

// // ✅ Initialize app
// const app = initializeApp(firebaseConfig);

// // ✅ Firebase services
// const auth = getAuth(app);
// const db = getFirestore(app);

// // ✅ Google Auth Provider
// const provider = new GoogleAuthProvider();

// // ✅ Export signInWithGoogle function
// const signInWithGoogle = async () => {
//   try {
//     const result = await signInWithPopup(auth, provider);
//     return result.user; // Optional: return user
//   } catch (error) {
//     console.error("Google sign-in failed", error);
//     throw error;
//   }
// };

// export { auth, db, signInWithGoogle }; // ✅ Export everything needed
// lib/firebase.ts
// ✅ Import Firebase functions
// 1. firebase.ts (already configured)
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, FacebookAuthProvider, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyAOEHYWD3VprSyJ5ySKFeZdI_rCg14tGA0",
//   authDomain: "pet-ecommerce-51e31.firebaseapp.com",
//   projectId: "pet-ecommerce-51e31",
//   storageBucket: "pet-ecommerce-51e31.appspot.com",
//   messagingSenderId: "266559813942",
//   appId: "1:266559813942:web:df3e7b7259abbfad18db97",
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();
// googleProvider.setCustomParameters({
//   prompt: "select_account", // ✅ this forces the account picker
// });
// const facebookProvider = new FacebookAuthProvider();
// export const db = getFirestore(app);

// export { auth, googleProvider, facebookProvider, RecaptchaVerifier, signInWithPhoneNumber };

// 
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyAOEHYWD3VprSyJ5ySKFeZdI_rCg14tGA0",
//   authDomain: "pet-ecommerce-51e31.firebaseapp.com",
//   projectId: "pet-ecommerce-51e31",
//   storageBucket: "pet-ecommerce-51e31.appspot.com",
//   messagingSenderId: "492110481638",
//   appId: "1:266559813942:web:df3e7b7259abbfad18db97",
// };

// // Initialize Firebase app
// const app = initializeApp(firebaseConfig);

// // Firebase Authentication
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

// // Firestore Database
// const db = getFirestore(app);

// export { app, auth, googleProvider, db };

import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // ✅ ADD THIS

const firebaseConfig = {
  apiKey: "AIzaSyAOEHYWD3VprSyJ5ySKFeZdI_rCg14tGA0",
  authDomain: "pet-ecommerce-51e31.firebaseapp.com",
  projectId: "pet-ecommerce-51e31",
  storageBucket: "pet-ecommerce-51e31.appspot.com",
  messagingSenderId: "266559813942",
  appId: "1:266559813942:web:df3e7b7259abbfad18db97",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

const facebookProvider = new FacebookAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app); // ✅ ADD THIS

export {
  auth,
  googleProvider,
  facebookProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  db,
  storage, // ✅ EXPORT THIS
};