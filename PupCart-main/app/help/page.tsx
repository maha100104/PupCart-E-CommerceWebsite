// File: src/app/help/page.tsx

import React from 'react';
import { Metadata } from "next"
export const metadata:Metadata={
  title:{
    absolute:"PupCart- Help Page"
  }
}

const HelpCenterPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">🐾 Help Center</h1>

      <p className="text-lg mb-8 text-center">
        We’re here to make your shopping experience as smooth and joyful as playing fetch!<br />
        Browse our FAQs below or contact us if you need a helping paw 🐶
      </p>

      {/* Orders & Shipping */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">📦 Orders & Shipping</h2>
        <ul className="space-y-3">
          <li><strong>How do I track my order?</strong><br />Check your email for a tracking link or visit the "My Orders" section in your account.</li>
          <li><strong>How long does delivery take?</strong><br />Delivery usually takes 3–5 business days. Express shipping is available for some items.</li>
          <li><strong>Do you ship across India?</strong><br />Yes! We deliver throughout India using reliable courier partners.</li>
          <li><strong>What if my package is delayed or missing?</strong><br />Wait 48 hours after the expected delivery date, then contact us at <a href="mailto:infopupcart@gmail.com" className="text-primary underline">support@pupcart.in</a>.</li>
        <li><strong>For more details vist </strong><a href="/shipping" className="text-primary underline">shippingPage</a></li>
        </ul>
        
      </section>

      {/* Returns & Refunds */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔄 Returns & Refunds</h2>
        <ul className="space-y-3">
          <li><strong>What is your return policy?</strong><br />We accept returns within 7 days of delivery for unopened, unused items. Perishable goods are non-returnable.</li>
          <li><strong>How do I request a return?</strong><br />Go to "My Orders → Return Item", select the item and reason, then submit your request.</li>
          <li><strong>When will I get my refund?</strong><br />Refunds are processed within 5–7 business days after we inspect the returned product.</li>
        </ul>
      </section>

      {/* Payments */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">💳 Payments</h2>
        <ul className="space-y-3">
          <li><strong>What payment methods are accepted?</strong><br />We accept UPI, Google Pay, PhonePe, Paytm, debit/credit cards, and COD on select orders.</li>
          <li><strong>Payment failed but money deducted. What now?</strong><br />Refunds usually auto-process in 5–7 days. If not, email <a href="mailto:infopupcart@gmail.com" className="text-primary underline">billing@pupcart.in</a>.</li>
        </ul>
      </section>

      {/* Account */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">👤 My Account</h2>
        <ul className="space-y-3">
          <li><strong>How do I create an account?</strong><br />Click "Sign Up" and enter your email/phone and password to register.</li>
          <li><strong>I forgot my password. How do I reset it?</strong><br />Click "Forgot Password" on the login page to reset via email or SMS.</li>
        </ul>
      </section>

      {/* Product Info */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🐶 Product & Pet Care</h2>
        <ul className="space-y-3">
          <li><strong>How to choose the right food for my pet?</strong><br />Check product labels or use our "Pet Advisor" quiz. Still unsure? Contact us.</li>
          <li><strong>Are PupCart products vet-approved?</strong><br />Yes, we list trusted brands with verified quality and certifications.</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">📩 Need More Help?</h2>
        <p className="mb-2">Still stuck or want to talk to a real human?</p>
        <ul>
          <li>📧 Email: <a href="mailto:infopupcart@gmail.com" className="text-primary underline">support@pupcart.in</a></li>
          <li>📞 Phone: +91-7010063177</li>
          <li>💬 Live Chat: Available 10 AM – 8 PM (Mon–Sat)</li>
        </ul>
        <p className="mt-4">Or visit our <a href="/contact" className="text-primary underline">Contact Us</a> page.</p>
      </section>
    </div>
  );
};

export default HelpCenterPage;
