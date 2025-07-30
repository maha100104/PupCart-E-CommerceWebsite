
"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { auth, googleProvider } from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  onAuthStateChanged,
  signOut as firebaseSignOut,
  signInWithEmailAndPassword,
  User,
  UserCredential,
} from "firebase/auth";
import emailjs from "@emailjs/browser";
interface SimpleUser {
  uid: string;
  email?: string | null;
  displayName?: string | null;
  photoURL?: string | null;
}

interface AuthContextType {
  user: SimpleUser | null;
  signUp: (data: { email: string; password: string }) => Promise<UserCredential>; 
  signInWithGoogle: () => Promise<UserCredential>;
  signOut: () => Promise<void>;
  signIn: (data: { email: string; password: string }) => Promise<UserCredential>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<SimpleUser | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser: User | null) => {
      if (firebaseUser) {
        const { uid, email, displayName, photoURL } = firebaseUser;
        setUser({ uid, email, displayName, photoURL });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const signUp = async ({ email, password }: { email: string; password: string }): Promise<UserCredential> => {
  const result = await createUserWithEmailAndPassword(auth, email, password);

  
  await emailjs.send(
    "service_dk61pco",       
    "template_ke8ughk",      
    { email },               
    "PIDm5lMmS4JSf3G6A"      
  );

  return result;
};


  const signIn = async ({ email, password }: { email: string; password: string }): Promise<UserCredential> => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = async (): Promise<UserCredential> => {
  const result = await signInWithPopup(auth, googleProvider);
  const email = result.user.email;

  
  const tokenResponse = (result as any)._tokenResponse;

  
  if (tokenResponse?.isNewUser && email) {
    await emailjs.send(
      "service_dk61pco",     
      "template_ke8ughk",    
      { email },             
      "PIDm5lMmS4JSf3G6A"     
    );
  }

  return result;
};



  const signOut = async () => {
    await firebaseSignOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
























































































































































































































































































































































































































































































































































































































