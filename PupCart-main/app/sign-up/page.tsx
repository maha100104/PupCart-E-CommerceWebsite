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
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const router = useRouter();
  
  useEffect(() => {
    if (user) router.push("/");
  }, [user]);

  
  const sendConfirmationEmail = (userEmail: string) => {
    emailjs
      .send(
        "service_dk61pco",         
        "template_ke8ughk",        
        { email: userEmail },      
        "PIDm5lMmS4JSf3G6A"         
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

  
 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const userCredential = await signUp({ email, password });
    console.log(userCredential.user.email); 
    alert("Account created successfully!");
  } catch (error: any) {
    alert(error.message);
  }
};


  
  const handleGoogleSignIn = async () => {
  try {
    const result: UserCredential = await signInWithGoogle();
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















































































































































































      











            


























































































































































































































































































































































































































































  



































































































          









































































