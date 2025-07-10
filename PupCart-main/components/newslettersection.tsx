'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PawPrint } from 'lucide-react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Subscribed successfully!');
    setEmail('');
  };

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
          <PawPrint className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Join Our Pack</h2>
          <p className="text-white/90 mb-6">
            Subscribe to our newsletter for exclusive offers, pet care tips, and new product alerts.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="px-4 py-2 rounded-md flex-1 text-black"
              required
            />
            <Button type="submit" className="bg-white text-primary hover:bg-white/90">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
