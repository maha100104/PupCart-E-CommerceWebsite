'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { PawPrint } from 'lucide-react';

export default function Community() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Subscribed successfully!');
    setEmail('');
  };

  return (
    <section className="py-16 bg-white text-black">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center">
       
          <h2 className="text-3xl font-bold mb-4">Join Our community</h2>
          <p className="text-black/90 mb-6">
            Subscribe to our newsletter for pet care tips, exclusive offers, and updates on new products.
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
              className="px-4 py-2 rounded-lg bg-white placeholder:text-gray-500  shadow-sm focus:outline-none focus:ring-2 focus:ring-primary flex-1 text-black"
              required
            />
            <Button type="submit" className="bg-primary text-white hover:bg-primary">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
