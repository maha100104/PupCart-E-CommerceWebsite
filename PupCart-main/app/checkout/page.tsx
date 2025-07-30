

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/components/cart-provider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { CreditCard, ShieldCheck, Truck, ArrowLeft } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import UPIPaymentQR from "@/components/upipaymentqr";

function generateOrderId() {
  const timestamp = Date.now().toString();
  const randomNum = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
  return `ORD-${timestamp}-${randomNum}`;
}

interface Coupon {
  code: string;
  discount: number;
  expiry: string;
}

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const { toast } = useToast();
  const router = useRouter();

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("upi");
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);
  
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = appliedCoupon ? (subtotal * appliedCoupon.discount) / 100 : 0;
  const total = subtotal + (subtotal > 35 ? 0 : 5.99) - discount;
  const upiUrl = `upi://pay?pa=mahalakshmi01102004@okaxis&pn=Mahalakshmi&am=${total.toFixed(2)}&cu=INR`;

  // Load coupon from localStorage
  useEffect(() => {
    const getCoupon = () => {
      const stored = localStorage.getItem("appliedCoupon");
      if (stored) {
        try {
          const parsed: Coupon = JSON.parse(stored);
          if (new Date(parsed.expiry) > new Date()) {
            setAppliedCoupon(parsed);
          } else {
            localStorage.removeItem("appliedCoupon");
            setAppliedCoupon(null);
          }
        } catch {
          setAppliedCoupon(null);
        }
      } else {
        setAppliedCoupon(null);
      }
    };

    getCoupon();
    window.addEventListener("storage", getCoupon);
    return () => window.removeEventListener("storage", getCoupon);
  }, []);

  const handleRemoveCoupon = () => {
    localStorage.removeItem("appliedCoupon");
    setAppliedCoupon(null);
    toast({ title: "Coupon removed." });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");
    const newOrder = {
      orderId: generateOrderId(),
      date: new Date().toLocaleDateString(),
      items: cartItems,
      total,
      status: "Order Placed",
      paymentMethod,
      trackingStatus: ["Order Placed"],
    };

    localStorage.setItem("orders", JSON.stringify([newOrder, ...existingOrders]));
    localStorage.setItem("latestOrder", JSON.stringify({ upiId: "mahalakshmi01102004@okaxis", total }));

    setOrderPlaced(true);
    clearCart();
      if (paymentMethod === "upi") {
    router.push("/upi-payment"); 
  } else {
    toast({
      title: "Order placed!",
      description: "Thank you for your purchase. Your order will be delivered soon.",
    });
  }
   
  };

  if (cartItems.length === 0) {
    return (
      <div className="container px-4 py-16 text-center">
        <h1 className="text-3xl font-bold">Your cart is empty</h1>
        <Button asChild className="mt-8">
          <Link href="/shop">Shop Now</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8 md:py-12">
      <div className="mb-8">
        <Link href="/cart" className="flex items-center text-sm text-primary hover:underline">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Cart
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            {/* Shipping Info */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Shipping Information</h2>
              <Input required placeholder="First Name" />
              <Input required placeholder="Email Address" />
              <Input required placeholder="Phone Number" />
              <Input required placeholder="Street Address" />
              <Input required placeholder="City" />
              <Input required placeholder="ZIP / Postal Code" />
            </div>

            {/* Payment Method */}
            <div className="space-y-4 mt-6">
              <h2 className="text-xl font-semibold">Payment Method</h2>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-2 border rounded-md p-4">
                  <RadioGroupItem value="upi" id="upi" />
                  <Label htmlFor="upi">UPI</Label>
                </div>
                <div className="flex items-center space-x-2 border rounded-md p-4">
                  <RadioGroupItem value="cod" id="cod" />
                  <Label htmlFor="cod">Cash on Delivery</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="rounded border-gray-300" required />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the{" "}
                   <Link href="/terms" className="text-primary hover:underline">
                    Terms and Conditions
                  </Link>{" "}
                   and{" "}
                   <Link href="/privacy" className="text-primary hover:underline">
                     Privacy Policy
                   </Link>
                </Label>
              </div>

            <Button type="submit" className="w-full mt-4">
              Place Order
            </Button>
          </form>

          {orderPlaced && (
  <div className="mt-6">
    {paymentMethod === "upi" ? (
      <>
        <h2 className="text-xl font-bold mb-2">Thank you for your order!</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Scan the QR code below to complete your payment via UPI.
        </p>
        <UPIPaymentQR upiUrl={upiUrl} />
        <div className="text-sm mt-4">
          <p><strong>Amount:</strong> ₹{total.toFixed(2)}</p>
          <p><strong>UPI ID:</strong> mahalakshmi01102004@okaxis</p>
        </div>
      </>
    ) : (
      <>
        <h2 className="text-xl font-bold mb-2">🎉 Order Confirmed!</h2>
        <p className="text-sm text-muted-foreground">
          Your order has been placed successfully with Cash on Delivery. You’ll receive it soon.
        </p>
      </>
    )}
  </div>
)}

        </div>

        {/* Order Summary */}
        <div>
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

            {cartItems.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} × {item.quantity}</span>
                <span>₹{(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}

            <Separator className="my-2" />

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            {appliedCoupon && (
              <div className="flex justify-between text-green-600 mt-1">
                <span>
                  Discount ({appliedCoupon.code})
                  <br />
                  <span className="text-xs text-gray-500">
                    Expires: {new Date(appliedCoupon.expiry).toLocaleDateString()}
                  </span>
                </span>
                <span>-₹{discount.toFixed(2)}</span>
              </div>
            )}

            <div className="flex justify-between mt-2">
              <span>Shipping</span>
             
              <span>{subtotal > 35 ? "Free" : "₹5.99"}
                
                 
                 </span>
             
              
              
            </div>

            <Separator className="my-2" />

            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            {appliedCoupon && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleRemoveCoupon}
                className="mt-4 w-full"
              >
                Remove Coupon
              </Button>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}

