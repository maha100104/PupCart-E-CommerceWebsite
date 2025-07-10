// 'use client';

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { QRCodeCanvas } from "qrcode.react";
// import { Button } from "@/components/ui/button";


// type Props = {
//   upiUrl: string;
// };

// export default function UPIPaymentPage() {
//   const router = useRouter();
//   const [upiUrl, setUpiUrl] = useState("");
//   const [amount, setAmount] = useState("");
//   const [screenshot, setScreenshot] = useState<File | null>(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const order = localStorage.getItem("latestOrder");
//     if (order) {
//       const { upiId, total } = JSON.parse(order);
//       const url = `upi://pay?pa=${upiId}&pn=YourStore&am=${total}&cu=INR`;
//       setUpiUrl(url);
//       setAmount(total);
//     }
//   }, []);

//   const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       if (file.type.startsWith("image/")) {
//         setScreenshot(file);
//         setError("");
//       } else {
//         setError("Please upload a valid image file (JPG/PNG).");
//       }
//     }
//   };

//   const handleConfirmPayment = () => {
//     if (!screenshot) {
//       setError("Please upload the payment screenshot before confirming.");
//       return;
//     }

//     // Optional: You can upload to backend / Cloudinary here.
//     // Simulate success:
//     setTimeout(() => {
//       router.push("/thank-you");
//     }, 500);
//   };

//   return (
//     <div className="container py-12 text-center max-w-xl mx-auto">
//       <h1 className="text-3xl font-bold mb-4">UPI Payment</h1>
//       <p className="text-muted-foreground mb-4">
//         Scan the QR code below and pay ₹{amount}
//       </p>

//       {upiUrl && <QRCodeCanvas value={upiUrl} size={200} />}

//       <div className="mt-6 text-left">
//         <label className="block font-medium mb-2">Upload Payment Screenshot</label>
//         <input type="file" accept="image/*" onChange={handleUpload} />
//         {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
//       </div>

//       <div className="mt-6">
//         <Button onClick={handleConfirmPayment}>
//           ✅ Confirm Payment & Continue
//         </Button>
//       </div>
//     </div>
//   );
// }

// components/upipaymentqr.tsx
'use client';
import { QRCodeCanvas } from 'qrcode.react';

type Props = {
  upiUrl: string;
};

export default function UPIPaymentQR({ upiUrl }: Props) {
  return (
    <div className="text-center">
      <QRCodeCanvas value={upiUrl} size={200} />
    </div>
  );
}
