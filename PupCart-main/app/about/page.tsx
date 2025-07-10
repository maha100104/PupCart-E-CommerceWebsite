
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PawPrint, Heart, ShieldCheck, Truck } from "lucide-react"
import { Metadata } from "next"
import Community from "@/components/community"
export const metadata:Metadata={
  title:{
    absolute:"PupCart-About Page"
  }
}
 


export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
        <Image
          // src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?q=80&w=1600&auto=format&fit=crop"
          // src="https://wallpaper-house.com/data/out/8/wallpaper2you_272798.jpg"
          src="https://img.freepik.com/premium-photo/dog-cat-are-looking-bird-bird_662214-525756.jpg?w=2000"
          width={1600}
          height={500}
          alt="Happy pets with owners"
          className="w-full h-[400px] object-cover"
          priority
        />
        <div className="container absolute top-0 left-0 right-0 z-20 flex flex-col items-center justify-center h-[400px]  text-center">
          <PawPrint className="h-12 w-12 text-white mb-4" />
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">About PupCart</h1>
          <p className="mt-4 text-xl text-white/90 max-w-2xl">
            Our mission is to simplify pet care while promoting healthier, happier lives for pets and the people who love them.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4">
                <p>
                  PupCart was founded in 2025 by a group of passionate pet lovers who believed that 
                  every pet deserves access to high-quality, affordable, and convenient products.
                </p>
                <p>
                  Fueled by our love for pets, we created PupCart to make pet care seamless, joyful, and reliable.
                  More than just a store, it's a trusted companion for pet parents across the country.
                  From quality products to doorstep delivery, everything we do is guided by care and commitment.
                </p>
                <p>
                  At PupCart, our team includes experienced pet owners, animal care experts, and e-commerce specialists 
                  who work together to carefully curate every
                   item we offer—from nutritious food and stylish accessories to safe toys and essential grooming products.
                </p>
                <p>
                  We believe pets are not just animals—they’re family. That’s why we’re dedicated to 
                  helping you give them the best care, love, and lifestyle possible. Every product we stock is 
                  chosen with heart, tested for quality, and backed by our promise to support the well-being of your furry friends
                </p>
              </div>
            </div>
            <div className="relative">
              {/* <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full z-0" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full z-0" /> */}
              <Image
                src="https://cdn.pixabay.com/photo/2024/05/16/06/06/pet-lover-8765133_1280.jpg"
                width={500}
                height={500}
                alt="PetPals founders with their pets"
                className="rounded-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-muted">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="max-w-3xl mx-auto text-lg mb-12">
            Our mission is to provide pet owners with convenient access to premium products that
             enhance the health, happiness, and well-being of their beloved companions.

          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Crafted with Care</h3>
              <p className="text-muted-foreground">
                Every product we offer is thoughtfully chosen and thoroughly vetted to meet our uncompromising standards for
                 quality, safety, and reliability.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Trusted Expertise</h3>
              <p className="text-muted-foreground">
                Our experienced team of veterinarians and pet specialists provides reliable guidance to help you make the best 
                choices for your pet’s health and happiness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick & Easy</h3>
              <p className="text-muted-foreground">
               Your pet’s essentials, delivered fast with same-day shipping and simple, hassle-free returns—making pet 
               care as smooth and stress-free as possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
          <p className="max-w-3xl mx-auto text-center text-muted-foreground mb-12">
            Our dedicated team of pet lovers works tirelessly to bring you the best products and service.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: "Mahalakshmi P",
                //role: "Founder & CEO",
                image: "https://img.freepik.com/premium-photo/headshot-photos-indian-women-dynamic-professions-occassions-indian-girl_978786-295.jpg?w=900",
              },
              {
                name: "Sumaiya R",
                //role: "Head Veterinarian",
                image: "https://img.freepik.com/premium-photo/professional-indian-female-headshots-business-corporate-women_203363-204.jpg?w=2000",
              },
              {
                name: "Reshma B S",
                //role: "Product Specialist",
                image: "https://static.vecteezy.com/system/resources/previews/025/474/309/non_2x/portrait-of-a-professional-woman-in-a-suit-business-woman-standing-in-an-office-ai-generated-photo.jpg",
              },
              // {
              //   name: "Taylor Brown",
              //   role: "Customer Experience",
              //   image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=300&auto=format&fit=crop",
              // },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mx-auto w-48 h-48 mb-4">
                  <div className="absolute inset-0 rounded-full bg-primary/10 transform rotate-45" />
                  <Image
                    src={member.image || "/placeholder.svg"}
                    width={200}
                    height={200}
                    alt={member.name}
                    className="rounded-full object-cover w-48 h-48 relative z-10"
                  />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                {/* <p className="text-muted-foreground">{member.role}</p> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "PupCart has completely transformed how I care for my two cats. Their product quality is top-notch, and the same-day delivery makes life so much easier.",
                author: "Michelle K.",
                location: "New York, NY",
              },
              {
                quote:
                  "PupCart has been a blessing for our busy household. From treats to toys, everything arrives quickly and is exactly what my dog loves. It’s like they truly understand what pets need!",
                author: "David L.",
                location: "Austin, TX",
              },
              {
                quote:
                  "I love how thoughtfully PupCart curates their products. My dog has allergies, and I’ve never had a single issue with anything I’ve ordered—it gives me real peace of mind.",
                author: "Sarah M.",
                location: "Seattle, WA",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <p className="italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-white/80">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16">
        <div className="container px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
            Subscribe to our newsletter for pet care tips, exclusive offers, and updates on new products.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 rounded-md border flex-1"
              required
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section> */}
     <Community/>

    </div>
  )
}
