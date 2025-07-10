// src/app/returns/page.tsx

import React from "react";
import { Metadata } from "next"
export const metadata:Metadata={
  title:{
    absolute:"PupCart- Return And Refund Page"
  }
}

const ReturnsPage = () => {
  return (
    <main className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Return & Refund Policy</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Easy 7-Day Returns</h2>
          <p className="text-gray-700">
            At PupCart, we want you and your pet to be 100% satisfied. If you're not happy with your purchase, you can return it within 7 days of delivery.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Eligibility for Returns</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Item must be unused, unwashed, and in its original packaging.</li>
            <li>Perishable goods (like pet food or treats) are not eligible unless damaged during delivery.</li>
            <li>Returns must include proof of purchase (order ID or invoice).</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">How to Request a Return</h2>
          <p className="text-gray-700">
            You can initiate a return request by going to <strong>My Orders</strong> in your account or by emailing us at <a href="mailto:infopupcart@gmail.com" className="text-primary underline">support@pupcart.in</a>. Once your return is approved, our team will arrange pickup from your address.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Refunds</h2>
          <p className="text-gray-700">
            Once your return is received and inspected, your refund will be processed within 5–7 business days. The refund will be made to your original payment method.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Damaged or Wrong Items</h2>
          <p className="text-gray-700">
            If you receive a damaged or incorrect item, please share clear pictures within 24 hours of delivery at <a href="mailto:infopupcart@gmail.com" className="text-primary underline">support@pupcart.in</a> or via our <a href="/help" className="text-primary underline">Help Center</a>. We’ll ensure a quick resolution.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Need More Help?</h2>
          <p className="text-gray-700">
            Reach out to our support team via <a href="/help" className="text-primary underline">Help Center</a> or call us at <strong>+91-7010063177</strong>. We’re happy to help!
          </p>
        </section>
      </div>
    </main>
  );
};

export default ReturnsPage;
