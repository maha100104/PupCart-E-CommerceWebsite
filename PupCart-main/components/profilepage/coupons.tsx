"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Coupon {
  code: string;
  discount: number;
  description: string;
  expiry: string; // ISO format
}

const availableCoupons: Coupon[] = [
  {
    code: "PUP10",
    discount: 10,
    description: "Get 10% off on all pet products",
    expiry: "2025-12-31",
  },
  {
    code: "FREESHIP",
    discount: 0,
    description: "Enjoy free shipping on your order",
    expiry: "2025-08-31",
  },
  {
    code: "WELCOME50",
    discount: 50,
    description: "₹50 off for first-time users",
    expiry: "2025-09-01",
  },
];

export default function CouponsSection() {
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("appliedCoupon");
    if (stored) {
      try {
        const parsed: Coupon = JSON.parse(stored);
        if (parsed.code && new Date(parsed.expiry) > new Date()) {
          setAppliedCoupon(parsed);
        } else {
          localStorage.removeItem("appliedCoupon");
        }
      } catch (err) {
        localStorage.removeItem("appliedCoupon");
      }
    }
  }, []);

  const handleApply = (coupon: Coupon) => {
    localStorage.setItem("appliedCoupon", JSON.stringify(coupon));
    setAppliedCoupon(coupon);
  };

  const handleRemove = () => {
    localStorage.removeItem("appliedCoupon");
    setAppliedCoupon(null);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">🎟️ Available Coupons</h2>

      {availableCoupons.map((coupon) => (
        <Card key={coupon.code} className="p-4 space-y-2">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold">{coupon.code}</p>
              <p className="text-sm text-gray-600">{coupon.description}</p>
              <p className="text-sm text-primary font-medium">
                Discount: {coupon.discount > 0 ? `${coupon.discount}%` : "Special offer"}
              </p>
              <p className="text-xs text-gray-500">Expires: {coupon.expiry}</p>
            </div>
            {appliedCoupon?.code === coupon.code ? (
              <Button variant="outline" onClick={handleRemove}>Remove</Button>
            ) : (
              <Button onClick={() => handleApply(coupon)}>Apply</Button>
            )}
          </div>
        </Card>
      ))}

      {appliedCoupon && (
        <>
          <Separator />
          <p className="text-green-600 text-sm">
            🎉 Coupon <strong>{appliedCoupon.code}</strong> applied successfully!
          </p>
        </>
      )}
    </div>
  );
}
