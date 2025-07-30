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