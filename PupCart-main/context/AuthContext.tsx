// "use client"

// import React, { createContext, useContext, useEffect, useState, ReactNode } from "react"

// interface User {
//   id: string
//   name: string
//   email: string
// }

// interface AuthContextType {
//   user: User | null
//   login: (email: string, password: string) => void
//   logout: () => void
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined)

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null)

//   useEffect(() => {
//     // Check for saved user in localStorage on load
//     const storedUser = localStorage.getItem("user")
//     if (storedUser) {
//       setUser(JSON.parse(storedUser))
//     }
//   }, [])

//   const login = (email: string, password: string) => {
//     // Dummy login (replace with real API later)
//     const fakeUser: User = {
//       id: "1",
//       name: "Maha",
//       email,
//     }
//     setUser(fakeUser)
//     localStorage.setItem("user", JSON.stringify(fakeUser))
//   }

//   const logout = () => {
//     setUser(null)
//     localStorage.removeItem("user")
//   }

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext)
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider")
//   }
//   return context
// }
// "use client";

// import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// interface AuthContextType {
//   user: any;
//   login: (userData: any) => void;
//   logout: () => void;
//   signUp: (data: { email: string; password: string }) => Promise<void>;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<any>(null);

//   // Load user from localStorage on initial mount
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   // Login function
//   const login = (userData: any) => {
//     setUser(userData);
//     localStorage.setItem("user", JSON.stringify(userData));
//   };

//   // Logout function
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//   };

//   // Sign-up function (mock for demo)
//   const signUp = async ({ email, password }: { email: string; password: string }) => {
//     // Simulate server delay (optional)
//     await new Promise((resolve) => setTimeout(resolve, 500));

//     const newUser = { email };
//     setUser(newUser);
//     localStorage.setItem("user", JSON.stringify(newUser));
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, signUp }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Custom hook to use auth context
// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within AuthProvider");
//   }
//   return context;
// // };
// "use client";

// import { createContext, useContext, useState, useEffect, ReactNode } from "react";
// import { signInWithGoogle,auth } from "@/lib/firebase"; // ✅ Make sure path is correct
// import { onAuthStateChanged, signOut, User } from "firebase/auth";

// interface AuthContextType {
//   user: User | null;
//   login: (userData: any) => void;
//   logout: () => void;
//   signUp: (data: { email: string; password: string }) => Promise<void>;
//   signInWithGoogle: () => Promise<void>;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);

//   // Listen to Firebase auth state changes
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
//       setUser(firebaseUser);
//       if (firebaseUser) {
//         localStorage.setItem("user", JSON.stringify(firebaseUser));
//       } else {
//         localStorage.removeItem("user");
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const login = (userData: any) => {
//     setUser(userData);
//     localStorage.setItem("user", JSON.stringify(userData));
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("user");
//     signOut(auth);
//   };

//   const signUp = async ({ email, password }: { email: string; password: string }) => {
//     // Just for demo; this is a mock
//     const newUser = { email };
//     setUser(newUser as any);
//     localStorage.setItem("user", JSON.stringify(newUser));
//   };

//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithGoogle();
//     } catch (error) {
//       console.error("Google Sign-In Error:", error);
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, login, logout, signUp, signInWithGoogle: handleGoogleSignIn }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within AuthProvider");
//   }
//   return context;
// };
// "use client"

// import { createContext, useContext, useState, useEffect, ReactNode } from "react"
// import { signInWithGoogle, auth } from "@/lib/firebase"
// import { onAuthStateChanged, signOut, User } from "firebase/auth"

// interface SimpleUser {
//   uid: string
//   email: string | null
//   displayName: string | null
//   photoURL: string | null
// }

// interface AuthContextType {
//   user: SimpleUser | null
//   login: (userData: SimpleUser) => void
//   logout: () => void
//   signUp: (data: { email: string; password: string }) => Promise<void>
//   signInWithGoogle: () => Promise<void>
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined)

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<SimpleUser | null>(null)

//   // Load user from localStorage on mount
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user")
//     if (storedUser) {
//       setUser(JSON.parse(storedUser))
//     }
//   }, [])

//   // Listen for Firebase auth changes
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (firebaseUser: User | null) => {
//       if (firebaseUser) {
//         const formattedUser: SimpleUser = {
//           uid: firebaseUser.uid,
//           email: firebaseUser.email,
//           displayName: firebaseUser.displayName,
//           photoURL: firebaseUser.photoURL,
//         }
//         setUser(formattedUser)
//         localStorage.setItem("user", JSON.stringify(formattedUser))
//         console.log("✅ Auth Updated:", formattedUser)
//       } else {
//         setUser(null)
//         localStorage.removeItem("user")
//         console.log("🚫 User signed out")
//       }
//     })

//     return () => unsubscribe()
//   }, [])

//   const login = (userData: SimpleUser) => {
//     setUser(userData)
//     localStorage.setItem("user", JSON.stringify(userData))
//   }

//   const logout = () => {
//     setUser(null)
//     localStorage.removeItem("user")
//     signOut(auth)
//   }

//   const signUp = async ({ email, password }: { email: string; password: string }) => {
//     // Mock for demo; replace with real logic
//     const newUser: SimpleUser = {
//       uid: "mock-id-123",
//       email,
//       displayName: null,
//       photoURL: null,
//     }
//     setUser(newUser)
//     localStorage.setItem("user", JSON.stringify(newUser))
//   }

//   const handleGoogleSignIn = async () => {
//     try {
//       await signInWithGoogle()
//       // User will be set by onAuthStateChanged
//     } catch (error) {
//       console.error("❌ Google Sign-In Error:", error)
//     }
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         login,
//         logout,
//         signUp,
//         signInWithGoogle: handleGoogleSignIn,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => {
//   const context = useContext(AuthContext)
//   if (!context) {
//     throw new Error("useAuth must be used within AuthProvider")
//   }
//   return context
// }

// "use client"
// import { createContext, useContext, useState, useEffect, ReactNode } from "react"
// import { auth, signInWithGoogle } from "@/lib/firebase"
// import { onAuthStateChanged, signOut, User } from "firebase/auth"

// interface SimpleUser { uid: string; email?: string | null; displayName?: string | null; photoURL?: string | null; }
// interface AuthContextType {
//   user: SimpleUser | null
//   loading: boolean
//   logout: () => void
//   signInWithGoogle: () => Promise<User> // <-- Change here from void to User
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined)

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<SimpleUser | null>(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     return onAuthStateChanged(auth, (u) => {
//       if (u) {
//         setUser({ uid: u.uid, email: u.email, displayName: u.displayName, photoURL: u.photoURL })
//       } else {
//         setUser(null)
//       }
//       setLoading(false)
//     })
//   }, [])

//   const logout = () => {
//     signOut(auth)
//     setUser(null)
//   }

//   return (
//     <AuthContext.Provider value={{ user, loading, logout, signInWithGoogle }}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export const useAuth = () => {
//   const ctx = useContext(AuthContext)
//   if (!ctx) throw new Error("useAuth must be used within AuthProvider")
//   return ctx
// }
// context/AuthContext.tsx
// "use client";

// import { createContext, useContext, useEffect, useState, ReactNode } from "react";
// import { auth, googleProvider } from "@/lib/firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut as firebaseSignOut,
//   onAuthStateChanged,
//   User,
// } from "firebase/auth";

// interface AuthContextType {
//   user: SimpleUser | null;
//   signUp: (data: { email: string; password: string }) => Promise<void>;
//   signIn: (data: { email: string; password: string }) => Promise<void>;
//   signInWithGoogle: () => Promise<void>;
//   signOut: () => Promise<void>; // ✅ NOT logout
// }

// interface SimpleUser {
//   uid: string;
//   email?: string | null;
//   displayName?: string | null;
//   photoURL?: string | null;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<SimpleUser | null>(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
//       if (firebaseUser) {
//         const { uid, email, displayName, photoURL } = firebaseUser;
//         setUser({ uid, email, displayName, photoURL });
//       } else {
//         setUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const signUp = async ({ email, password }: { email: string; password: string }) => {
//     await createUserWithEmailAndPassword(auth, email, password);
//   };

//   const signIn = async ({ email, password }: { email: string; password: string }) => {
//     await signInWithEmailAndPassword(auth, email, password);
//   };

//   const signInWithGoogle = async () => {
//     await signInWithPopup(auth, googleProvider);
//   };

//   const signOut = async () => {
//     await firebaseSignOut(auth);
//   };

//   return (
//     <AuthContext.Provider value={{ user, signUp, signIn, signInWithGoogle, signOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };
// context/AuthContext.tsx
// ✅ context/AuthContext.tsx
// "use client";

// import { createContext, useContext, useEffect, useState, ReactNode } from "react";
// import { auth, googleProvider } from "@/lib/firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   onAuthStateChanged,
//   signOut as firebaseSignOut,
//   User,
//   signInWithEmailAndPassword,
//   UserCredential
// } from "firebase/auth";
// import { sendConfirmationEmail } from "@/lib/send-confirmationMail";
// interface SimpleUser {
//   uid: string;
//   email?: string | null;
//   displayName?: string | null;
//   photoURL?: string | null;
// }

// interface AuthContextType {
//   user: SimpleUser | null;
//  signUp: (data: { email: string; password: string }) => Promise<UserCredential>;

//   signInWithGoogle: () => Promise<void>; // ✅ change to void if you're not returning UserCredential
//   signOut: () => Promise<void>;
//   signIn: (data: { email: string; password: string }) => Promise<void>;
// }



// const AuthContext = createContext<AuthContextType | undefined>(undefined);
// const signIn = async ({ email, password }: { email: string; password: string }) => {
//   await signInWithEmailAndPassword(auth, email, password);
// };


// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<SimpleUser | null>(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (firebaseUser: User | null) => {
//       if (firebaseUser) {
//         const { uid, email, displayName, photoURL } = firebaseUser;
//         setUser({ uid, email, displayName, photoURL });
//       } else {
//         setUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const signUp = async ({ email, password }: { email: string; password: string }): Promise<UserCredential> => {
//   return await createUserWithEmailAndPassword(auth, email, password); // ✅ return result
// };


//   const signInWithGoogle = async () => {
//   const result = await signInWithPopup(auth, googleProvider);
//   const email = result.user.email;
//   if (email) {
//     await sendConfirmationEmail(email);
//   }
// };


//   const signOut = async () => {
//     await firebaseSignOut(auth);
//   };

//   return (
//     <AuthContext.Provider value={{ user, signIn,signUp, signInWithGoogle, signOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within an AuthProvider");
//   return context;
// };
// "use client";

// import { createContext, useContext, useEffect, useState, ReactNode } from "react";
// import { auth, googleProvider } from "@/lib/firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithPopup,
//   onAuthStateChanged,
//   signOut as firebaseSignOut,
//   signInWithEmailAndPassword,
//   User,
//   UserCredential,
// } from "firebase/auth";
// import emailjs from "@emailjs/browser";
// interface SimpleUser {
//   uid: string;
//   email?: string | null;
//   displayName?: string | null;
//   photoURL?: string | null;
// }

// interface AuthContextType {
//   user: SimpleUser | null;
//   signUp: (data: { email: string; password: string }) => Promise<UserCredential>; // ✅ updated here
//   signInWithGoogle: () => Promise<UserCredential>;
//   signOut: () => Promise<void>;
//   signIn: (data: { email: string; password: string }) => Promise<UserCredential>;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<SimpleUser | null>(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (firebaseUser: User | null) => {
//       if (firebaseUser) {
//         const { uid, email, displayName, photoURL } = firebaseUser;
//         setUser({ uid, email, displayName, photoURL });
//       } else {
//         setUser(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   const signUp = async ({ email, password }: { email: string; password: string }): Promise<UserCredential> => {
//     return await createUserWithEmailAndPassword(auth, email, password);
//   };

//   const signIn = async ({ email, password }: { email: string; password: string }): Promise<UserCredential> => {
//     return await signInWithEmailAndPassword(auth, email, password);
//   };

//   const signInWithGoogle = async () => {
//   const result = await signInWithPopup(auth, googleProvider);
//   const email = result.user.email;

//   // ✅ Send email notification using EmailJS
//   await emailjs.send(
//     "service_dk61pco",       // Your EmailJS Service ID
//     "template_ke8ughk",      // Your EmailJS Template ID
//     { email },               // Parameters sent to template
//     "PIDm5lMmS4JSf3G6A"      // Your EmailJS Public Key
//   );
// };

//   const signOut = async () => {
//     await firebaseSignOut(auth);
//   };

//   return (
//     <AuthContext.Provider value={{ user, signIn, signUp, signInWithGoogle, signOut }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) throw new Error("useAuth must be used within an AuthProvider");
//   return context;
// };
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
  signUp: (data: { email: string; password: string }) => Promise<UserCredential>; // ✅ updated here
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

  // ✅ Send welcome email using EmailJS
  await emailjs.send(
    "service_dk61pco",       // Your EmailJS Service ID
    "template_ke8ughk",      // Your EmailJS Template ID
    { email },               // Email template parameters
    "PIDm5lMmS4JSf3G6A"      // Your EmailJS Public Key
  );

  return result;
};


  const signIn = async ({ email, password }: { email: string; password: string }): Promise<UserCredential> => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = async (): Promise<UserCredential> => {
  const result = await signInWithPopup(auth, googleProvider);
  const email = result.user.email;

  // Type assertion to access _tokenResponse
  const tokenResponse = (result as any)._tokenResponse;

  // Send email only for newly created users
  if (tokenResponse?.isNewUser && email) {
    await emailjs.send(
      "service_dk61pco",     // ✅ your service ID
      "template_ke8ughk",    // ✅ your template ID
      { email },             // ✅ template variables
      "PIDm5lMmS4JSf3G6A"     // ✅ your public key
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
