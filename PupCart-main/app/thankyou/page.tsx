import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThankYouPage() {
  return (
    <div className="container px-4 py-16 text-center">
      <CheckCircle2 className="h-16 w-16 mx-auto text-green-500" />
      <h1 className="mt-6 text-3xl font-bold">Order Confirmed!</h1>
      <p className="mt-2 text-muted-foreground max-w-md mx-auto">
        Thank you for your purchase. We've sent a confirmation email with your order details.
      </p>

      {/* Show UPI QR code here if payment method is UPI */}
      {/* Later you can read from localStorage or backend */}

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Button asChild>
          <Link href="/shop">Continue Shopping</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
    </div>
  );
}
