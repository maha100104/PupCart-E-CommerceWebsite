'use client';
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import UPIPaymentQR from "@/components/upipaymentqr";

export default function UPIPaymentPage() {
  const router = useRouter();
  const [upiUrl, setUpiUrl] = useState("");
  const [amount, setAmount] = useState("");
  const [screenshot, setScreenshot] = useState<File | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const order = localStorage.getItem("latestOrder");
    if (order) {
      const { upiId, total } = JSON.parse(order);
      const url = `upi://pay?pa=${upiId}&pn=PetCart&am=${total}&cu=INR`;
      setUpiUrl(url);
      setAmount(total);
    }
  }, []);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file?.type.startsWith("image/")) {
      setScreenshot(file);
      setError("");
    } else {
      setError("Please upload a valid image (JPG/PNG)");
    }
  };

  const handleConfirmPayment = () => {
    if (!screenshot) {
      setError("Upload screenshot before confirming.");
      return;
    }
    setTimeout(() => {
      router.push("/thankyou");
    }, 800);
  };

  return (
    <div className="container py-12 text-center max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">UPI Payment</h1>
      <p className="text-muted-foreground mb-4">
        Scan the QR below and pay ₹{amount}
      </p>

      {upiUrl && <UPIPaymentQR upiUrl={upiUrl} />}

      <div className="mt-6 text-left">
        <label className="block font-medium mb-2">Upload Payment Screenshot</label>
        <input type="file" accept="image/*" onChange={handleUpload} />
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
      </div>

      <div className="mt-6">
        <Button onClick={handleConfirmPayment}>✅ Confirm & Continue</Button>
      </div>
    </div>
  );
}
