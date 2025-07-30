
import { notFound } from 'next/navigation';

const blogData: Record<
  string,
  {
    title: string;
    date: string;
    content: string;
  }
> = {
  'top-10-healthy-dog-foods': {
    title: 'Top 10 Healthy Dog Foods You Should Know',
    date: 'June 4, 2025',
    content: `
Feeding your furry friend with the right food is one of the most important decisions you'll make. Here are our top 10 picks for healthy, vet-recommended dog foods in 2025:

1. **Royal Canin Veterinary Diet** – Ideal for digestive health.
2. **Hill’s Science Diet** – Supports skin, coat, and weight control.
3. **Blue Buffalo Life Protection Formula** – Rich in real meat and antioxidants.
4. **Wellness Core Grain-Free** – High protein and grain-free for sensitive pups.
5. **Orijen Original Dry Dog Food** – Packed with fresh regional ingredients.
6. **Nutro Ultra Dry Dog Food** – A mix of lean proteins and superfoods.
7. **Purina Pro Plan** – Recommended by vets and widely available.
8. **Acana Wholesome Grains** – Balanced whole grains and animal proteins.
9. **Nature’s Logic Canine** – 100% natural with no synthetic ingredients.
10. **Canidae All Life Stages** – Suitable for multi-dog families.

👉 Always consult with your vet before switching foods. Each dog has unique needs depending on age, size, and health.
    `,
  },
  'how-to-groom-your-dog-at-home': {
    title: 'How to Groom Your Dog at Home Like a Pro',
    date: 'June 3, 2025',
    content: `
Grooming your dog at home is easier than you think! Follow these steps to keep your pup clean, happy, and comfortable:

1. **Brushing** – Use a brush suited to your dog’s coat. Daily brushing reduces shedding and avoids matting.
2. **Bathing** – Bathe your dog every 4-6 weeks using dog-specific shampoo. Rinse thoroughly.
3. **Nail Trimming** – Trim nails carefully to avoid the quick. Use dog clippers or grinders.
4. **Ear Cleaning** – Gently clean ears using a vet-approved solution and cotton ball.
5. **Teeth Brushing** – Use dog toothpaste and brush 2-3 times a week.
6. **Eye Wipe** – Use a clean cloth to gently clean tear stains or discharge.

Always make grooming a positive experience with treats and praise!
    `,
  },
  '5-early-signs-of-pet-illness': {
    title: '5 Early Signs of Illness in Pets Every Owner Should Notice',
    date: 'June 2, 2025',
    content: `
Early detection of illness can make all the difference in your pet's health. Watch out for these 5 signs:

1. **Changes in Appetite** – Refusing food or overeating can indicate health issues.
2. **Lethargy** – If your pet seems unusually tired or inactive, something might be wrong.
3. **Vomiting or Diarrhea** – Occasional upset is normal, but persistent symptoms need a vet.
4. **Behavior Changes** – Aggression, hiding, or excessive clinginess may signal discomfort.
5. **Unusual Odors** – Bad breath, ears, or skin smells may indicate infections or dental problems.

📞 If you notice any of these, schedule a vet appointment as soon as possible.
    `,
  },
};

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogData[params.slug];

  if (!post) return notFound();

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{post.date}</p>
      <article className="prose max-w-none whitespace-pre-line">
        {post.content}
      </article>
    </div>
  );
}
