//sign in/code
"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import ReCAPTCHA from "react-google-recaptcha";
import { Eye, EyeOff } from "lucide-react"; // Add at the top

export default function SignInPage() {
  const { user, signIn, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
const siteKey = "6LfStXArAAAAABVMoejJ6m-flhKBU2HkVzZRxP0p";
// Inside your component:
const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user) router.push("/");
  }, [user]);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  setError("");

  if (!captchaToken) {
    setError("Please complete the CAPTCHA.");
    setIsLoading(false);
    return;
  }

  try {
    await signIn({ email, password });
    router.push("/");
  } catch (err: any) {
    setError(err.message || "Login failed.");
  } finally {
    setIsLoading(false);
  }
};


  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signInWithGoogle();
      router.push("/");
    } catch (err: any) {
      setError(err.message || "Google sign-in failed.");
    } finally {
      setIsLoading(false);
    }
  };
const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsLoading(true);
  try {
    await signIn({ email, password });
    router.push("/"); // ✅ redirect to homepage
  } catch (error: any) {
    // 🔴 Handle Firebase auth errors
    if (error.code === "auth/user-not-found") {
      alert("No user found with this email. Please sign up.");
    } else if (error.code === "auth/wrong-password") {
      alert("Incorrect password. Try again.");
    } else if (error.code === "auth/invalid-credential") {
      alert("Invalid login credentials. Please try again or use Google Sign-in.");
    } else {
      alert(error.message); // fallback for unknown errors
    }
  } finally {
    setIsLoading(false);
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Log in to your account</h2>

        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full border border-gray-300 py-2 rounded-md hover:bg-gray-100"
        >
          <FcGoogle className="mr-2 text-xl" /> Sign in with Google
        </button>

        <div className="text-center my-4 text-gray-500">OR</div>

        {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          
          <div>
  <label className="block text-sm font-medium text-gray-700">Password</label>
  <div className="relative">
    <Input
      type={showPassword ? "text" : "password"}
      placeholder="Enter your password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      className="pr-10"
    />
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
      tabIndex={-1}
    >
      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
    </button>
  </div>
</div>

  


          <ReCAPTCHA
  sitekey={siteKey}
  onChange={(token) => setCaptchaToken(token)}
  className="mx-auto"
/>


          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </Button>
        </form>

        <p className="text-center text-sm mt-4 text-gray-600">
          <a href="/forgot-password" className="text-black font-medium underline">
            Forgot Password?
          </a>
        </p>

        <p className="text-center text-sm mt-6 text-gray-600">
          Don’t have an account?{" "}
          <a href="/sign-up" className="text-black font-medium underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}
