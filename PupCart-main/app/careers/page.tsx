import { Link } from "lucide-react";
import ApplicationForm from "./apply/page"; // adjust path if needed
import React from "react";
import { Metadata } from "next"
export const metadata:Metadata={
  title:{
    absolute:"PupCart-careers Page"
  }
}

const jobOpenings = [
  {
    title: "Frontend Developer",
    type: "Full-time",
    location: "Chennai, India",
    description: "Build beautiful and fast UIs using React and Tailwind CSS.",
  },
  {
    title: "Backend Developer",
    type: "Full-time",
    location: "Remote",
    description: "Design scalable APIs and database systems using Node.js.",
  },
  {
    title: "UI/UX Designer",
    type: "Part-time",
    location: "Bangalore, India",
    description: "Create user-centered designs with Figma and Adobe XD.",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <section className="bg-primary text-white py-16 px-4 rounded-xl mb-10">
        <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg max-w-2xl">
          We're building something great — and we’d love your help. Explore our open positions below.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobOpenings.map((job, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all"
          >
            <h2 className="text-xl font-semibold text-primary">{job.title}</h2>
            <p className="text-sm text-gray-500 mt-1 mb-3">{job.type} • {job.location}</p>
            <p className="text-gray-700 mb-4">{job.description}</p>
            <button className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary transition">
             <a href="/careers/apply">Apply Now </a>
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}
