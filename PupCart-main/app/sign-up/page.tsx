// "use client"

// import type React from "react"

// import Link from "next/link"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { PawPrint, Lock } from "lucide-react"
// import { Metadata } from "next"
// // export const metadata:Metadata={
// //   title:{
// //     absolute:"PupCart-Sign Out Page"
// //   }
// // }

// export default function SignUpPage() {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [confirmPassword, setConfirmPassword] = useState("")
//   const [isLoading, setIsLoading] = useState(false)

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsLoading(true)

//     // Simulate account creation
//     setTimeout(() => {
//       setIsLoading(false)
//       // Redirect to home page after successful signup
//       window.location.href = "/"
//     }, 1500)
//   }

//   return (
//     <div className="container flex items-center justify-center min-h-[calc(100vh-200px)] px-4 py-12">
//       <Card className="w-full max-w-md">
//         <CardHeader className="space-y-1 text-center">
//           <div className="flex justify-center mb-2">
//             <PawPrint className="h-10 w-10 text-primary" />
//           </div>
//           <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
//           <CardDescription>Enter your information to create an account</CardDescription>
//         </CardHeader>
//         <form onSubmit={handleSubmit}>
//           <CardContent className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="name">Full Name</Label>
//               <Input id="name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="name@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <p className="text-xs text-muted-foreground">
//                 Password must be at least 8 characters long and include a number and a special character.
//               </p>
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="confirmPassword">Confirm Password</Label>
//               <Input
//                 id="confirmPassword"
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="flex items-center space-x-2">
//               <input type="checkbox" id="terms" className="rounded border-gray-300" required />
//               <Label htmlFor="terms" className="text-sm font-normal">
//                 I agree to the{" "}
//                 <Link href="/terms" className="text-primary hover:underline">
//                   Terms of Service
//                 </Link>{" "}
//                 and{" "}
//                 <Link href="/privacy" className="text-primary hover:underline">
//                   Privacy Policy
//                 </Link>
//               </Label>
//             </div>
//           </CardContent>
//           <CardFooter className="flex flex-col">
//             <Button className="w-full" type="submit" disabled={isLoading}>
//               {isLoading ? "Creating account..." : "Create Account"}
//             </Button>
//             <div className="mt-4 text-center text-sm">
//               Already have an account?{" "}
//               <Link href="/sign-in" className="text-primary hover:underline">
//                 Sign in
//               </Link>
//             </div>
//             <div className="relative mt-6">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t"></div>
//               </div>
//               <div className="relative flex justify-center text-xs uppercase">
//                 <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
//               </div>
//             </div>
//             <div className="mt-6 grid grid-cols-2 gap-4">
//               <Button variant="outline" type="button">
//                 Google
//               </Button>
//               <Button variant="outline" type="button">
//                 Facebook
//               </Button>
//             </div>
//             <div className="mt-6 flex items-center justify-center">
//               <Lock className="h-4 w-4 text-muted-foreground mr-1" />
//               <span className="text-xs text-muted-foreground">Your information is securely encrypted</span>
//             </div>
//           </CardFooter>
//         </form>
//       </Card>
//     </div>
//   )
// }
// app/signin/page.tsx
// "use client";

// import { useState,useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/context/AuthContext";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { toast } from "@/components/ui/use-toast";

// export default function SignUpPage() {
//   useEffect(() => {
//       document.title = "PupCart - Sign-Up Page";
//     }, [])
//   const { signUp } = useAuth();
//   const router = useRouter();
//  const[name,setName]=useState("")
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [loading, setLoading] = useState(false);

//   const handleSignUp = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await signUp({ email, password });
//       toast({ title: "Signup successful", description: "You are now logged in." });
//       router.push("/");
//     } catch (error: any) {
//       toast({ title: "Signup failed", description: error.message || "Please try again." });
//     } finally {
//       setLoading(false);
//     }
//   };
//   const handleSubmit = (e: React.FormEvent) => {
//       e.preventDefault();
//       alert("Signed In successfully!");
      
//     };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4">
//       <form onSubmit={handleSignUp} className="bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-6">
//         <h2 className="text-2xl font-bold text-center">Create Account</h2>
//         <div className="space-y-2">
//           <label className="block text-sm font-medium">Name</label>
//           <Input
//             type="Name"
//             required
            
//             onChange={(e) => setName(e.target.value)}
//             placeholder="john"
//           />
//         </div>

//         <div className="space-y-2">
//           <label className="block text-sm font-medium">Email</label>
//           <Input
//             type="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="you@example.com"
//           />
//         </div>

//         <div className="space-y-2">
//           <label className="block text-sm font-medium">Password</label>
//           <Input
//             type="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="••••••••"
//           />
//         </div>

//         <Button onSubmit={handleSubmit} type="submit" className="w-full" disabled={loading}>
//           {loading ? "Signing up..." : "Sign Up"}
//         </Button>

//         <p className="text-center text-sm">
//           Already have an account?{" "}
//           <a href="/sign-in" className="text-blue-600 hover:underline">Sign in</a>
//         </p>
//       </form>
//     </div>
//   );
// }

// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/context/AuthContext";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { toast } from "@/components/ui/use-toast";
// import Image from "next/image";

// export default function SignUpPage() {
//   useEffect(() => {
//     document.title = "PupCart - Sign-Up Page";
//   }, []);

//   const { signUp, signInWithGoogle } = useAuth();
//   const router = useRouter();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSignUp = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await signUp({ email, password });
//       toast({ title: "Signup successful", description: "You are now logged in." });
//       router.push("/");
//     } catch (error: any) {
//       toast({ title: "Signup failed", description: error.message || "Please try again." });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignup = async () => {
//     try {
//       await signInWithGoogle();
//       toast({ title: "Signed in with Google", description: "Welcome to PupCart!" });
//       router.push("/");
//     } catch (error: any) {
//       toast({ title: "Google Sign-In failed", description: error.message || "Try again later." });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4">
//       <form onSubmit={handleSignUp} className="bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-6">
//         <h2 className="text-2xl font-bold text-center">Create Account</h2>

//         <div className="space-y-2">
//           <label className="block text-sm font-medium">Name</label>
//           <Input
//             type="text"
//             required
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="John"
//           />
//         </div>

//         <div className="space-y-2">
//           <label className="block text-sm font-medium">Email</label>
//           <Input
//             type="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="you@example.com"
//           />
//         </div>

//         <div className="space-y-2">
//           <label className="block text-sm font-medium">Password</label>
//           <Input
//             type="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="••••••••"
//           />
//         </div>

//         <Button type="submit" className="w-full" disabled={loading}>
//           {loading ? "Signing up..." : "Sign Up"}
//         </Button>

//         {/* Google Sign-In Button */}
//         <div className="text-center">
//           <p className="text-sm mb-2">or</p>
//           <Button
//             type="button"
//             onClick={handleGoogleSignup}
//             variant="outline"
//             className="w-full flex items-center justify-center gap-2"
//           >
//             <Image src="/google.com" alt="Google" width={20} height={20} />
//             Sign up with Google
//           </Button>
//         </div>

//         <p className="text-center text-sm">
//           Already have an account?{" "}
//           <a href="/sign-in" className="text-blue-600 hover:underline">
//             Sign in
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// }
// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/context/AuthContext";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { toast } from "@/components/ui/use-toast";
// import Image from "next/image";

// export default function SignUpPage() {
//   const router = useRouter();
//   const { signUp, signInWithGoogle } = useAuth();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       document.title = "PupCart - Sign-Up Page";
//     }
//   }, []);

//   const handleSignUp = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await signUp({ email, password });
//       toast({
//         title: "Signup successful",
//         description: "You are now logged in.",
//       });

//       // Delay to ensure auth state is ready before navigating
//       setTimeout(() => {
//         router.push("/");
//       }, 1000);
//     } catch (error: any) {
//       toast({
//         title: "Signup failed",
//         description: error.message || "Please try again.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoogleSignup = async () => {
//     try {
//       await signInWithGoogle();
//       toast({
//         title: "Signed in with Google",
//         description: "Welcome to PupCart!",
//       });

//       setTimeout(() => {
//         router.push("/");
//       }, 1000);
//     } catch (error: any) {
//       toast({
//         title: "Google Sign-In failed",
//         description: error.message || "Try again later.",
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4">
//       <form
//         onSubmit={handleSignUp}
//         className="bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-6"
//       >
//         <h2 className="text-2xl font-bold text-center">Create Account</h2>

//         <div className="space-y-2">
//           <label className="block text-sm font-medium">Name</label>
//           <Input
//             type="text"
//             required
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="John"
//           />
//         </div>

//         <div className="space-y-2">
//           <label className="block text-sm font-medium">Email</label>
//           <Input
//             type="email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="you@example.com"
//           />
//         </div>

//         <div className="space-y-2">
//           <label className="block text-sm font-medium">Password</label>
//           <Input
//             type="password"
//             required
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="••••••••"
//           />
//         </div>

//         <Button type="button" className="w-full" disabled={loading}  onClick={handleSignup}>
//          Sign up
//         </Button>

//         {/* Google Sign-In Button */}
//         <div className="text-center">
//           <p className="text-sm mb-2">or</p>
//           <Button
//             type="button"
//             onClick={handleGoogleSignup}
//             variant="outline"
//             className="w-full flex items-center justify-center gap-2"
//           >
//             <Image src="/google-icon.svg" alt="Google" width={20} height={20} />
//             Sign up with Google
//           </Button>
//         </div>

//         <p className="text-center text-sm">
//           Already have an account?{" "}
//           <a href="/sign-in" className="text-blue-600 hover:underline">
//             Sign in
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// }
// "use client"

// import type React from "react"

// import Link from "next/link"
// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { PawPrint, Lock } from "lucide-react"
// import { Metadata } from "next"
// // export const metadata:Metadata={
// //   title:{
// //     absolute:"PupCart-Sign Out Page"
// //   }
// // }

// export default function SignUpPage() {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [confirmPassword, setConfirmPassword] = useState("")
//   const [isLoading, setIsLoading] = useState(false)

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsLoading(true)

//     // Simulate account creation
//     setTimeout(() => {
//       setIsLoading(false)
//       // Redirect to home page after successful signup
//       window.location.href = "/"
//     }, 1500)
//   }

//   return (
//     <div className="container flex items-center justify-center min-h-[calc(100vh-200px)] px-4 py-12">
//       <Card className="w-full max-w-md">
//         <CardHeader className="space-y-1 text-center">
//           <div className="flex justify-center mb-2">
//             <PawPrint className="h-10 w-10 text-primary" />
//           </div>
//           <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
//           <CardDescription>Enter your information to create an account</CardDescription>
//         </CardHeader>
//         <form onSubmit={handleSubmit}>
//           <CardContent className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="name">Full Name</Label>
//               <Input id="name" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} required />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="name@example.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//               <p className="text-xs text-muted-foreground">
//                 Password must be at least 8 characters long and include a number and a special character.
//               </p>
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="confirmPassword">Confirm Password</Label>
//               <Input
//                 id="confirmPassword"
//                 type="password"
//                 value={confirmPassword}
//                 onChange={(e) => setConfirmPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="flex items-center space-x-2">
//               <input type="checkbox" id="terms" className="rounded border-gray-300" required />
//               <Label htmlFor="terms" className="text-sm font-normal">
//                 I agree to the{" "}
//                 <Link href="/terms" className="text-primary hover:underline">
//                   Terms of Service
//                 </Link>{" "}
//                 and{" "}
//                 <Link href="/privacy" className="text-primary hover:underline">
//                   Privacy Policy
//                 </Link>
//               </Label>
//             </div>
//           </CardContent>
//           <CardFooter className="flex flex-col">
//             <Button className="w-full" type="submit" disabled={isLoading}>
//               {isLoading ? "Creating account..." : "Create Account"}
//             </Button>
//             <div className="mt-4 text-center text-sm">
//               Already have an account?{" "}
//               <Link href="/sign-in" className="text-primary hover:underline">
//                 Sign in
//               </Link>
//             </div>
//             <div className="relative mt-6">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t"></div>
//               </div>
//               <div className="relative flex justify-center text-xs uppercase">
//                 <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
//               </div>
//             </div>
//             <div className="mt-6 grid grid-cols-2 gap-4">
//               <Button variant="outline" type="button">
//                 Google
//               </Button>
//               <Button variant="outline" type="button">
//                 Facebook
//               </Button>
//             </div>
//             <div className="mt-6 flex items-center justify-center">
//               <Lock className="h-4 w-4 text-muted-foreground mr-1" />
//               <span className="text-xs text-muted-foreground">Your information is securely encrypted</span>
//             </div>
//           </CardFooter>
//         </form>
//       </Card>
//     </div>
//   )
// }
// app/signin/page.tsx
// "use client";

// import { useState, useEffect } from "react";
// import { useAuth } from "@/context/AuthContext";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { FcGoogle } from "react-icons/fc";

// export default function SignUpPage() {
//   const { signUp, signInWithGoogle, user } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();
  

//   useEffect(() => {
//     if (user) router.push("/");
//   }, [user]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await signUp({ email, password });
//       alert("Account created successfully!");
//     } catch (error: any) {
//       alert(error.message);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Create your account</h2>

//         <button
//           onClick={signInWithGoogle}
//           className="flex items-center justify-center w-full border border-gray-300 py-2 rounded-md hover:bg-gray-100"
//         >
//           <FcGoogle className="mr-2 text-xl" /> Signup with Google
//         </button>

//         <div className="text-center my-4 text-gray-500">OR</div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <Input
//               type="email"
//               placeholder="Enter your email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <Input
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <Button type="submit" className="w-full">
//             Create account
//           </Button>
//         </form>

//         <p className="text-center text-sm mt-6 text-gray-600">
//           Already have an account? <a href="/sign-in" className="text-black font-medium underline">Sign in</a>
//         </p>
//       </div>
//     </div>
//   );
// }
// "use client"

// import { useState, useEffect } from "react"
// import { useAuth } from "@/context/AuthContext"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { FcGoogle } from "react-icons/fc"
// import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";


// export default function SignUpPage() {
//   const { signUp, signInWithGoogle, user } = useAuth()
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const router = useRouter()

//   useEffect(() => {
//     if (user) router.push("/")
//   }, [user])

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     try {
//       await signUp({ email, password })
//       alert("✅ Account created successfully!")

//       // Send confirmation email using EmailJS
//       emailjs
//         .send(
//           "service_dk61pco", // ✅ Your Service ID
//           "template_ke8ughk", // ✅ Your Template ID
//           { email: email,
//              website: "http://localhost:3000",
//            },   // ✅ Data for {{email}} variable in your template
          
//           "PIDm5lMmS4JSf3G6A" // ✅ Your Public Key
//         )
//         emailjs
//   .send("service_dk61pco", "template_ke8ughk", { email }, "PIDm5lMmS4JSf3G6A")
//   .then(
//     (result: any) => {
//       console.log("✅ Email sent successfully:", result.text);
//       alert("📬 A confirmation email has been sent!");
//     },
//     (error: any) => {
//       console.error("❌ Email send failed:", error);
//       alert("Failed to send confirmation email.");
//     }
//   );


//     } catch (error: any) {
//       alert(error.message)
//     }
//   }

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6 text-center">Create your account</h2>

//         <button
//           onClick={signInWithGoogle}
//           className="flex items-center justify-center w-full border border-gray-300 py-2 rounded-md hover:bg-gray-100"
//         >
//           <FcGoogle className="mr-2 text-xl" /> Signup with Google
//         </button>

//         <div className="text-center my-4 text-gray-500">OR</div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <Input
//               type="email"
//               placeholder="Enter your email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <Input
//               type="password"
//               placeholder="Enter password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <Button type="submit" className="w-full">
//             Create account
//           </Button>
//         </form>

//         <p className="text-center text-sm mt-6 text-gray-600">
//           Already have an account?{" "}
//           <a href="/sign-in" className="text-black font-medium underline">
//             Sign in
//           </a>
//         </p>
//       </div>
//     </div>
//   )
// }
"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FcGoogle } from "react-icons/fc";
import emailjs from "@emailjs/browser";
import { UserCredential } from "firebase/auth";


export default function SignUpPage() {
  const { signUp, signInWithGoogle, user } = useAuth();
  const [email, setEmail] = useState(""); // User email input
  const [password, setPassword] = useState("");
  const router = useRouter();
  
  useEffect(() => {
    if (user) router.push("/");
  }, [user]);

  // ✅ Sends Email After Account Creation
  const sendConfirmationEmail = (userEmail: string) => {
    emailjs
      .send(
        "service_dk61pco",         // ✅ your service ID
        "template_ke8ughk",        // ✅ your template ID
        { email: userEmail },      // ✅ template param
        "PIDm5lMmS4JSf3G6A"         // ✅ your public key
      )
      .then(
        (result: { text: string }) => {
          console.log("✅ Email sent:", result.text);
          alert("Confirmation email sent!");
        },
        (error: { text: string }) => {
          console.error("❌ Email failed:", error.text);
          alert("Failed to send email. Please try again.");
        }
      );
  };

  // ✅ On form submit
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const userCredential = await signUp({ email, password });
    console.log(userCredential.user.email); // you can use this
    alert("Account created successfully!");
  } catch (error: any) {
    alert(error.message);
  }
};


  // ✅ Google Signup
  const handleGoogleSignIn = async () => {
  try {
    const result: UserCredential = await signInWithGoogle();// ✅ typed
    const googleEmail = result?.user?.email;
  

    if (googleEmail) {
      sendConfirmationEmail(googleEmail);
    }
  } catch (error: any) {
    console.error("Google Sign In failed:", error.message);
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create your account</h2>

        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full border border-gray-300 py-2 rounded-md hover:bg-gray-100"
        >
          <FcGoogle className="mr-2 text-xl" /> Signup with Google
        </button>

        <div className="text-center my-4 text-gray-500">OR</div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <Input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Create account
          </Button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-600">
          Already have an account?{" "}
          <a href="/sign-in" className="text-black font-medium underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
