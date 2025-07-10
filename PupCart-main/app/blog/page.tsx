// src/app/blog/page.tsx
'use client';

import Link from 'next/link';
import { Metadata } from "next"
import { useEffect } from 'react';

const blogPosts = [
  {
    slug: 'top-10-healthy-dog-foods',
    title: 'Top 10 Healthy Dog Foods You Should Know',
    date: 'June 4, 2025',
    description:
      'Feeding your dog nutritious food is essential. Discover 10 top-rated dog foods that ensure your pup’s health and happiness.',
  },
  {
    slug: 'how-to-groom-your-dog-at-home',
    title: 'How to Groom Your Dog at Home Like a Pro',
    date: 'June 3, 2025',
    description:
      'Want to keep your pup clean and happy? Learn how to safely groom your dog at home with simple tools and steps.',
  },
  {
    slug: '5-early-signs-of-pet-illness',
    title: '5 Early Signs of Illness in Pets Every Owner Should Notice',
    date: 'June 2, 2025',
    description:
      'Detecting pet illness early can save lives. Here are 5 warning signs every pet parent should watch for.',
  },
];

export default function BlogPage() {
  useEffect(() => {
    document.title = "PupCart - Blog Page";
  }, [])
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Our Latest Blogs</h1>
      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <div key={post.slug} className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <p className="mb-4 text-gray-700">{post.description}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-primary hover:underline"
            >
              Read more →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
