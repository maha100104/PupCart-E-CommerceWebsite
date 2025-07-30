

import React from "react";
import { Metadata } from "next"
export const metadata:Metadata={
  title:{
    absolute:"PupCart-Shipping And Delivary Page"
  }
}

const ShippingPage = () => {
  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Shipping Information</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Domestic Shipping</h2>
          <p className="text-gray-700">
            At PupCart, we offer fast and reliable shipping across all major cities in India. Orders are processed within 1–2 business days. You will receive a tracking number via email or SMS once your package ships.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Shipping Rates & Delivery Estimates</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Standard Shipping:</strong> ₹50 (Free on orders above ₹499) – 3 to 5 business days.</li>
            <li><strong>Express Shipping:</strong> ₹99 – 1 to 2 business days.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Order Tracking</h2>
          <p className="text-gray-700">
            You can track your order using the tracking link sent to your registered email or from your account under "My Orders". If you face any issues, please contact our Help Center.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Shipping Restrictions</h2>
          <p className="text-gray-700">
            We currently ship only within India. We do not ship to PO boxes, military addresses, or restricted pin codes. For more details, please contact our support team.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Need Help?</h2>
          <p className="text-gray-700">
            Contact our support team via our <a href="/help" className="text-primary underline">Help Center</a> or call us at <strong>+91-7010063177</strong>. We’re available Mon–Sat, 9 AM to 6 PM.
          </p>
        </section>
      </div>
    </main>
  );
};

export default ShippingPage;
