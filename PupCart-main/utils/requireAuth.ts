"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export function useRequireAuth() {
  const { user } = useAuth();
  const router = useRouter();

  const checkAuth = (callback?: () => void) => {
    if (user) {
      if (callback) callback();
    } else {
      router.push("/sign-in");
    }
  };

  return { checkAuth };
}
