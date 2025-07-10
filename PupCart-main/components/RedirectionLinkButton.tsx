"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type Props = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export default function RedirectLinkButton({ href, children, className }: Props) {
  const router = useRouter();

  const handleClick = () => {
    const isLoggedIn = typeof window !== "undefined" && localStorage.getItem("user"); // Replace with actual check

    if (isLoggedIn) {
      router.push(href);
    } else {
      router.push("/sign-in");
    }
  };

  return (
    <Button onClick={handleClick} variant="link" className={className}>
      {children}
    </Button>
  );
}
